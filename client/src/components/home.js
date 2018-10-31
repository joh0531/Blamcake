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
				getAllEvents 
			}) => {
				// might eliminate the need to enter user
				if (interests.length && user != "") {
					return (
						<Display getAllEvents={getAllEvents}/>
					)
				}
				return <Interest />
			}}
		</Consumer>
	</Fragment>
))
