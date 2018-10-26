import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Navbar from './navbar'

export default withStyles(theme => ({
    content: {
        backgroundColor: theme.palette.background.default
    }
}))(({ classes, children }) => (
    <Fragment>
        <CssBaseline />
        <Navbar />
        <main className={classes.content}>
            {children}
        </main>
    </Fragment>
))
