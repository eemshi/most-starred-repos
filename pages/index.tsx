import React from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import { IRepo } from '../types';
import RepoCard from '../components/RepoCard';

const { useState, useEffect } = React;

const Home: NextPage = () => {
    const [repos, setRepos] = useState<[IRepo] | null>(null);

    const getRepos = async () => {
        const res = await axios.get('/most-stars', { params: { limit: 3 } });
        setRepos(res.data);
    };

    useEffect(() => {
        if (!repos) {
            getRepos();
        }
    });

    const Loader: React.FunctionComponent = () => {
        return <p>Loading...</p>;
    };

    const _renderRepos = () => {
        return repos?.map(repo => <RepoCard key={repo.id} repo={repo} />);
    };

    return (
        <div className="container">
            <h1>Most Popular Github Repos</h1>
            <div className="repo-grid">{repos ? _renderRepos() : <Loader />}</div>
        </div>
    );
};

export default Home;
