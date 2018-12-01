import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button, FormControlLabel, FormGroup, Switch } from '@material-ui/core'
import { Checkbox, FormControl, InputLabel, Input, Paper, Typography } from '@material-ui/core'
import { Consumer } from './context'

export default withStyles(theme => ({
	content: {
		marginRight: '10%',
		marginLeft: '10%',
		display: "block",
		justifyContent: "center",
	},
	button: {
		margin: theme.spacing.unit,
	},
	submit: {
		float: "none",
		display: "flex",
		justifyContent: "center",
		padding: theme.spacing.unit * 3,
	},
	paper: {
		padding: theme.spacing.unit * 3,
	},
	header: {
		margin: theme.spacing.unit * 5,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
}))(class extends Component {
	state = {
		interests: {
			'architecture': false,
			'arts-and-entertainment': false,
			'arts-and-letters': false,
			'athletics': false,
			'business': false,
			'centers-and-institutes': false,
			'engineering': false,
			'global-affairs': false,
			'graduate-school': false,
			'health-and-recreation': false,
			'hesburgh-libraries': false,
			'law': false,
			'lectures-and-conferences': false,
			'research': false,
			'official-academic-calendar': false,
			'ongoing': false,
			'open-to-the-public': false,
			'privately-sponsored-events': false,
			'religious-and-spiritual': false,
			'science': false,
			'service': false,
			'student-life': false,
		},
		user: '',
		sub: false
	}
	handleInterestChange = name => event => {
		let newState = Object.assign({}, this.state)
		newState.interests[name] = event.target.checked
		this.setState(newState)
	}
	handleUserChange = event => {
		this.setState({ user: event.target.value })
	}
	handleOnClick = event => {
		this.setState({ sub: !this.state.sub })
	}
	render() {
		const { classes } = this.props
		const categories = ['architecture','arts-and-entertainment','arts-and-letters',
			'athletics','business','centers-and-institutes','engineering','global-affairs','graduate-school',
			'health-and-recreation','hesburgh-libraries','law','lectures-and-conferences','research',
			'official-academic-calendar','ongoing','open-to-the-public','privately-sponsored-events',
			'religious-and-spiritual','science','service','student-life',
		]
		const category_Displays = [
			'Architecture','Arts & Entertainment','Arts & Letters','Athletics','Business',
			'Centers & Institutes','Engineering','Global Affairs','Graduate School','Health & Recreation',
			'Hesburgh Libraries','Law School','Lectures & Conferences','Research','Official Academic Calendar',
			'Ongoing Events','Open to the Public','Privately Sponsored Events','Religious & Spiritual',
			'Science','Service','Student Life',
		]
		return (
			<Consumer>
				{({ setInterests }) => (
					<div className={classes.content}>
						<div className={classes.header}>
							<Typography variant="h5" color="primary">
								Welcome to
							</Typography>
							<Typography variant="h2" color="primary" gutterBottom>
								BLAMCAKE
							</Typography>
							<Typography variant="overline" color="primary">
								Which ND Events do you want to view?
							</Typography>

						</div>
						<FormGroup row>
							{categories.map((category, i) =>
								<FormControlLabel
									key={i}
									control={
										<Switch
											checked={this.state.interests[category]}
											onChange={this.handleInterestChange(category)}
											value={category}
										/>
									}
									label={category_Displays[i]}
								/>
							)}
						</FormGroup>
						<div className={classes.submit}>
							<Paper className={classes.paper}>
								<FormControlLabel
									control={
										<Checkbox
											checked={this.state.sub}
											onClick={this.handleOnClick}
										/>
									}
									label="Receive emails about the selected categories"
								/>
								<br />
								<FormControl>
									<InputLabel>User</InputLabel>
									<Input
										value={this.state.user}
										onChange={this.handleUserChange}
									/>
								</FormControl>
								<Button
									variant="contained"
									className={classes.button}
									onClick={() => setInterests(this.state)}
								>
									Begin
								</Button>
							</Paper>
						</div>
					</div>
				)}
			</Consumer>
		)
	}
})
