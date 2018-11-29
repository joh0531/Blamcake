import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
import { Button, Grid, Typography } from '@material-ui/core'
import MyEventCard from './myEventCard'

export default withStyles(theme => ({
	general: {
		marginTop: theme.spacing.unit * 10,
		marginLeft: theme.spacing.unit * 10,
		marginRight: theme.spacing.unit * 10,
		marginBottom: theme.spacing.unit * 10
	}
}))(class extends Component{
	state = {
		userEvents: [],
		classes: [],
		user: ""
	}
	componentDidMount() {
		const{ user, classes } = this.props
		axios.get(`/userEvents/${user}`)
		.then(res => {
			console.log(res.data)
    		this.setState({ userEvents: res.data, classes: classes, user:user })
  		})
  		.catch(error => {
    		console.log(error)
  		})
	}
	render() {
		const { userEvents, classes, user } = this.state

		if ( user === '' ) {
			return (
				<div className={classes.general}>
					<br />
					<Typography 
					align="center" 
					>
						Please go back to the homepage and update your user information.
					</Typography>
				</div>
			)
		}
		return (
			<Fragment>
				<div className={classes.general}>
					<Typography align="center" variant="display2">My Events</Typography>

					<br />
					<Grid container>
						{userEvents.map(({ title, content, location, start_at, end_at, all_day, url, featured_image_url, category, user, _id }, i) => (
							<MyEventCard
								key={i}
								title={title}
								content={content}
								location={location}
								start_at={start_at}
								end_at={end_at}
								all_day={all_day}
								url={url}
								featured_image_url={featured_image_url}
								category={category}
								user={user}
								_id={_id}
							/>
						))}
					</Grid>
					<br />
					<div>
						<Button
							variant="outlined"
							component={Link}
				              	to="/add"
				              	align="center"
				              >
				              	Add
						</Button>
					</div>	
				</div>
			</Fragment>
		)
	}
})
