import React, { Fragment } from 'react'
import { List, ListItem, Typography } from '@material-ui/core'

export default () => (
    <Fragment>
        <Typography align="center" variant="display2">
            {'Blamcake - What\'s happening on ND\'s Campus?'}
        </Typography>
        <Typography align="center" variant="display1">
            DataBase Project Fall 2018 - Stage 1
        </Typography>
        <Typography variant="subheading">
            Group Members:
        </Typography>
        {['Maru Choi', 'Paul Kwak', 'Jewon Oh', 'Matthew Phelps'].map(member => (
            <Typography variant="caption">{member}</Typography>
        ))}
    </Fragment>
)
