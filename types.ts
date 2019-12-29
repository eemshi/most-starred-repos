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
