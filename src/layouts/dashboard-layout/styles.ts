import { Theme } from "@mui/material/styles";

const styles = (theme:Theme) => ({
    container:{
        width:"100%",
        height:"100%",
        display:"flex",
        backgroundColor:"red"
    }
}) as const ;

export default styles;