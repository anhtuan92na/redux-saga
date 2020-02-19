import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import RoutesConfig from "./Routes";

class App extends Component{
    render() {
        return (
            <Router>
                {/* Main Menu */}
                <Menu />

                {/* Main Content */}
                <RoutesConfig />
            </Router>
        );
    }
}
export default App;