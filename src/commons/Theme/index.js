import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    color: {
        primary: "#D32F2F",
        secondary: "#00BCD4",
        error: "#E64A19",
    },
    typography: {
        fontFamily: "Roboto"
    },
    shape: {
        borderRadius: "4px",
        backgroundColor: "#7B1FA2",
        textColor: "#ffffff",
        borderColor: "#cccccc"
    },
});

export default theme;