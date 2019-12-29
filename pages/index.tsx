import { NextPage } from 'next';
import axios from 'axios';

const Home: NextPage<{ data: object | undefined }> = ({ data }) => (
    <h1>Hello world - user agent: {data}</h1>
);

Home.getInitialProps = async () => {
    const data = await axios.get('/most-stars');
    return data;
};

export default Home;
