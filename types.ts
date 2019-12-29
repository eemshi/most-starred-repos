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
            date: string
        },
        message: string
    },
    author: {
        login: string
    }
}
