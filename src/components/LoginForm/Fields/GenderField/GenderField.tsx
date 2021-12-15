import { useCallback } from "react";
import { Field } from "react-final-form";
import ErrorMessage from "../../Error/Error";
import SelectAdapter from "../../InputComponentAdapters/SelectAdapter/SelectAdapter";
import TextFieldAdapter from "../../InputComponentAdapters/TextFieldAdapter/TextFiledAdapter";

const genderArray = [
    { value: "m", label: "Male" },
    { value: "f", label: "Female" },
    { value: "t", label: "Trasngender" }
]
const GenderField = () => {

    const fieldUI = useCallback(({ input, meta }) => {
        return (
            <>
                <SelectAdapter label="Gender" itemArray={genderArray} input={input} variant="outlined" > </SelectAdapter>
                <ErrorMessage {...meta}></ErrorMessage>
            </>
        )
    }, [])

    return <>
        <Field name="gender" render={fieldUI}></Field>
    </>
}

export default GenderField;

const fruits = [
    { value: "a", label: "apple" },
    { value: "o", label: "orange" },
    { value: "t", label: "tomato" }
]
export const FruitsField = () => {

    const fieldUI = useCallback(({ input, meta }) => {
        return (
            <>
                <SelectAdapter label="Fruits" itemArray={fruits} input={input} variant="outlined" > </SelectAdapter>
                <ErrorMessage {...meta}></ErrorMessage>
            </>
        )
    }, [])

    return <>
        <Field name="fruit" render={fieldUI}></Field>
    </>
}

