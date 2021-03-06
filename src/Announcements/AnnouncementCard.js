import React from 'react'
import { CardActions, Button, Grid, Switch, FormControlLabel, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import moment from 'moment-timezone';

class AnnouncementCard extends React.Component {

    state = {
        checked: false,
        dialogOpen: false,
        title: this.props.announcement.title,
        published: this.props.announcement.published,
        description: this.props.announcement.description
    }

    toggleDialog = () => {
        this.setState({dialogOpen: !this.state.dialogOpen})
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    togglePublish = () => {
        this.setState({
            published: !this.state.published
        }, () => this.editAnnouncement())
        
    }

    editAnnouncement = () => {
        const announcement = {
            title: this.state.title,
            description: this.state.description,
            published: this.state.published,
            id: this.props.announcement.id
        }
        this.props.handleEdit(announcement)
        if (this.state.dialogOpen) {
            this.toggleDialog()
        }
    }

    render () {
        const { announcement, handleDelete } = this.props
        return (
            <>
            <Grid item md={5}>
                <div className='announcementCard'>
                        <h1>{announcement.title}</h1>
                        <p>{announcement.description}</p>
                        <p>{moment(announcement.date).fromNow()}</p>
                    <CardActions>
                        <FormControlLabel
                            control={
                                <Switch 
                                    color='primary'
                                    checked={this.state.published}
                                    onChange={this.togglePublish}
                                    />
                                }
                            label={this.state.published ? 'Published' : 'Not published'}
                        />
                        <Button onClick={this.toggleDialog} variant="outlined" size="small" color="primary">Edit</Button>
                        <Button onClick={() => handleDelete(announcement.id)} variant="outlined" size="small" color="secondary">Delete</Button>
                    </CardActions>
                </div>
            </Grid>
            <Dialog
                fullWidth={true}
                maxWidth={'sm'}
                open={this.state.dialogOpen}
                onClose={this.toggleDialog}
            >
                <DialogTitle id="form-dialog-title">Edit Announcement</DialogTitle>
                <DialogContent>
                    <TextField
                        multiline
                        onChange={this.handleChange('title')}
                        rows="1"
                        value={this.state.title}
                        autoFocus
                        margin="dense"
                        name="title"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        onChange={this.handleChange('description')}
                        multiline
                        value={this.state.description}
                        margin="dense"
                        name="description"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.editAnnouncement} color="primary">
                    Submit
                    </Button>
                    <Button onClick={this.toggleDialog} color="secondary">
                    Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            </>
        )
    }
}

export default AnnouncementCard