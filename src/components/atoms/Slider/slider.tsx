import { Slider, styled} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../../theme";

const StyledSlider= styled(Slider)(()=>({
    color: `${theme.palette.primary.main}`,
    size: "small",
    "& .MuiSlider-thumb":{
        borderRadius: "30%",
        border: "2px solid #B4A9FF",
    },
    "& .MuiSlider-rail": {
        borderRadius: "12px",
        color: `${theme.palette.grey[900]}`
    }
}));

const SliderComponent=()=>{
    return (
        <Box sx={{ width: 300}}>
            <StyledSlider/>
        </Box>
    )
}
export default SliderComponent;