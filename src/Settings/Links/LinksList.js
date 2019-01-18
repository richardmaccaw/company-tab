import React from 'react'

import LinksCard from './LinksCard'
import { Grid, Button } from '@material-ui/core';
import LinksDialog from './LinksDialog';
import API from '../../API';


class LinksList extends React.Component {

    state = {
        showDialog: false,
        name: '',
        url: ''
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

    handleSubmit = () => {
        const link = {
            name: this.state.name,
            url: this.state.url,
            company_id: this.props.serverUser.company.id
        }
        API.postLink(link)
            .then(resp => this.props.addStateItem('links', resp))
            .then(this.toggleDialog)
    }

    render () {

        const { showDialog, name, url } = this.state
        const { addLink, editLink, deleteStateItem, links } = this.props

        return (
            <>
                <Button onClick={this.toggleDialog} variant='contained' color='primary'>New Link</Button>
                <Grid container spacing={8} justify="space-between">
                        {links.map(link => 
                            <LinksCard 
                                key={link.id}
                                link={link}
                                addLink={addLink}
                                editLink={editLink}
                                deleteStateItem={deleteStateItem}
                            />
                        )}
                </Grid>
                <LinksDialog
                    dialogTitle={'Create link'}
                    showDialog={showDialog}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    toggleDialog={this.toggleDialog}
                    name={name}
                    url={url}
                />
            </>
        )
    }
}

export default LinksList