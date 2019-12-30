import React from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import { IRepo } from '../types';
import { Error, Loader, RepoCard } from '../components/index';

const { useState, useEffect } = React;

const Home: NextPage = () => {
    const [repos, setRepos] = useState<[IRepo] | null>(null);
    const [error, setError] = useState<string | null>(null);

    const _getRepos = async () => {
        try {
            const res = await axios.get('/most-stars', { params: { limit: 10 } });
            setRepos(res.data);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        if (!repos) {
            _getRepos();
        }
    });

    const _RepoGrid = () => {
        return (
            <div className="repo-grid">
                {repos?.map(repo => (
                    <RepoCard key={repo.id} repo={repo} />
                ))}
            </div>
        );
    };

    return (
        <div className="container">
            <header>
                <h1>Most Popular Github Repos</h1>
            </header>
            <section>
                {error ? <Error message={error} /> : repos ? <_RepoGrid /> : <Loader />}
            </section>
        </div>
    );
};

export default Home;
