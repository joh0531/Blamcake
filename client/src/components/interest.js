import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { Consumer } from './context'

export default withStyles(theme => ({
	button: {
		margin: theme.spacing.unit,
	},
}))(class extends Component {
	render() {
		const { classes } = this.props
	
		return (
			<div>
				<Consumer>
					{({ interestFormComplete, setInterests }) => (
						<Button 
							variant="contained" 
							className={classes.button}
							onClick={setInterests}
						>
							Begin
						</Button>
					)}
				</Consumer>
			</div>
		)
	}
})
