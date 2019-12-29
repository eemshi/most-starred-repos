const Error: React.FunctionComponent<{ message: string }> = ({ message }) => (
    <div className="error">
        <h3>Something went wrong. Please try reloading the page.</h3>
        {message}
    </div>
);

export default Error;
