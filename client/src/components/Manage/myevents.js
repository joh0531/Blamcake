import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import EventCard from '../eventCard'
import { Consumer } from '../context'

export default withStyles(theme => ({
	general: {
		marginTop: theme.spacing.unit * 10,
		marginLeft: theme.spacing.unit * 25,
		marginRight: theme.spacing.unit * 25,
		marginBottom: theme.spacing.unit * 10
	}
}))(class extends Component{
	componentDidMount() {
		const{ user } = this.props
		axios.get('/userEvents/${user}')
		console.log(user)
	}
	render() {
		const{ classes, user } = this.props
		return(
			<Consumer>
				{({ state: { events } }) =>(
						<div className={classes.general}>
							<Typography align="center" variant="display2">My Events</Typography>
							<Grid container className={classes.eventsdisplay}>
								{events.map(({ title, content, location, category }, i) => (
									<EventCard
										key={i}
										title={title}
										content={content}
										location={location}
										category={category}
									/>
								))}
							</Grid>
						</div>
					)}
			</Consumer>
		)
	}
})
