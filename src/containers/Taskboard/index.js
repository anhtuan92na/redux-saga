import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import styles from './styles.js';
import Button from '@material-ui/core/Button';
import {Add} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import {STATUSES} from '../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';

const listTask = [
    {
        id: 1,
        title: 'Read Book',
        description: 'Read material ui book',
        status: 0
    },
    {
        id: 2,
        title: 'Play football',
        description: 'with my friend',
        status: 2
    },
    {
        id: 3,
        title: 'Play game',
        description: '1 vs 9',
        status: 1
    },
];

class Taskboard extends Component{
    state = {
        open: false
    };

    handleOpen = () => {
        this.setState({
            open: true
        });
    };

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    renderBoard() {
        let xhtml = null;
        xhtml = (
            <Grid
                container
                spacing={2}
            >
                {
                    STATUSES.map((status, index) => {
                        const taskFiltered = listTask.filter(task => task.status === status.value);
                        return <TaskList
                            tasks={taskFiltered}
                            status={status}
                            key={index}
                        />;
                    })
                }
            </Grid>
        );
        return xhtml;
    }

    renderForm() {
        let { open } = this.state;
        let xhtml = null;
        xhtml = (
            <TaskForm open={open}
                      handleClose={this.handleClose} />
        );
        return xhtml;
    }

    render() {
        let { classes } = this.props;
        return (
            <React.Fragment>
                <div className={classes.taskBoard}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={this.handleOpen}
                    >
                        <Add /> Thêm mới công việc
                    </Button>

                    {this.renderBoard()}
                    {this.renderForm()}
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Taskboard);