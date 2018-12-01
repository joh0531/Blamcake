import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardActions, Typography } from '@material-ui/core'
import { Collapse, IconButton } from '@material-ui/core'
import { CardContent, CardMedia, Button } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import LocationOn from '@material-ui/icons/LocationOn'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AccessTime from '@material-ui/icons/AccessTime'
import axios from 'axios'

export default withStyles(theme => ({
	card: {
		margin: theme.spacing.unit * 1.5,
		minWidth: theme.spacing.unit * 50,
	},
	location: {
		color: purple[300],
		fontSize: 16,
		float: 'left',
	},
	icon: {
		color: purple[400],
		marginLeft: theme.spacing.unit,
		fontSize: 18,
		float: "left",
	},
	expand: {
		float: 'right',
		transform: 'rotate(0deg)',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
		marginLeft: 'auto',
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	action: {
		paddingLeft: theme.spacing.unit * 2,
		paddingTop: theme.spacing.unit * 0.5,
	},
	media: {
		height: 165,
	},
	title: {
		paddingBottom: theme.spacing.unit * 0.5,
	},
	content: {
		paddingLeft: theme.spacing.unit * 4,
		paddingRight: theme.spacing.unit * 4,
		paddingBottom: theme.spacing.unit * 1,
		paddingTop: 0,
	},
	time: {
		color: purple[300], fontSize: 14, margin: 0, padding: 0, paddingLeft: 10,
	},
	timewrapper: {
		color: purple[300], padding: 0,
	},
	timeicon: {
		marginLeft: theme.spacing.unit * 3, padding: 0, fontSize: 16,
	},
}))(class extends Component {
	state = { expanded: false }
	handleExpandClick = () => {
		this.setState({ expanded: !this.state.expanded })
	}
	handleDelete = (handleDeleteEvent, index) => {
		const { _id } = this.props
		axios.delete(`/deleteEvent`, { data: { id: _id } })
			.then(res => {
				console.log(res)
				handleDeleteEvent(index)
			}).catch(error => console.log(error))
	}
	getCorrectTimeFormat = () => {
		const { start_at, end_at } = this.props

		let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
			"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		let datestart = new Date(start_at)
		let dateend = new Date(end_at)
		let dateperiod = monthNames[datestart.getMonth()] + ' '
			+ datestart.getDate() + ', '
			+ (parseInt(datestart.getHours(),10)%12 === 0 ? '12' : datestart.getHours()%12) + ' '
			+ (parseInt(datestart.getHours(),10)/11 > 0 ? 'PM' : 'AM') + ' - '
			+ (parseInt(dateend.getHours(),10)%12 === 0 ? '12' : dateend.getHours()%12) + ' '
			+ (parseInt(dateend.getHours(),10)/11 > 0 ? 'PM' : 'AM') + ' '
			+ datestart.getFullYear()

		return dateperiod
	}
	render() {
		const {
			classes,
			title,
			content,
			location,
			start_at,
			end_at,
			all_day,
			url,
			featured_image_url,
			category,
			user,
			_id,
			index,
			handleDeleteEvent
		} = this.props
		return (
			<Card className={classes.card}>
				<CardMedia
					className={classes.media}
					image={require("../../images/nd1.png")}
					title="Standard Event Background, ND Campus"
					alt="Standard Event Background, ND Campus"
					component={Link}
					to={{
						pathname: '/edit',
						state: {
							_id: _id,
							title: title,
							content: content,
							location: location,
							start_at: start_at,
							end_at: end_at,
							all_day: all_day,
							url: url,
							featured_image_url: featured_image_url,
							category: category,
							user: user
						}
					}}
				/>
				<CardContent className={classes.title}>
					<Typography
						variant="h5"
						color="primary"
					>
						{ title }
					</Typography>
				</CardContent>
				<CardActions className={classes.action}>
					<LocationOn
						className={classes.icon}
						fontSize="small"
					/>
					<Typography
						variant="overline"
						className={classes.location}
					>
						{ location }
					</Typography>
				</CardActions>
				<CardActions className={classes.timewrapper}>
					<AccessTime className={classes.timeicon}/>
					<Typography variant="overline" className={classes.time}>
						{ this.getCorrectTimeFormat() }
					</Typography>
				</CardActions>
				<CardActions>
					<IconButton
						className={classnames(classes.expand, {
							[classes.expandOpen]: this.state.expanded,
						})}
						onClick={this.handleExpandClick}
						>
						<ExpandMoreIcon />
					</IconButton>
				</CardActions>
				<Collapse
					in={this.state.expanded}
					timeout="auto"
					unmountOnExit
				>
					<CardContent className={classes.content} style={{ marginBottom: 20 }}>
						<Typography variant="body1">
							{ content }
						</Typography>
						<Button
						variant="contained"
						color="secondary"
						className={classes.delete}
						onClick={() => this.handleDelete(handleDeleteEvent, index)}
						>
							Delete
						</Button>
					</CardContent>

				</Collapse>
			</Card>
		)
	}
})
