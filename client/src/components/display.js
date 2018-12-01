import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography } from '@material-ui/core'
import EventCard from './eventCard'
import { Consumer } from './context'

export default withStyles(theme => ({
	eventsdisplay: {
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
				{({ state: { events, user } }) => (
					<Fragment>
						<Grid container>
							<Typography
								variant="h5"
								color="secondary"
								className={classes.prompt}
							>
								Categories chosen:
							</Typography>
							{interests.map((interest, i) =>
								<Grid item xs className={classes.item} key={i}>
									<Paper className={classes.paper}>
										<Typography variant="h5" color="primary">
											{ interest }
										</Typography>
									</Paper>
								</Grid>
							)}
						</Grid>
						<Grid container className={classes.eventsdisplay}>
							{events.map(({
								_id,
								title,
								content,
								location,
								start_at,
								end_at,
								category,
								attending
							}, i) => (
								<EventCard
									user={user}
									key={i}
									index={i}
									_id={_id}
									title={title}
									content={content}
									location={location}
									start_at={start_at}
									end_at={end_at}
									category={category}
									attending={attending}
								/>
							))}
						</Grid>
					</Fragment>
				)}
			</Consumer>
		)
	}
})
