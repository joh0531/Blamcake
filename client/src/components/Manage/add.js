import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Menu, MenuItem, Grid, Card, Switch, Paper, FormControlLabel, TextField, Typography } from '@material-ui/core'

export default withStyles(theme => ({
	general:{
		marginTop: theme.spacing.unit * 10,
		marginLeft: theme.spacing.unit * 20,
		marginRight: theme.spacing.unit * 20,
		marginBottom: theme.spacing.unit * 10
	},
	paper:{
		padding: theme.spacing.unit * 8
	},
	textField:{
		width: 250,
	},
	title:{

	},
	card:{
		padding: theme.spacing.unit * 5
	}
}))(class extends Component {
	state = {
		title: "",
		desc: "",
		loc: "",
		allday: false,
		start:"",
		end:"",
		url:"",
		img:"",
		category:""
	}

	handleChangeTitle = (e, title) => {
		this.setState({ title })
	}

	handleChangeDesc = (e, desc) => {
		this.setState({ desc })
	}

	handleChangeLoc = (e, loc) => {
		this.setState({ loc })
	}

	handleChangeAllDay = (e, allday) => {
		this.setState({ allday: !this.state.allday })
	}

	handleChangeStart = (e, start) => {
		this.setState({ start })
	}

	handleChangeEnd = (e, end) => {
		this.setState({ end })
	}

	handleChangeUrl = (e, url) => {
		this.setState({ url })
	}

	handleChangeImg = (e, img) => {
		this.setState({ img })
	}

	handleChangeCat = (e, category) => {
		this.setState({ category })
	}

	render() {
		const{ classes } = this.props
		const{ title, desc, loc, allday, start, end, url, img, category } = this.state

		return(
			<div className={classes.general}>
				<Paper className={classes.paper}>
					<form autoComplete="off">
						<Typography align="center" variant="display2">Add Event</Typography>
						<div><TextField
							id="title"
							label="Title"
							className={classes.textField}
							value={this.state.title}
							onChange={this.handleChangeTitle}
							margin="normal"
						/></div>

						<div><TextField
							id="desc"
							label="Description"
							className={classes.textField}
							value={this.state.desc}
							onChange={this.handleChangeDesc}
							margin="normal"
						/></div>

						<div><TextField
							id="loc"
							label="Location"
							className={classes.textField}
							value={this.state.loc}
							onChange={this.handleChangeLoc}
							margin="normal"
						/></div>

						<div>
							<Typography align="center" variant="title">Time</Typography>

							<FormControlLabel
								control={
									<Switch
									id="allday"
									label="All Day"
									value={this.state.allday}
									onChange={this.handleChangeAllDay}
									checked={this.state.allday}
									color="primary"
									/>
								}
								label="All Day"
							/>
							<div><TextField
							id="start"
							label="Start"
							className={classes.textField}
							value={this.state.start}
							onChange={this.handleChangeStart}
							margin="normal"
							helperText="mmddyyhhmmss"
							/></div>

							<div><TextField
							id="end"
							label="End"
							className={classes.textField}
							value={this.state.end}
							onChange={this.handleChangeEnd}
							margin="normal"
							align="left"
							helperText="mmddyyhhmmss"
							/></div>

						</div>

						<div><TextField
						id="url"
						label="Event URL"
						className={classes.textField}
						value={this.state.url}
						onChange={this.handleChangeUrl}
						margin="normal"
						/>
						</div>

						<div><TextField
						id="img"
						label="Image URL"
						className={classes.textField}
						value={this.state.img}
						onChange={this.handleChangeImg}
						margin="normal"
						/>
						</div>

						<div>
							<Menu
								id="category"
								anchorEl={category}
								open={Boolean(category)}
								onClose={this.handleCloseCat}
							>

							</Menu>
						</div>
					</form>
				</Paper>
			</div>
			)
	} 
})