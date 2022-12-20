import React from "react";


interface IImageProps{
 src: string;
}
const ImageComponent: React.FC<IImageProps> = (props)=>{
 return (
   <img src={props.src} alt="logo"/>
 )
}
export default ImageComponent;