import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { FormControl, TextField } from '@material-ui/core'

export default withStyles(themes => ({

}))(class extends Component {
	state = {
		title:""
	}

	handleChange = (e, title) => {
		this.setState({ title })
	}

	render() {
		const{ classes } = this.props
		const{ title } = this.state

		return(
			<div>
				<Typography> hi </Typography>
			</div>
			<form className={class.container} noValidate autoComplete="off">
			<TextField
				id="title"
				label="Title"
				className={classes.TextField}
				value={this.state.title}
				onChange={this.handleChange}
				margin="normal"
			/>
			</form>
			)
	} 
})