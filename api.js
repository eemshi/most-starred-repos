const express = require('express');
const axios = require('axios');
const _ = require('lodash');

const server = express();

server.get('/most-stars', async (req, res) => {
    try {
        const body = await axios.get(
            "https://api.github.com/search/repositories?q=stars:>=18500000"
        );
        const repositories = body.data.items.map(repo => {
            return _.pick(repo, [
                'id',
                'url',
                'stargazers_count'
            ]);
        });
        res.json(repositories);
    } catch (err) {
        res.status(err.response.status).end(err.response.statusText);
    }
});

module.exports = server;
