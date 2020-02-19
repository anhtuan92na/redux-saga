import React, {Component} from 'react';
import {withStyles, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField} from '@material-ui/core';
import styles from './styles';

class TaskForm extends Component {
    render() {
        let { open, handleClose } = this.props;
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Thêm mới công việc</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            id="name"
                            label="Tên công việc"
                            type="text"
                            fullWidth
                            variant="outlined"
                            margin="dense"
                            required
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Mô tả"
                            multiline
                            rows="4"
                            fullWidth
                            variant="outlined"
                            margin="dense"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={handleClose}
                            color="primary"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleClose}
                            color="primary"
                        >
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(TaskForm);