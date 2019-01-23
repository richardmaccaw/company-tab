import React from 'react'
import LinksDialog from './LinksDialog'
import API from '../../API'

import { CardActions, Button, Grid, Typography } from '@material-ui/core'

class LinksCard extends React.Component {
    state = {
        showDialog: false,
        name: this.props.link.name,
        url: this.props.link.url
    }

    toggleDialog = () => {
        this.setState({
            showDialog: !this.state.showDialog
        })
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
    }

    patchLink = () => {
        const link = {
            name: this.state.name,
            url: this.state.url,
            id: this.props.link.id,
        }
        API.patchLink(link)
            .then(resp => this.props.editLink(resp))
            .then(this.toggleDialog)
    }

    handleDelete = () => {
        API.deleteLink(this.props.link.id)
            .then(resp => this.props.deleteStateItem('links', resp.id))
    }

    render () {
        const { link } = this.props
        const { name, url, showDialog } = this.state
        return (
            <>
                <Grid item md={3}>
                    <div className='linksCardItem'>
                        <h2>{link.name}</h2>
                        <p>{link.url}</p>
                        <CardActions>
                            <Button onClick={this.toggleDialog} variant="outlined" size="small" color="primary">Edit</Button>
                            <Button onClick={this.handleDelete} variant="outlined" size="small" color="secondary">Delete</Button>
                        </CardActions>
                    </div>
                </Grid>
                <LinksDialog 
                    dialogTitle={'Edit link'}
                    showDialog={showDialog}
                    handleChange={this.handleChange}
                    handleSubmit={this.patchLink}
                    toggleDialog={this.toggleDialog}
                    name={name}
                    url={url}
                />
            </>
        )
        }
}

export default LinksCard