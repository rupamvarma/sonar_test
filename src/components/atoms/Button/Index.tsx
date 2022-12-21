import Button from '@mui/material/Button';
import {styled } from '@mui/styles';
import React from "react";
import theme from '../../../theme';


const StyledButton = styled(Button)((props:Buttonprops) =>({
    height: props.startIcon ? "49px" : "59",
    width:  props.startIcon ? "210px" : "276",
    left: "32px",
    top: "166px",
    borderRadius: "12px",
    padding: "16px !important",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "19px",
    letterSpacing: "0em",
    textAlign: "left",
    textTransform: "none",
    fontFamily: "Gilroy",
    backgroundColor: props.startIcon ? theme.palette.secondary.light : theme.palette.primary.main,
    justifyContent: props.startIcon ? "left" : "center"

}));

interface Buttonprops{
 children:string;
 variant?: "text" | "outlined" | "contained";
 size?: 'small' | 'medium' | 'large';
 startIcon: React.ReactElement;
 color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
}
const ButtonComponent = (props:Buttonprops)=>{
    return (
      <StyledButton
        variant={props.variant}
        size={props.size}
        color={props.color}
        startIcon={props.startIcon}
        children={props.children}

       />
    )
}
export default ButtonComponent;