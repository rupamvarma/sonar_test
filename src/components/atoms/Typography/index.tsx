import { Typography } from "@mui/material";
import {styled } from "@mui/styles";
import React from "react";

const StyledTypography = styled(Typography)(()=> ({
  fontFamily: "Gilroy",
  color: '#E8E7F0'
}));

interface ITypoProps{
 text?: string;
 variant?:  "button"
 |"caption"
 |"h1" 
 |"h2" 
 | "h3" 
 | "h4" 
 | "h5" 
 | "h6" 
 | "title" 
 | "inherit"
 | "subtitle1" 
 | "subtitle2" 
 | "body1" 
 | "body2" 
 | "overline" 
 | "caption2" 
 | "caption3" 
 | "caption4" 
 | "overline1" 
 | "overline2";
 icon?: React.ReactElement;
}
const TypographyComponent = (props: ITypoProps)=>{
    return (
         <StyledTypography variant={props.variant}>
          {props.text}
         </StyledTypography>
    )
}

export default TypographyComponent;