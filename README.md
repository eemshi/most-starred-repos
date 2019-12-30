# Most ★ Repos

Project board: [https://github.com/eemshi/most-starred-repos/projects/1](https://github.com/eemshi/most-starred-repos/projects/1)

## Future

Next steps
- Refine API param names & responses/errors
- Testing with Jest
  - Frontend + React Testing Library
  - API + Supertest
- Get feedback from a UX designer
- Toggle between Light/Dark mode

v2 ?
- GraphQL layer with Apollo and caching

---

## Prerequisites

-   Node 10.13.0
    -   If you have `nvm` installed, you can run `nvm use` to switch to this version
-   [Yarn](https://yarnpkg.com/en/docs/install#mac-stable)

---

## Local development

Install dependencies
```
yarn
```
Start dev server
```
yarn dev
```
The app is now available at http://localhost:3000

---

## API

### `/most-stars`
```
GET /most-stars?limit={number_of_repos}
```
### Reponse
```
[
  {
    "sha": "c3580674810f434248f9b8efc84d1e50c943da3d",
    "html_url": "https://github.com/eemshi/most-starred-repos/commit/c3580674810f434248f9b8efc84d1e50c943da3d",
    "commit": {
      "author": {
        "name": "eemshi",
        "email": "oreneemshi@gmail.com",
        "date": "2019-12-30T06:49:11Z"
      },
      "committer": {
        "name": "eemshi",
        "email": "oreneemshi@gmail.com",
        "date": "2019-12-30T06:49:11Z"
      },
      "message": "responsive styles",
      "tree": {
        "sha": "6dd7ddb855104f4f5945fb4541702022b1e07bc7",
        "url": "https://api.github.com/repos/eemshi/most-starred-repos/git/trees/6dd7ddb855104f4f5945fb4541702022b1e07bc7"
      },
      "url": "https://api.github.com/repos/eemshi/most-starred-repos/git/commits/c3580674810f434248f9b8efc84d1e50c943da3d",
      "comment_count": 0,
      "verification": {
        "verified": false,
        "reason": "unsigned",
        "signature": null,
        "payload": null
      }
    },
    "author": {
      "login": "eemshi",
      "id": 10643091,
      "node_id": "MDQ6VXNlcjEwNjQzMDkx",
      "avatar_url": "https://avatars3.githubusercontent.com/u/10643091?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/eemshi",
      "html_url": "https://github.com/eemshi",
      "followers_url": "https://api.github.com/users/eemshi/followers",
      "following_url": "https://api.github.com/users/eemshi/following{/other_user}",
      "gists_url": "https://api.github.com/users/eemshi/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/eemshi/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/eemshi/subscriptions",
      "organizations_url": "https://api.github.com/users/eemshi/orgs",
      "repos_url": "https://api.github.com/users/eemshi/repos",
      "events_url": "https://api.github.com/users/eemshi/events{/privacy}",
      "received_events_url": "https://api.github.com/users/eemshi/received_events",
      "type": "User",
      "site_admin": false
    }
  }
]
```

---

### `/commits`
```
GET /commits?owner={repo_owner_username}&name={repo_name}
```
### Response
```
[
  {
    "id": 28457823,
    "name": "freeCodeCamp",
    "owner": {
      "login": "freeCodeCamp",
      "id": 9892522,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjk4OTI1MjI=",
      "avatar_url": "https://avatars0.githubusercontent.com/u/9892522?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/freeCodeCamp",
      "html_url": "https://github.com/freeCodeCamp",
      "followers_url": "https://api.github.com/users/freeCodeCamp/followers",
      "following_url": "https://api.github.com/users/freeCodeCamp/following{/other_user}",
      "gists_url": "https://api.github.com/users/freeCodeCamp/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/freeCodeCamp/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/freeCodeCamp/subscriptions",
      "organizations_url": "https://api.github.com/users/freeCodeCamp/orgs",
      "repos_url": "https://api.github.com/users/freeCodeCamp/repos",
      "events_url": "https://api.github.com/users/freeCodeCamp/events{/privacy}",
      "received_events_url": "https://api.github.com/users/freeCodeCamp/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/freeCodeCamp/freeCodeCamp",
    "stargazers_count": 307768
  }
]
```
