import React from 'react';

import tzs from './Timezones'
import API from '../../API'

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        minWidth: 120,
    },
});

const renderTimezones = (timezones) => {
  return timezones.map(zone => {
    return <MenuItem key={zone.label} value={zone.value}> {zone.label} </MenuItem>
  })
}

const TimezoneDialog = (props) => {
  
    const { classes } = props;

    return (
      <div>
        <Dialog
          fullWidth={true}
          maxWidth={'sm'}
          open={props.open}
          onClose={props.toggleDialog}
        >
        <DialogTitle>{props.title}</DialogTitle>
          <DialogContent>
            <TextField
                value={props.name}
                placeholder={props.name ? null : 'Office location'}
                onChange={props.handleChange('name')}
                autoFocus
                type="text"
              />
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="zone">Timezone</InputLabel>
                <Select
                  value={props.zone}
                  onChange={props.handleChange('zone')}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {renderTimezones(tzs)}
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.toggleDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={props.handleSubmit} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  
}

export default withStyles(styles)(TimezoneDialog);