import { createTheme, ThemeOptions } from "@mui/material/styles";
import React from "react";
import { PaletteColor } from "@mui/material/styles/createPalette";

type IThemeOptions = ThemeOptions;

// add more colors in AccentColor interface based on the your requirements
interface AccentColor extends PaletteColor {
  "100": string;
  "200": string;
  "300": string;
}

// add more colors in StructuralColor interface based on the your requirements
interface StructuralColor {
  "50": string;
  "100": string;
  "300": string;
}
declare module "@mui/material/styles/createPalette" {
  interface Palette {
    label: PaletteColor;
    boxShadow: PaletteColor;
    accent: AccentColor;
    structural: StructuralColor;
  }
  interface PaletteOptions {
    label: PaletteColorOptions;
    boxShadow: PaletteColorOptions;
    accent: AccentColor;
    structural?: StructuralColor;
  }
}

// your custom styles for typography goes here
declare module "@mui/material/styles" {
  interface TypographyVariants {
    title: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
    caption4: React.CSSProperties;
    overline2: React.CSSProperties;
    overline1: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
    caption4: React.CSSProperties;
    overline2: React.CSSProperties;
    overline1: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title: true;
    caption2: true;
    caption3: true;
    caption4: true;
    overline1: true;
    overline2: true;
  }
}
const theme = createTheme({
  spacing: [0, 4, 8, 12, 16, 20, 24, 32],
  palette: {
    primary: {
      main: "#6C5DD3",
      contrastText: "#E8E8E9",
      sliderLine: "#3A3A3D",
    },
    secondary: {
      main: '#222124',
      },
    info:{
      main: "#B4A9FF"
      },
    grey: {
      "50": "#FBFAFC",
      "100": "#F3F2F7",
      "200": "#D4D2D9",
      "300": "#9F9DA6",
      "500": "#6D6C73",
      "700": "#3C3B40",
      "800": "#E5E5E5",
      "900": "#3A3A3D",
    },
    success: {
      main: "#1D8651",
      light: "#EEEBFF",
    },
    error: {
      main: "#FC5C5C",
    },
    accent: {
      main: "rgba(66, 157, 223, 0.5)",
      light: "rgba(66, 157, 223, 0.75)",
      dark: "#1FC9FF",
      contrastText: "#FFB8B8",
      "100": "#FC90C2",
      "200": "#FF6161",
      "300": "#707C91",
    },
    structural: {
      "50": " #FFFFFF",
      "100": "#FAFAFA",
      "300": "#F7F5FF",
    },
    text: {
      primary: "#2C2937",
      secondary: "#5A5766",
      disabled: "#817E8C",
    },
    label: {
      main: "#FFFDFD",
    },
    boxShadow: {
      main: "rgba(0, 0, 0, 0.2)",
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      ["Roboto", "sans-serif"].join(","),
      "sans-serif",
    ].join(","),
    button: {
      height: "59px",
      width: "276px",
      left: "32px",
      top: "166px",
      borderRadius: "12px",
      padding: "20px 40px 20px 40px",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "19px",
      letterSpacing: "0em",
      textAlign: "center",
      textTransform: "none",
    },
    allVariants: {
      // color: "#262626",
    },
    overline1: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "18px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    overline2: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "18px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    h1: {
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "32px",
      textTransform: "none",
    },
    h2: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "32px",
    },
    h3: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "8px",
      lineHeight: "12px",
    },
    h4: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "20px",
    },
    body1: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
    },
    body2: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
    },
    caption: {
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "22px",
    },
    caption2: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "22px",
    },
    caption3: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "22px",
      letterSpacing: "0em",
      textAlign: "left",
    },
    caption4: {
      fontStyle: "mixed",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "22px",
    },
    subtitle1: {
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "30px",
    },
    subtitle2: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "30px",
    },
    title: {
      fontFamily: "Gilroy",
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "30px",
      letterSpacing: "0em",
      textAlign: "left",
      width: "164.12px",
      height: "32px",
      fontStyle: "normal",
      display: "flex",
      alignItems: "flex-end",
      color: "#E8E7F0",
      flex: "none",
      order: "1",
      flexGrow: "1",
    },
  },
} as IThemeOptions);

export default theme;