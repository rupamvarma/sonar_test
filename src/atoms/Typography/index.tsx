import { Icon, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  typo:{
    fontFamily: 'Gilroy',
  }
})
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
 | "overline2" | undefined;
 icon?: React.ReactElement;
 classeName: string;
}
const TypographyComponent: React.FC<ITypoProps> = (props)=>{
  const classes = useStyles();
    return (
          <Typography variant={props.variant} color='white' className={classes.typo}>
            {props.text}
            <Icon>
                {props.icon}
            </Icon>
          </Typography>
    )
}

export default TypographyComponent;