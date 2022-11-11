import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "dark",
        success: {
            main: "#22c55e"
        },
        error: {
            main: "#cbd5e1"
        },
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