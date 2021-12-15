import { Switch } from "@mui/material";
import { useCallback } from "react";

const SwitchAdapter = ({ input, ...rest }: any) => {

    const onChange = useCallback((e)=>{
        input.onChange(e.target.checked)
    },[input.onChange]);

    return <>
        <Switch  {...input} onChange={onChange} {...rest}></Switch >
    </>
}

export default SwitchAdapter;