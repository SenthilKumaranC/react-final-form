import React, { useCallback } from "react";
import { Field } from "react-final-form";
import { composeValidators } from "../../../../utilities/validators/composeValidators";
import { lengthValidator } from "../../../../utilities/validators/lengthValidator";
import { requiredValidator } from "../../../../utilities/validators/requiredValidator";
import ErrorMessage from "../../Error/Error";
import TextFieldAdapter from "../../InputComponentAdapters/TextFieldAdapter/TextFiledAdapter";


const PasswordField = () => {

    const fieldUI = useCallback(({ input, meta }) => {
        return (
            <>
                <TextFieldAdapter input={input} variant="outlined" type="password" label="Password"> </TextFieldAdapter>
                <ErrorMessage {...meta}></ErrorMessage>
            </>
        )
    }, [])

    return <>
        <Field validate={composeValidators(requiredValidator,lengthValidator(6))} name="password" render={fieldUI}></Field>
    </>
}

export default PasswordField