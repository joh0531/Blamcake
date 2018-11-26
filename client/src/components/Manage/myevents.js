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
		console.log('user', user)
		axios.get(`/userEvents/${user}`)
		.then(res => {
			console.log(res.data)
    		this.setState({ userEvents: res.data, classes: classes, user:user })
  		})
  		.catch(error => {
<<<<<<< HEAD
    		console.log(error)
=======
    		console.log(error);
>>>>>>> 179e7ded81bd75cd20e19ecee865c415fff256c7
  		})
	}
	render() {
		const { userEvents, classes, user } = this.state
		if (!userEvents.length) return null
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
					<Button
						variant="outlined"
						component={Link}
		               	to="/add"
		               >
		               	Add
					</Button>
				</div>
			</Fragment>
		)
	}
})
