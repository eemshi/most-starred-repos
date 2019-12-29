import React from 'react';
import '../styles.less';
import { IRepo, ICommit } from '../types';
import axios from 'axios';

const RepoCard: React.FunctionComponent<IRepoCardProps> = ({ repo }) => {
    const { name, owner, description, url, stargazers_count } = repo;

    const [isExpanded, setIsExpanded] = React.useState(false);
    const [commits, setCommits] = React.useState<[ICommit] | null>(null);

    const _getCommits = async () => {
        const res = await axios.get('/commits', { params: { name, owner: owner.login } });
        setCommits(res.data);
    };

    const _toggleCommits = () => {
        if (!commits) {
            _getCommits();
        }
        setIsExpanded(!isExpanded);
    };

    const _renderCommits = () => {
        if (commits) {
            if (!commits.length) {
                return <p>No commits from the last 24 hours</p>;
            }
            return (
                <div>
                    <h4>Commits from the last 24 hours</h4>
                    <ul>
                        {commits?.map(commit => (
                            <li>{commit.commit.message}</li>
                        ))}
                    </ul>
                </div>
            );
        }
        return <p>Checking repo...</p>
    };

    return (
        <div className={`repo-card-wrapper ${isExpanded ? 'expanded' : ''}`}>
            <div className="repo-card">
                <a href={url}>
                    <h3>{name}</h3>
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
