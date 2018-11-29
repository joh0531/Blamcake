import React, { Component } from 'react'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardActions, Typography } from '@material-ui/core'
import { Collapse, IconButton } from '@material-ui/core'
import { CardContent, CardMedia } from '@material-ui/core'
import { FormControlLabel, Checkbox } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import LocationOn from '@material-ui/icons/LocationOn'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AccessTime from '@material-ui/icons/AccessTime'
import { Consumer } from './context'

export default withStyles(theme => ({
	card: {
		margin: theme.spacing.unit * 1.5,
		maxWidth: 600,
	},
	location: {
		color: purple[300],
		fontSize: 14,
		float: 'left',
		paddingRight: 30,
		paddingLeft: 10,
	},
	icon: {
		color: purple[300],
		marginLeft: theme.spacing.unit * 4,
		fontSize: 20,
		float: 'left',
		padding: 0,
	},
	expand: {
		display: 'flex',
		float: 'right',
		transform: 'rotate(0deg)',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
		// marginLeft: 'auto',
		marginLeft: 16,
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	action: {
		margin: 0,
		padding: 0,
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
		paddingBottom: 0,
		paddingTop: 0,
		// For limiting rendered HTML of event collapse details
		display: "inline-block",
		maxWidth: 600, // any better way to do this?
		maxHeight: 200,
		overflow: "auto"
	},
	time: {
		color: purple[300],
		fontSize: 14,
		margin: 0,
		padding: 0,
		paddingLeft: 10,
	},
	timewrapper: {
		color: purple[300],
		padding: 0,
	},
	timeicon: {
		marginLeft: theme.spacing.unit * 4,
		padding: 0,
		fontSize: 20,
	},
	footer: {
		padding: 0,
		margin: 0,
		display: 'flex',
		justifyContent: 'space-between',
	},
}))(class extends Component {
	state = { 
		expanded: false,
		checked: this.props.attending.includes(this.props.user) 
	}
	handleExpandClick = () => {
		this.setState({ expanded: !this.state.expanded })
	}
	handleCheck = (updateEventAttendees, index, _id, attending, user) => {
		this.setState(
			{ checked: !this.state.checked }, () => 
			updateEventAttendees(index, _id, attending, this.state.checked)
		)
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
	render(){
		const { classes, _id, title, content, location, 
			attending, index } = this.props
		
		return (
			<Card className={classes.card}>
				<CardMedia 
					className={classes.media}
					image={require("../images/nd1.png")}
					title="Standard Event Background, ND Campus"
					alt="Standard Event Background, ND Campus"
				/>
				<CardContent className={classes.title}>
					<Typography variant="h5" color="primary">
						{ title }
					</Typography>
				</CardContent>
				<CardActions className={classes.action}>
					<LocationOn className={classes.icon}/>
					<Typography variant="overline" className={classes.location}>
						{ location }
					</Typography>
				</CardActions>
				<CardActions className={classes.timewrapper}>
					<AccessTime className={classes.timeicon}/>
					<Typography variant="overline" className={classes.time}>
						{ this.getCorrectTimeFormat() }
					</Typography>
				</CardActions>
				<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
					<CardContent style={{ padding: 0 }}>
						<div className={classes.content}
							dangerouslySetInnerHTML={
								{__html: content }	
							}
						/>
					</CardContent>
				</Collapse>
				<CardActions className={classes.footer}>
					<IconButton 
						className={classnames(classes.expand, {
							[classes.expandOpen]: this.state.expanded,
						})}
						onClick={this.handleExpandClick}
						>
						<ExpandMoreIcon />
					</IconButton>
					<Consumer>
						{({ updateEventAttendees, user }) => (
							<FormControlLabel 
								control={
								<Checkbox
									checked={this.state.checked}
									onChange={() => this.handleCheck(updateEventAttendees, 
										index, _id, attending, user)}
									value="checked"
								/>
								}
							label="Attending?"
							/>
						)}
					</Consumer>
				</CardActions>
			</Card>
		);
	}
})
