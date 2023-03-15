import { createTheme } from '@mui/material/styles';

import palette from "./palette";




const theme = {
  palette,
  // components:overrides,
  components: {
    MuiButton:{ 
      styleOverrides: {
        root: {
          borderRadius: 10,
          minHeight: 57,
          textTransform:"capitalize",
          padding:"15px 25px",
          fontFamily: 'Inter',
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: 15,
          width:"100%",
        },
        containedSecondary: {
          backgroundColor: '#F1F2F5',
          color: '#4E4EB0',
          '& .MuiSvgIcon-root': {
            fill: '#4E4EB0',
          },
          '&:hover': {
            backgroundColor: '#d5d6db',
          },
        },
        containedPrimary: {
          '& .MuiSvgIcon-root': {
            fill: '#FFFFFF',
          },
        }
      }
    },
    MuiTextField:{ 
      styleOverrides: {
        root: {
          width:"100%"
        },
      }
    },
    // MuiAppBar:{
    //   styleOverrides: {
    //   colorPrimary: {
    //     color: "#537AAC",
    //     backgroundColor: "#E8EFF8"
    //   }
    // }
    // },
    MuiCard:{
      styleOverrides:{
          root: {
            cursor:"default",
            backgroundColor: "#F5F5F5",
            boxShadow:"none",
            border:"2px solid #E9E9E9",
            borderRadius:0,
            padding:30,
          }
      }
    },
    // MuiIconButton:{
    //   styleOverrides:{
    //     root: {
    //       // "&:hover": {
    //       //   backgroundColor: "transparent",
    //       // },
    //     },
    //   }
    // }
  },
  // props: {
  //   MuiButton: {
  //     disableRipple: true, // No more ripple, on the whole application!
  //     disableElevation: true,
  //   },
  //   MuiIconButton: {
  //     disableRipple: true,
  //     disableTouchRipple: true,
  //   },
  //   MuiContainer: {
  //     maxWidth: "xl",
  //   },
  // },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 450,
//       md: 1024,
//       lg: 1280,
//       //xl: 1140 + 24 + 24, // layout width + padding left and right,
//       xl:1500,
//     },
//   },
  spacing: 8,
} as const;

type CustomTheme = {
  [Key in keyof typeof theme]: typeof theme[Key]
}
declare module '@mui/material/styles/createTheme' {
  interface Theme extends CustomTheme { }
  interface ThemeOptions extends CustomTheme { }
}
export default createTheme(theme);