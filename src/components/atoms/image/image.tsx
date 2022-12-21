import React from "react";

interface IImageProps{
 src: string;
}
const ImageComponent = (props: IImageProps)=>{
 return (
   <img src={props.src} alt="logo"/>
 )
}
export default ImageComponent;