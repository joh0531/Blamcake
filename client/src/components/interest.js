import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button, FormControlLabel, FormGroup, Switch } from '@material-ui/core'
import { FormControl, InputLabel, Input } from '@material-ui/core'
import { Consumer } from './context'

export default withStyles(theme => ({
	button: {
		margin: theme.spacing.unit,
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
	}
	handleInterestChange = name => event => {
		let newState = Object.assign({}, this.state)
		newState.interests[name] = event.target.checked
		this.setState(newState)
	}
	handleUserChange = event => {
		this.setState({ user: event.target.value })
	}
	render() {
		const { classes } = this.props
		const categories = [
			'architecture',
			'arts-and-entertainment',
			'arts-and-letters',
			'athletics',
			'business',
			'centers-and-institutes',
			'engineering',
			'global-affairs',
			'graduate-school',
			'health-and-recreation',
			'hesburgh-libraries',
			'law',
			'lectures-and-conferences',
			'research',
			'official-academic-calendar',
			'ongoing',
			'open-to-the-public',
			'privately-sponsored-events',
			'religious-and-spiritual',
			'science',
			'service',
			'student-life',
		]	
		return (
			<Consumer>
				{({ setInterests }) => (
					<Fragment>
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
									label={category}
								/>
							)}
						</FormGroup>
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
					</Fragment>
				)}
			</Consumer>
		)
	}
})
