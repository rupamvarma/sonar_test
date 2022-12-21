import Checkbox from '@mui/material/Checkbox';
import React from "react";

interface ICheckBoxProps{
    checked: boolean;
    value: string;
    defaultChecked: boolean;
    name: string;
}
const CheckboxComponent = (props:ICheckBoxProps)=>{
    return (
      <Checkbox color={"info"}/>
    )
}
export default CheckboxComponent;