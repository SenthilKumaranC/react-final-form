import { useCallback } from "react";
import { Field } from "react-final-form";
import ErrorMessage from "../../Error/Error";
import SwitchAdapter from "../../InputComponentAdapters/SwitchAdapter/SwitchAdapter";

const RememberMeField = () => {

    const fieldUI = useCallback(({ input, meta }) => {
        return (
            <>
                <SwitchAdapter input={input} variant="outlined"></SwitchAdapter>
                <ErrorMessage {...meta}></ErrorMessage>
            </>
        )
    }, [])

    return <>
        <Field name="rememberme" render={fieldUI}></Field>
    </>
}

export default RememberMeField