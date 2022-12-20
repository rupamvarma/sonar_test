
import Checkbox from '@mui/material/Checkbox';
import { ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../../theme";

interface ICheckBoxProps{
    checked: boolean;
    value: string;
    defaultChecked: boolean;
    name: string;
}
const CheckboxComponent: React.FC<ICheckBoxProps> = (props)=>{
    return (
      <ThemeProvider theme={theme}>
        <Checkbox color={"info"}/>
      </ThemeProvider>
    )
}
export default CheckboxComponent;