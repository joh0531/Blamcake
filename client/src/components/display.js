import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import events from './mockevents'
import EventCard from './EventCard'

export default withStyles(theme => ({
	container: {
		// TO DO list:
		// When width of screen is desktop, do not center cards
		// When width of screen is more mobile-esque, center (media queries)

		// direction: "row", justify: "flex-start", alignItems: "baseline",
	},
}))(class extends Component { 

	render() {
		const { classes } = this.props
		return (
			<Grid container className={classes.container} justify="center"> 
				{events.map(({ title, content, location }) => (
					<EventCard 
						title={title}
						content={content}
						location={location}
					/>			
				))}
			</Grid>
		)
	}
})
