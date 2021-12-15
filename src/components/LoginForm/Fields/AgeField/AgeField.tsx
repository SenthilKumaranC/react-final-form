import { useCallback } from "react"
import { Field } from "react-final-form"
import TextFieldAdapter from "../../InputComponentAdapters/TextFieldAdapter/TextFiledAdapter"
import ErrorMessage from "../../Error/Error";
import { ageValidator } from "../../../../utilities/validators/ageValidator";

const AgeField = () => {

    const fieldUI = useCallback(({ input, meta }) => {
        return <>
            <TextFieldAdapter input={input} type="number" label="Age"></TextFieldAdapter>
            <ErrorMessage {...meta}></ErrorMessage>
        </>
    }, [])

    return <>
        <Field name="age" validate={ageValidator(18,100)} render={fieldUI} ></Field>
    </>
}

export default AgeField