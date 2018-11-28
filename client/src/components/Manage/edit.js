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
		_id: "",
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
	componentDidMount() {
		const { _id, title, content, location, start_at, end_at, all_day, url, featured_image_url, category, user } = this.props.location.state
		var start_dt = new Date(start_at)
		var end_dt = new Date(end_at)


		var newstart = new Date(start_dt.getTime() - start_dt.getTimezoneOffset()*60000)
		newstart = newstart.toISOString().substring(0, newstart.toISOString().length - 1)

		var newend = new Date(end_dt.getTime() - end_dt.getTimezoneOffset()*60000);
		newend = newend.toISOString().substring(0, newend.toISOString().length - 1)
		
		this.setState({
			_id,
			title,
			content,
			location,
			start_at:newstart,
			end_at:newend,
			all_day,
			url,
			featured_image_url,
			category,
			user,
		})
	}
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}
	handleChangeAllDay = (e) => {
		this.setState({ all_day: !this.state.all_day })
	}

	handleCloseCat = () => {
        this.setState({ anchorEl: null })
    }

    handleClickCat = event => {
    	this.setState({ anchorEl: event.currentTarget })
    }

	handleChangeCat = category => {
		this.setState({ category })
	}
	handleClickSubmit = () => {
		const{ redirect, _id, title, user, content, location, all_day, start_at, end_at, url, featured_image_url, category } = this.state
		if( title==="" |
			user==="" |
			content==="" |
			location==="" |
			all_day==="" |
			start_at==="" |
			end_at==="" |
			category==="" ) {
			window.alert("Error: Required Fields Not Filled Out!")
		} else {
			this.setState({ redirect:true })
			axios.post('/editEvent', {
				_id,
				user,
				start_at,
				end_at,
				location,
				title,
				all_day,
				url,
				content,
				featured_image_url,
				category
			}).then(function(res) {
				console.log(res)
			}).catch(error => console.log(error))
		}
	}
	render() {
		const { classes } = this.props
		const { redirect, _id, title, content, location, start_at, end_at, all_day, url, featured_image_url, category, user } = this.state
		if ( redirect ) {
			return <Redirect to='/myevents'/>;
		}
		return (
			<div className={classes.general}>
				<Paper className={classes.paper}>
					<form autoComplete="off">
						<Typography align="center" variant="display2">Edit Event</Typography>
						<Grid container justify="space-around">
							<Grid item>
								<div>
									<TextField
										name="title"
										label="Title"
										className={classes.textField}
										value={title}
										onChange={this.handleChange}
										margin="normal"
									/>
								</div>
								<div>
									<TextField
										name="user"
										label="Netid"
										className={classes.textField}
										value={user}
										onChange={this.handleChange}
										margin="normal"
									/>
								</div>
								<div>
									<TextField
										name="location"
										label="Location"
										className={classes.textField}
										value={location}
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
											value={all_day}
											onChange={this.handleChangeAllDay}
											checked={all_day}
											color="primary"
											/>
										}
										label="All Day"
									/>
									<div>
										<TextField
										name="start_at"
										className={classes.textField}
										value={start_at}
										onChange={this.handleChange}
										margin="normal"
										helperText="Start"
										type="datetime-local"
										/>
									</div>

										<div>
											<TextField
											name="end_at"
											className={classes.textField}
											value={end_at}
											onChange={this.handleChange}
											margin="normal"
											helperText="End"
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
								label="Description"
								className={classes.descField}
								value={content}
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
							value={url}
							onChange={this.handleChange}
							margin="normal"
							/>
						</div>

						<div align="center">
							<TextField
							name="featured_image_url"
							label="Image URL"
							className={classes.textField}
							value={featured_image_url}
							onChange={this.handleChange}
							margin="normal"
							/>
						</div>
						<div align="center">
							<Select
								value={category}
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