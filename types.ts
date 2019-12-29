export interface IRepo {
    id: number;
    name: string;
    owner: {
        login: string;
    };
    html_url: string;
    stargazers_count: number;
}

export interface ICommit {
    sha: number,
    html_url: string,
    commit: {
        author: {
            name: string,
            date: string
        },
        message: string
    },
    author: {
        avatar_url: string
    }
}
