import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {Box, withStyles} from '@material-ui/core';
import styles from './styles';
import TaskItem from '../TaskItem';

class TaskList extends Component {
    render() {
        const {classes, tasks, status} = this.props;
        return (
            <Grid
                item
                md={4}
                xs={12}
                key={status.value}
            >
                <Box mt={1}
                     mb={1}>
                    <div className={classes.status}>{status.label}</div>
                </Box>
                <div className={classes.wrraperListTask}>
                    {
                        tasks.map((task, index) => {
                            return <TaskItem
                                task={task}
                                status={status}
                                key={index}
                            />;
                        })
                    }
                </div>
            </Grid>
        );
    }
}

export default withStyles(styles)(TaskList);