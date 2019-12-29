import React from 'react';
import { NextPage } from 'next';
import axios from 'axios';

const { useState, useEffect } = React;

const Home: NextPage = () => {
    const [repos, setRepos] = useState([]);

    const getRepos = async () => {
        const res = await axios.get('/most-stars', { params: { limit: 3 } });
        setRepos(res.data);
    };

    useEffect(() => {
        getRepos();
    });

    return <h1>{JSON.stringify(repos)}</h1>;
};

export default Home;
