import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class HomePage extends Component{
    render() {
        return (
            <React.Fragment>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>

                <div>
                    <div>ReactJs</div>
                    <div>PHP</div>
                    <div>Python</div>
                </div>
            </React.Fragment>
        );
    }
}

export default HomePage;