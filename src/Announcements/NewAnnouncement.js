import React from  'react'
import moment from 'moment-timezone';

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@material-ui/core'
import API from '../API';

class NewAnnouncement extends React.Component {

    state = {
        checked: false,
        title: '',
        description: ''
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    postAnnouncement = () => {
        const { title, description } = this.state
        const { serverUser } = this.props
        const announcement = {
            title,
            description,
            published: true,
            date: moment().format(),
            company_id: serverUser.company.id
        }
        API.postAnnouncement(announcement).then(
            () => this.props.toggleDialog()
        )
    }

    deleteAnnouncement = () => {
        
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
                <Button onClick={this.postAnnouncement} color="primary">
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