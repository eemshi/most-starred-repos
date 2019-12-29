export interface IRepo {
    id: number;
    name: string;
    owner: {
        login: string;
    };
    description: string;
    url: string;
    stargazers_count: number;
}

export interface ICommit {
    commit: {
        author: {
            name: string,
            date: string
        },
        message: string,
        url: string
    },
    author: {
        avatar_url: string
    }
}
