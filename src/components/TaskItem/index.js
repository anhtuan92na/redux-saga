import React, {Component} from 'react';
import {Card, CardActions, CardContent, Typography, withStyles, Fab} from "@material-ui/core";
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
import {Add, Edit} from '@material-ui/icons';

class TaskItem extends Component {
    render() {
        const {classes, task, status} = this.props;
        return (
            <Card key={task.id} className={classes.card}>
                <CardContent>
                    <Grid container justify="space-between">
                        <Grid item md={8}>
                            <Typography component="h2">{task.title}</Typography>
                            <p>{task.description}</p>
                        </Grid>
                        <Grid item md={4}>
                            {status.label}
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Fab size="small" color="primary" aria-label="add" className={classes.fab}>
                        <Add />
                    </Fab>
                    <Fab size="small" color="secondary" aria-label="edit" className={classes.fab}>
                        <Edit />
                    </Fab>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(TaskItem);