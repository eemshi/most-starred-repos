import React from 'react';
import '../styles.less';
import { IRepo, ICommit } from '../types';
import { Error } from './index';
import axios from 'axios';
import { DateTime } from 'luxon';

const RepoCard: React.FunctionComponent<IRepoCardProps> = ({ repo }) => {
    const { name, owner, html_url, stargazers_count } = repo;

    const [isExpanded, setIsExpanded] = React.useState(false);
    const [commits, setCommits] = React.useState<[ICommit] | null>(null);
    const [error, setError] = React.useState<string | null>(null);

    const _getCommits = async () => {
        try {
            const res = await axios.get('/commits', {
                params: { name, owner: owner.login }
            });
            setCommits(res.data);
        } catch (err) {
            setError(err.message);
        }
    };

    const _toggleCommits = () => {
        if (!commits) {
            _getCommits();
        }
        setIsExpanded(!isExpanded);
    };

    // TODO: move to own?
    const _renderCommits = () => {
        if (error) {
            return <Error message={error} />;
        }
        if (!commits) {
            return <p>Checking repo...</p>;
        }
        if (commits.length) {
            return (
                <div>
                    <h3>In the last 24 hours...</h3>
                    <table>
                        {commits?.map(commit => (
                            <tr key={commit.sha}>
                                <td className="commit-author">{commit.author.login}</td>
                                <td className="commit-message">
                                    <a href={commit.html_url}>{commit.commit.message}</a>
                                </td>
                                <td className="commit-date">
                                    {DateTime.fromISO(commit.commit.author.date).toFormat(
                                        'MMM d, h:mm a'
                                    )}
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            );
        }
        return <p>No commits in the last 24 hours</p>;
    };

    return (
        <div className={`repo-card-wrapper ${isExpanded ? 'expanded' : ''}`}>
            <div className="repo-card">
                <a href={html_url}>
                    <h2>{name}</h2>
                </a>{' '}
                <p className="owner">{owner.login}</p>
                <p className="stars">★ {stargazers_count}</p>
                <button onClick={_toggleCommits}>
                    {isExpanded ? 'Hide Commits' : 'Commits'}
                </button>
                {isExpanded && _renderCommits()}
            </div>
        </div>
    );
};

export default RepoCard;

export interface IRepoCardProps {
    repo: IRepo;
}
