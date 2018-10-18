import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

// export default withStyles() => <h1>HOME!</h1>


export default withStyles(theme => ({
    home: {
		// margin: theme.spacing.unit * 3
    }
}))(({ classes }) => (
    <div className={classes.home}>

	</div> 
))
