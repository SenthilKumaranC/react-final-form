import { useCallback } from "react"
import { Form } from "react-final-form"
import AgeField from "./Fields/AgeField/AgeField"
import EmailField from "./Fields/EmailField/EmailField"
import GenderField, { FruitsField } from "./Fields/GenderField/GenderField"
import PasswordField from "./Fields/PasswordField/PasswordField"
import RememberMeField from "./Fields/RememberMeField/RememberMeField"
import FieldsWrapper from "./FieldsWrapper/FieldsWrapper"
import HtmlFormWrapper from "./HtmlFormWrapper/HtmlFormWrapper"
import SubmitButton from "./SubmitButton/SubmitButton"

const LoginForm = () => {

    const onSubmit = useCallback((values) => {
        console.log(values);
    }, [])

    const formUI = useCallback(({ handleSubmit, invalid }) =>
        <HtmlFormWrapper>
            <form onSubmit={handleSubmit} className="FullHeight">
                <FieldsWrapper>
                    <EmailField></EmailField>
                    <PasswordField></PasswordField>
                    <FruitsField></FruitsField>
                    <GenderField></GenderField>
                    <AgeField></AgeField>
                    <RememberMeField></RememberMeField>
                    <SubmitButton invalid={invalid}></SubmitButton>
                </FieldsWrapper>
            </form>
        </HtmlFormWrapper>
        , [])

    return <>
        <Form
            onSubmit={onSubmit}
            render={formUI}
        />
    </>
}

export default LoginForm