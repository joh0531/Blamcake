import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

export default withStyles(theme => ({
	button: {
		margin: theme.spacing.unit,
	},
}))(class extends Component {
	state = {
		interestFormComplete: false,
	}
	onClick = () => {
		this.setState({ interestFormComplete: true })
	}
	render() {
	
	
		return (
			<div>
				<Button variant="contained" className={classes.button}>
					Begin
				</Button>
			</div>
		)
	}
})
