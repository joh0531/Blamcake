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
		checked_ArtsAndEntertainment: false,
		checked_ArtsAndLetters: false,
		checked_Athletics: false,
		checked_Business: false,
	}
	handleChange = name => event => {
		this.setState({ [name]: event.target.checked })
	}
	render() {
		const { classes } = this.props
	
		return (
			<Consumer>
				{({ interestFormComplete, setInterests }) => (
					<Fragment>
						<FormGroup row>
							<FormControlLabel 
								control={
									<Switch
										checked={this.state.checked_ArtsAndEntertainment}
										onChange={this.handleChange('checked_ArtsAndEntertainment')}
										value="checked_ArtsAndEntertainment"
									/>
								}
								label="Arts & Entertainment"
							/>
							<FormControlLabel 
								control={
									<Switch
										checked={this.state.checked_ArtsAndLetters}
										onChange={this.handleChange('checked_ArtsAndLetters')}
										value="checked_ArtsAndLetters"
									/>
								}
								label="Arts & Letters"
							/>
							<FormControlLabel 
								control={
									<Switch
										checked={this.state.checked_Athletics}
										onChange={this.handleChange('checked_Athletics')}
										value="checked_Athletics"
									/>
								}
								label="Athletics"
							/>
							<FormControlLabel 
								control={
									<Switch
										checked={this.state.checked_Business}
										onChange={this.handleChange('checked_Business')}
										value="checked_Business"
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
