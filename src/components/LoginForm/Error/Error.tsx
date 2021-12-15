const ErrorMessage = ({ touched, error }: { touched: boolean, error: string }) => {
    return <>
        {touched && error && <span>{error}</span>}
    </>
}

export default ErrorMessage