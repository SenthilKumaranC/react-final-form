import HtmlFormWrapper from "../LoginForm/HtmlFormWrapper/HtmlFormWrapper"
import LoginForm from "../LoginForm/LoginForm"

const LoginPage = () => {
    return <>
        <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <LoginForm></LoginForm>
        </div>
    </>
}

export default LoginPage