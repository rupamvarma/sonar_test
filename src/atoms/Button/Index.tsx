/**import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  createTheme,
  ThemeProvider,
} from "@mui/material";

type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color">;
export interface ButtonProps extends ButtonBaseProps {
  label: string;
}
const theme = createTheme({
    palette: {
      primary: {
        main: '#6C5DD3',
      },
    },
  });  
export const Button = ({ label, ...rest }: ButtonProps) => (
<ThemeProvider theme={theme}>
      <MuiButton {...rest}>{label}</MuiButton>
</ThemeProvider>
);**/


import { SxProps, Theme } from '@mui/material';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import React from "react";

const useStyle = makeStyles({
  button: {
    height: "59px",
    width: "276px",
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
    fontFamily: "Gilroy"
  }
});
interface Buttonprops{
 children:string;
 variant?: "text" | "outlined" | "contained";
 size?: 'small' | 'medium' | 'large';
 startIcon: React.ReactElement;
 color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
 className: string;
 sx:  SxProps<Theme> | undefined;
}
const ButtonComponent: React.FC<Buttonprops> =(props)=>{
  const classes = useStyle();
    return (
      <Button
        variant={props.variant}
        size={props.size}
        color={props.color}
        startIcon={props.startIcon}
        children={props.children}
        className={classes.button}
       />
    )
}

export default ButtonComponent;