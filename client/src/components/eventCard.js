import React, { Component } from 'react'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardActions, Typography } from '@material-ui/core'
import { Collapse, IconButton } from '@material-ui/core'
import { CardContent, CardMedia } from '@material-ui/core'
import { FormControlLabel, Checkbox } from '@material-ui/core'
import { purple, red } from '@material-ui/core/colors'
import LocationOn from '@material-ui/icons/LocationOn'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
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
		padding: 0,
	},
	icon: {
		color: purple[400],
		marginLeft: theme.spacing.unit,
		fontSize: 14,
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
		//paddingLeft: theme.spacing.unit * 2,
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
		color: '#f76292',
		fontSize: 14,
		paddingLeft: theme.spacing.unit * 2,
		padding: 0,
	},
}))(class extends Component {
	state = { 
		expanded: false,
		checked: false,
	}
	handleExpandClick = () => {
		this.setState({ expanded: !this.state.expanded })
	}
	handleCheck = (updateEventAttendees, index, attending, user) => {
		this.setState({ checked: !this.state.checked })
		console.log('attending in handle check: ',attending)
		updateEventAttendees(index, attending)
		// this.setState(
		// 	{ checked: !this.state.checked }, 
		// 	() => { 
		// 		console.log(this.state)
				
		// 		if (this.state.checked && !attending.includes(user)){
		// 			return updateEventAttendees(index, attending.push(user))
		// 		} else if (!this.state.checked && attending.includes(user)){
		// 			return updateEventAttendees(index, attending.filter(attendee => attendee != user))
		// 		}
		// 		return Promise.resolve()
		// 	}
		// )
	}

	render(){
		const { classes, title, content, location, start_at, end_at,
			category, attending, index } = this.props
		
		// Time formatting
		let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
			"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		let datestart = new Date(start_at)
		let dateend = new Date(end_at)
		let dateperiod = monthNames[datestart.getMonth()] + ' '
			+ datestart.getDate() + ', '
			+ (parseInt(datestart.getHours())%12 == 0 ? '12' : datestart.getHours()%12) + ' '
			+ (parseInt(datestart.getHours())/11 > 0 ? 'PM' : 'AM') + ' - '
			+ (parseInt(dateend.getHours())%12 == 0 ? '12' : dateend.getHours()%12) + ' '
			+ (parseInt(dateend.getHours())/11 > 0 ? 'PM' : 'AM') + ' '
			+ datestart.getFullYear()

		return (
			<Card 
				className={classes.card}
			>
				<CardMedia 
					className={classes.media}
					image={require("../images/nd1.png")}
					title="Standard Event Background, ND Campus"
					alt="Standard Event Background, ND Campus"
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
					<LocationOn className={classes.icon} fontSize="small"/>
					<Typography variant="overline" className={classes.location}>
						Location : { location }
					</Typography>
				</CardActions>
				<CardActions className={classes.time}>
					<Typography variant="overline">
						Time: { dateperiod }
					</Typography>
				</CardActions>
				<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
					<CardContent>
						<div className={classes.content}
							dangerouslySetInnerHTML={
								{__html: content }	
							}
						/>
					</CardContent>
				</Collapse>
				<CardActions className={classes.action}>
					<IconButton 
						className={classnames(classes.expand, {
							[classes.expandOpen]: this.state.expanded,
						})}
						onClick={this.handleExpandClick}
						>
						<ExpandMoreIcon />
					</IconButton>
					<Consumer>
						{({ updateEventAttendees, state: { user } }) => (
							<FormControlLabel control={
								<Checkbox
									checked={this.state.checked}
									onChange={() => this.handleCheck(updateEventAttendees, index, attending, user)}
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
