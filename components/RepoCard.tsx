import React from 'react';
import '../styles.less';
import { IRepo } from '../types';

const RepoCard: React.FunctionComponent<IRepoCardProps> = ({ repo }) => {
    const { name, owner, description, url, stargazers_count } = repo;
    return (
        <div className="repo-card">
            <a href={url}>
                <h3>{name}</h3>
            </a>
            <p>{owner.login}</p>
            <p>{stargazers_count}</p>
        </div>
    );
};

export default RepoCard;

export interface IRepoCardProps {
    repo: IRepo;
}
