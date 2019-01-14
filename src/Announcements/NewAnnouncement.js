import React from  'react'
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core'

class NewAnnouncement extends React.Component {

    state = {
        checked: false,
        title: '',
        description: ''
    }

    handleDialogClose = () => {
        this.setState({
            dialogOpen: false
        })
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }
    
    render () {
        return (
          <Dialog
              fullWidth={true}
              maxWidth={'sm'}
              open
              onClose={this.props.toggleDialog}
            >
            <DialogTitle id="form-dialog-title">Create Announcement</DialogTitle>
            <DialogContent>
              <TextField
                  multiline
                  placeholder='Title'
                  onChange={this.handleChange('title')}
                  autoFocus
                  margin="dense"
                  name="title"
                  type="text"
                  
              />
              <TextField
                  onChange={this.handleChange('description')}
                  placeholder='Description'
                  multiline
                  InputLabelProps={{shrink: true}}
                  margin="dense"
                  name="description"
                  type="text"
                  fullWidth
              />
            </DialogContent>
            <DialogActions>
                <Button onClick={''} color="primary">
                Submit
                </Button>
                <Button onClick={this.props.toggleDialog} color="secondary">
                Cancel
                </Button>
            </DialogActions>
            </Dialog>
        )
    }
}

export default NewAnnouncement