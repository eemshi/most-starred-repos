const express = require('express');
const axios = require('axios');
const _ = require('lodash');

const server = express();

server.get('/most-stars', async (req, res) => {
    const limit = req.query.limit ? req.query.limit : 100;
    try {
        const body = await axios.get(
            `https://api.github.com/search/repositories?q=stars:>=100&sort=stars&per_page=${limit}`
        );
        const repositories = body.data.items.map(repo => {
            return _.pick(repo, ['id', 'name', 'owner', 'description', 'url', 'stargazers_count']);
        });
        res.json(repositories);
    } catch (err) {
        res.status(err.response.status).end(err.response.statusText);
    }
});

server.get('/commits', async (req, res) => {
    const { owner, name } = req.query;
    const thisTimeYesterday = new Date(Date.now() - 24 * 3600 * 1000).toISOString();
    try {
        const body = await axios.get(
            `https://api.github.com/repos/${owner}/${name}/commits?since=${thisTimeYesterday}`
        );
        const commits = body.data.map(commit => {
            return _.pick(commit, ['commit', 'author']);
        });
        res.json(commits);
    } catch (err) {
        res.status(err.response.status).end(err.response.statusText);
    }
});

module.exports = server;
