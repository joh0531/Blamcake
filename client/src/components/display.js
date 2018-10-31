import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import events from './mockevents'
import EventCard from './eventCard'
import { Consumer } from './context'

export default withStyles(theme => ({
	container: {
		[theme.breakpoints.down('md')]: {
			justifyContent: "center",
		},
		[theme.breakpoints.up('md')]: {
			justifyContent: "flex-start",
		},
	},
}))(({ classes }) => (
	<Consumer>
		{({ getAllEvents }) => (
			<Grid container className={classes.container}>
				{events.map(({ title, content, location }) => (
					<EventCard
						getAllEvents={getAllEvents}
						key={title}
						title={title}
						content={content}
						location={location}
					/>
				))}
			</Grid>
		)}
	</Consumer>
))
