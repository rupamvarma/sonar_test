import { Avatar, Grid, SxProps, Theme } from "@mui/material";
import React from "react";
import ImageComponent from "../image/image";
import arrow from "/home/rupv/Desktop/sonar-test/src/assets/arrow.png"

interface IAvatar{
   src: string;
   sx: SxProps<Theme>
}
const AvtarComponent = (props:IAvatar)=>{
 return (
 <Grid container direction="row" alignItems="center" spacing={1}>
   <Grid item>
     <Avatar 
      alt="Remy Sharp" 
      src={props.src}
      sx={props.sx}
    />
  </Grid>
 <Grid item>
    <ImageComponent src={arrow}/>
  </Grid>
</Grid>
 
 )
}
export default AvtarComponent