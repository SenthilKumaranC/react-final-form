import React, { useCallback } from "react";
import { Field } from "react-final-form";
import { composeValidators } from "../../../../utilities/validators/composeValidators";
import { emailValidator } from "../../../../utilities/validators/emailValidator";
import { requiredValidator } from "../../../../utilities/validators/requiredValidator";
import ErrorMessage from "../../Error/Error";
import TextFieldAdapter from "../../InputComponentAdapters/TextFieldAdapter/TextFiledAdapter";


const EmailField = () => {

    const fieldUI = useCallback(({ input, meta }) => {
        return (
            <>
                <TextFieldAdapter input={input} variant="outlined" label="Email" > </TextFieldAdapter>
                <ErrorMessage {...meta}></ErrorMessage>
            </>
        )
    }, [])

    return <>
        <Field validate={composeValidators(requiredValidator,emailValidator)} name="email" render={fieldUI}></Field>
    </>
}

export default EmailField