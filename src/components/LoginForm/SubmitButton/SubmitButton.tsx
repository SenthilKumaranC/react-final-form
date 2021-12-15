import { Button } from "@mui/material";
import React from "react";

const SubmitButton = (props: any) => {

    const { invalid } = props;

    return <>
        <Button disabled={invalid} type="submit" variant="contained">Submit</Button>
    </>
}

export default SubmitButton