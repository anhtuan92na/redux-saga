import React, {Component} from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles.js';
import { ThemeProvider } from  '@material-ui/styles';
import Taskboard from "../Taskboard";
import theme from "../../commons/Theme";

class App extends Component{
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Taskboard />
            </ThemeProvider>
        );
    }
}

export default withStyles(styles)(App);