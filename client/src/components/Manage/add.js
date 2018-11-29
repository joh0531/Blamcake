import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link, Redirect } from 'react-router-dom'
import { Button, Select, Menu, MenuItem, Grid, Card, Switch, Paper, FormControlLabel, TextField, Typography } from '@material-ui/core'
import axios from 'axios'

export default withStyles(theme => ({
	general:{
		marginTop: theme.spacing.unit * 10,
		marginLeft: theme.spacing.unit * 25,
		marginRight: theme.spacing.unit * 25,
		marginBottom: theme.spacing.unit * 10
	},
	paper:{
		padding: theme.spacing.unit * 8
	},
	textField:{
		width: 300,
	},
	descField:{
		width: 700
	},
	card:{
		padding: theme.spacing.unit * 2
	},
	time:{
		padding: theme.spacing.unit * 2
	}
}))(class extends Component {
	state = {
		title: "",
		user: "",
		content: "",
		location: "",
		all_day: false,
		start_at:"",
		end_at:"",
		url:"",
		category:"",
		anchorEl:null,
		redirect:false
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleChangeAllDay = e => {
		this.setState({ all_day: !this.state.all_day })
	}

	handleCloseCat = () => {
        this.setState({ anchorEl: null })
    }

    handleClickCat = event => {
    	this.setState({ anchorEl: event.currentTarget })
    }

	handleClickSubmit = () => {
		const{ redirect, title, user, content, location, all_day, start_at, end_at, url, featured_image_url, category } = this.state
		var start_dt = new Date(start_at);
		var end_dt = new Date(end_at);

		if( title==="" ||
			user==="" ||
			content==="" ||
			location==="" ||
			start_at==="" ||
			end_at==="" ||
			category==="" ) {
			console.log(this.state)
			window.alert("Error: Required Fields Not Filled Out!")
		} else {
			// change redirect to true
			this.setState({ redirect:true })
			axios.post('/addEvent', {
				start_at: start_dt,
				end_at: end_dt,
				location,
				title,
				all_day,
				url,
				content,
				featured_image_url,
				category,
				user
			}).then(function(res) {
				console.log(res)
			}).catch(function(error){
				console.log(error)
				window.alert("Error! ", error)
			})
		}
	}

	render() {
		const{ classes } = this.props

		return(
			<div className={classes.general}>
				<Paper className={classes.paper}>
					<form autoComplete="off">
						<Typography align="center" variant="display2">Add Event</Typography>
						<Grid container justify="space-around">
							<Grid item>
								<div>
									<TextField
										name="title"
										label="Title: required *"
										className={classes.textField}
										value={this.state.title}
										onChange={this.handleChange}
										margin="normal"
									/>
								</div>
								<div>
									<TextField
										name="user"
										label="Netid: required *"
										className={classes.textField}
										value={this.state.user}
										onChange={this.handleChange}
										margin="normal"
									/>
								</div>
								<div>
									<TextField
										name="location"
										label="Location: required *"
										className={classes.textField}
										value={this.state.location}
										onChange={this.handleChange}
										margin="normal"
									/>
								</div>
							</Grid>
							<Grid item>
								<div className={classes.time}>
									<Card
										className={classes.card}
									>

									<FormControlLabel
										control={
											<Switch
											name="all_day"
											label="All Day"
											value={this.state.all_day}
											onChange={this.handleChangeAllDay}
											checked={this.state.all_day}
											color="primary"
											/>
										}
										label="All Day"
									/>
									<div>
										<TextField
										name="start_at"
										className={classes.textField}
										value={this.state.start_at}
										onChange={this.handleChange}
										margin="normal"
										helperText="Starts At: required *"
										type="datetime-local"
										/>
									</div>

										<div>
											<TextField
											name="end_at"
											className={classes.textField}
											value={this.state.end_at}
											onChange={this.handleChange}
											margin="normal"
											helperText="Ends At: required *"
											type="datetime-local"
											/>
										</div>
									</Card>
								</div>
							</Grid>
						</Grid>
						<div align="center">
							<TextField
								name="content"
								label="Description: required *"
								className={classes.descField}
								value={this.state.content}
								onChange={this.handleChange}
								margin="normal"
								variant="outlined"
								multiline
								rows="10"
							/>
						</div>	
						<div align="center">
							<TextField
							name="url"
							label="Event URL"
							className={classes.textField}
							value={this.state.url}
							onChange={this.handleChange}
							margin="normal"
							/>
						</div>

						<div align="center">
							<TextField
							name="featured_image_url"
							label="Image URL"
							className={classes.textField}
							value={this.state.featured_image_url}
							onChange={this.handleChange}
							margin="normal"
							/>
						</div>
						<div align="center">
							<Select
								value={this.state.category}
								name="category"
								onChange={this.handleChange}
							>						
							{[
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
								'student-life'
							].map(cat => (
								<MenuItem
									key={cat}
									value={cat}
								>
									{cat}
								</MenuItem>
							))}

							</Select>
						</div>

						<div>
							<Button
                            	onClick={this.handleClickSubmit}
                            	color="primary"
                            	variant="outlined"
	                        > 
	                            Submit
	                        </Button>
						</div>
					</form>
				</Paper>
			</div>
		)
	} 
})
