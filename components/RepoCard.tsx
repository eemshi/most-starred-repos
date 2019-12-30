import React from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';
import { IRepo, ICommit } from '../types';
import { Error } from './index';

const { useState } = React;

const RepoCard: React.FunctionComponent<{ repo: IRepo }> = ({ repo }) => {
    const { name, owner, html_url, stargazers_count } = repo;

    const [isExpanded, setIsExpanded] = useState(false);
    const [commits, setCommits] = useState<[ICommit] | null>(null);
    const [error, setError] = useState<string | null>(null);

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
                    <ul>
                        {commits?.map(commit => (
                            <li key={commit.sha}>
                                <a href={commit.html_url}>{commit.commit.message}</a>
                                <br />
                                <span className="commit-author">
                                    {commit.author.login}
                                </span>{' '}
                                <span className="commit-date">
                                    committed at{' '}
                                    {DateTime.fromISO(commit.commit.author.date).toFormat(
                                        'MMM d, h:mm a'
                                    )}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
        return <p>No commits in the last 24 hours</p>;
    };

    return (
        <div className={`repo-card-wrapper ${isExpanded ? 'expanded' : ''}`}>
            <div className="repo-card">
                <h2>
                    <a href={html_url}>{name}</a>
                </h2>
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
