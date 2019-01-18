import React from 'react'
import { Button, Dialog, DialogTitle, TextField, DialogActions, DialogContent } from '@material-ui/core'


const LinksDialog = (props) => {

    return (
        <Dialog
            fullWidth={true}
            maxWidth={'sm'}
            open={props.showDialog}
            onClose={props.toggleDialog}
        >
            <DialogTitle id="form-dialog-title">{props.dialogTitle}</DialogTitle>
            <DialogContent>
                <TextField
                    multiline
                    value={props.name}
                    onChange={props.handleChange('name')}
                    placeholder={props.url ? null : 'eg Slack'}
                    autoFocus
                    margin="dense"
                    type="text"
                />
                <TextField
                    onChange={props.handleChange('url')}
                    value={props.url}
                    placeholder={props.url ? null : 'www.slack.com/yourcompany'}
                    multiline
                    InputLabelProps={{shrink: true}}
                    margin="dense"
                    type="text"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleSubmit} color="primary">
                Submit
                </Button>
                <Button onClick={props.toggleDialog} color="secondary">
                Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default LinksDialog