import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography } from '@material-ui/core'
import EventCard from './eventCard'
import { Consumer } from './context'

export default withStyles(theme => ({
	eventdisplay: {
		[theme.breakpoints.down('md')]: {
			justifyContent: "center",
		},
		[theme.breakpoints.up('md')]: {
			justifyContent: "flex-start",
		},
	},
	prompt: {
		width: 150,
		margin: theme.spacing.unit * 2,
	},
	paper: {
		alignText: "center",
		padding: theme.spacing.unit * 2,
	},
	item: {
		margin: theme.spacing.unit * 2.5,
	}
}))(class extends Component {
	componentDidMount(){
		const { updateEvents, interests } = this.props
		updateEvents(interests)
	}

	render() {
		const { classes, interests } = this.props

		return (
			<Consumer>
				{({ state: { events } }) => (
					<Fragment>
						<Grid container lg>
							<Typography 
								variant="h5" 
								color="Secondary"
								className={classes.prompt}
							>
								Categories chosen: 
							</Typography>
							{interests.map((interest, i) =>
								<Grid item xs className={classes.item}>
									<Paper className={classes.paper}>
										<Typography variant="h5" color="Primary">
											{ interest }
										</Typography>
									</Paper>
								</Grid>
							)}
						</Grid>
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
					</Fragment>
				)}
			</Consumer>
		)
	}
})
