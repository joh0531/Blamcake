import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

// export default withStyles() => <h1>HOME!</h1>

export default withStyles(theme => ({
	home: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
	icon: {
		margin: theme.spacing.unit * 2,
	}
}))(({ classes }) => (
    <div className={classes.home}>

	</div> 
))
