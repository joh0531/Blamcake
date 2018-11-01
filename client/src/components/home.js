import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Display from './display'
import Interest from './interest'
import { Consumer } from './context'

export default withStyles(theme => ({
}))(({ classes }) => (
	<Fragment>
		<Consumer>
			{({ 
				state: { interests, user },
				updateEvents 
			}) => {
				// might eliminate the need to enter user
				if (interests.length && user != "") {
					return (
						<Display updateEvents={updateEvents}/>
					)
				}
				return <Interest />
			}}
		</Consumer>
	</Fragment>
))
