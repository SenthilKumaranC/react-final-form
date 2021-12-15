import { TextField } from "@mui/material";
import React, { useCallback } from "react";

const TextFieldAdapter = ({ input, ...rest }: any) => {

    const onChange = useCallback((e) => {
        //Connecting React Final Form and React Material Component
        input.onChange(e.target.value);
    }, [input.onChange]);

    return <>
        <TextField {...input} onChange={onChange} {...rest}></TextField>
    </>
}

export default TextFieldAdapter