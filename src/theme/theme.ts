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
                bgcolor: "rgb(23 23 23 / 0.3)",
            },
        },
    },
});

export const MuiStackSx = {
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    backdropFilter: "blur(4px)"
};