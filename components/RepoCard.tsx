import React from 'react';
import '../styles.less';
import { IRepo } from '../types';

const RepoCard: React.FunctionComponent<IRepoCardProps> = ({ repo }) => {
    const { name, owner, description, url, stargazers_count } = repo;
    return (
        <div className="repo-card-wrapper">
            <div className="repo-card">
                <a href={url}>
                    <h3>{name}</h3>
                </a>{' '}
                <p className="owner">{owner.login}</p>
                <p className="stars">★ {stargazers_count}</p>
            </div>
        </div>
    );
};

export default RepoCard;

export interface IRepoCardProps {
    repo: IRepo;
}
