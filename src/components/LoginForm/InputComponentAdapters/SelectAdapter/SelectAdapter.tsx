import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useCallback } from "react";

export interface SelectItem {
    value: any;
    label: any
}

export interface SelectAdapterProps extends React.ComponentPropsWithoutRef<any> {
    input: any;
    itemArray: SelectItem[];
    label: string;
}

const SelectAdapter = ({ input, label, itemArray, ...rest }: SelectAdapterProps) => {

    const onChange = useCallback((e) => {
        //Connecting React Final Form and React Material Component
        input.onChange(e.target.value);
    }, [input.onChange]);

    return <>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                {...input}
                {...rest}
                label={label}
                onChange={onChange}
            >
                {/*  <MenuItem value={"m"}>Male</MenuItem>
                <MenuItem value={"f"}>Female</MenuItem>
                <MenuItem value={"t"}>Trasngender</MenuItem> */}
                {
                    itemArray.map((item, index) => {
                        return <MenuItem value={item.value}>{item.label}</MenuItem>
                    })
                    /*itemArray.map(value, label) => {
                        <MenuItem value ={"m"}></MenuItem> 
                    }*/
                }
            </Select>
        </FormControl>
    </>
}

export default SelectAdapter