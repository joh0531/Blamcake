import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button, FormControlLabel, FormGroup, Switch } from '@material-ui/core'
import { Consumer } from './context'

export default withStyles(theme => ({
	button: {
		margin: theme.spacing.unit,
	},
}))(class extends Component {
	state = {
		'architecture': false,
		'arts-and-entertainment': false,
		'arts-and-letters': false,
		'athletics': false,
		'business': false,
		'centers-and-institutes': false,
		'engineering':
	}
	handleChange = name => event => {
		this.setState({ [name]: event.target.checked })
	}
	render() {
		const { classes } = this.props
		const categories = [
			'arts-and-entertainment',
			'arts-and-letters',
			'athletics',
			'business',
		
		]	
		return (
			<Consumer>
				{({ interestFormComplete, setInterests }) => (
					<Fragment>
						<FormGroup row>
							<FormControlLabel 
								control={
									<Switch
										checked={this.state['arts-and-entertainment']}
										onChange={this.handleChange('arts-and-entertainment')}
										value="arts-and-entertainment"
									/>
								}
								label="Arts & Entertainment"
							/>
							<FormControlLabel 
								control={
									<Switch
										checked={this.state['arts-and-letters']}
										onChange={this.handleChange('arts-and-letters')}
										value="arts-and-letters"
									/>
								}
								label="Arts & Letters"
							/>
							<FormControlLabel 
								control={
									<Switch
										checked={this.state['athletics']}
										onChange={this.handleChange('athletics')}
										value="athletics"
									/>
								}
								label="Athletics"
							/>
							<FormControlLabel 
								control={
									<Switch
										checked={this.state['business']}
										onChange={this.handleChange('business')}
										value="business"
									/>
								}
								label="Business"
							/>

						</FormGroup>
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
