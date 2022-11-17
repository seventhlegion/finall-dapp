import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#cbd5e1",
        },
        success: {
            main: "#22c55e",
        },
        error: {
            main: "#dc2626",
        },
    },
    shape: {
        borderRadius: 8
    },
    components: {
        MuiStack: {
            defaultProps: {
                borderRadius: "8px",
                bgcolor: "rgb(23 23 23 / 0.3)",
            },
        },
    },
});