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
}))(class extends Component {
	componentDidMount(){
		const { getAllEvents } = this.props
		getAllEvents()
	}

	render() {
		const { classes } = this.props

		return (
			<Grid container className={classes.container}>
				{events.map(({ title, content, location }) => (
					<EventCard
						key={title}
						title={title}
						content={content}
						location={location}
					/>
				))}
			</Grid>
		)
	}
})
