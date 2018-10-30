import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Display from './display'
import Interest from './interest'
import { Consumer } from './context'

export default withStyles(theme => ({
}))(({ classes }) => (
	<Fragment>
		<Consumer>
			{({ state: { interests }}) => {
				if (interests.length) {
					return <Display className={classes.display}/>
				}
				return <Interest />
			}}
		</Consumer>
	</Fragment>
))
