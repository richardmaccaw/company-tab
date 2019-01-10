import React from 'react'
import { CardActions, Button, Grid, Switch, FormControlLabel, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

class AnnouncementCard extends React.Component {

    state = {
        checked: false,
        dialogOpen: false,
    }

    handleDialogClose = () => {
        this.setState({
            dialogOpen: false
        })
    }

    handleDialogOpen = () => {
        this.setState({
            dialogOpen: true
        })
    }

    render () {
        const { announcement, handleEdit, handleDelete } = this.props
        return (
            <>
            <Grid item md={5}>
                <div className='announcementCard'>
                        <h1>{announcement.title}</h1>
                        <p>{announcement.description}</p>
                        <p>{announcement.date}</p>
                    <CardActions>
                        <FormControlLabel
                            control={<Switch color='primary' checked={announcement.published}></Switch>}
                            label={announcement.published ? 'Published' : 'Not published'}
                        />
                        <Button onClick={this.handleDialogOpen} variant="outlined" size="small" color="primary">Edit</Button>
                        <Button onClick={handleDelete} variant="outlined" size="small" color="secondary">Delete</Button>
                    </CardActions>
                </div>
            </Grid>
            <Dialog
                fullWidth={true}
                maxWidth={'sm'}
                open={this.state.dialogOpen}
                onClose={this.handleDialogClose}
            >
                <DialogTitle id="form-dialog-title">Edit Announcement</DialogTitle>
                <DialogContent>
                    <TextField
                        multiline
                        rows="1"
                        placeholder={announcement.title}
                        autoFocus
                        margin="dense"
                        id="title"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        multiline
                        rows="5"
                        InputLabelProps={{shrink: true}}
                        placeholder={announcement.description}
                        margin="dense"
                        id="description"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleDialogClose} color="primary">
                    Submit
                    </Button>
                    <Button onClick={this.handleDialogClose} color="secondary">
                    Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            </>
        )
    }
}

export default AnnouncementCard