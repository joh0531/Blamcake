import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Display from './display'

export default withStyles(theme => ({
	display: {

	},
}))(({ classes }) => (
	<Fragment>
		<Display className={classes.display}/>
	</Fragment>
))
