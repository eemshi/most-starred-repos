const Error: React.FunctionComponent<{ message: string }> = ({ message }) => (
    <p className="error">
        Something went wrong. Please try reloading the page.
        <br />
        {message}
    </p>
);

export default Error;
