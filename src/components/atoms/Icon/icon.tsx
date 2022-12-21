import { Icon } from "@mui/material";
import React from "react";
import ImageComponent from "../image/image";

const IconComponent = (props:any)=>{
    return(
        <Icon><ImageComponent src={props.src}/></Icon>
    )
}
export default IconComponent;