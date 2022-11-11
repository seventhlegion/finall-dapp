import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "dark"
    },
    components: {
        MuiStack: {
            defaultProps: {
                borderRadius: "0.5rem",
                bgcolor: "rgb(23 23 23 / 0.3)"
            }
        },
    }
});