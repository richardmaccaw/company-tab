import React from 'react'

import LinksCard from '../Settings/LinksCard'
import { Grid, Button } from '@material-ui/core';


const LinksList = (props) => {
    return (
        <>
            <Button variant='contained' color='primary'>New Link</Button>
            <Grid container spacing={8} justify="space-between">
                    {props.links.map(link => <LinksCard link={link}></LinksCard>)}
            </Grid>
        </>
    )
}

export default LinksList