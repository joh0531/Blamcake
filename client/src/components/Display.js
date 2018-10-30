import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import events from './mockevents'
import EventCard from './EventCard'

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
	<Grid container className={classes.container}>
		{events.map(({ title, content, location }) => (
			<EventCard
				title={title}
				content={content}
				location={location}
			/>
		))}
	</Grid>
))
