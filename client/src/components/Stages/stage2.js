import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'

export default withStyles(theme => ({
	general: {
		marginTop: theme.spacing.unit * 7,
		marginBottom: theme.spacing.unit * 12,
		marginLeft: theme.spacing.unit * 12,
		marginRight: theme.spacing.unit * 12
	},
	indented: {
		marginLeft: theme.spacing.unit * 6
	},
	paper: {
		padding: theme.spacing.unit * 3,
		margin: theme.spacing.unit * 2
	},
	title: {
		marginTop: 0
	}
}))(({ classes }) => (
	<div className={classes.general}>
		<Typography align="center" className={classes.title} variant="display2">
			Blamcake - Development Plan
		</Typography>
		<Typography align="center" variant="display1">
			DataBase Project Fall 2018 - Stage 2
		</Typography>
		<Paper className={classes.paper}>
			<Typography variant="headline">
				1a. Relational Schema
			</Typography>
			{[
				'Events(ID, all_day, created_at, location, start_at, end_at, content, title, image, url, isFeatured)',
				'NDEvent(ID, all_day, created_at, location, start_at, end_at, content, title, image, url, isFeatured)',
				'UserEvent(ID, all_day, created_at, location, start_at, end_at, content, title, image, url, isFeatured, club, netid)',
				'Users(NETID, password, email)',
				'Calendar(CATEGORY, LENGTH)',
				'NotificationPreferences(EMAIL, timeofday, regularity)',
			].map((bullet, i) => (
				<Typography
					className={classes.indented}
					color="inherit"
					key={i}
					variant="caption"
				>
					{`• ${bullet}`}
				</Typography>
			))}
		</Paper>
		<Paper className={classes.paper}>
			<Typography variant="headline">
				1b. Functional Dependencies 
			</Typography>
			{[
				'Events: { ID -> all_day, created_at, location, start_at, end_at, content, title, image, url, isFeatured }',
				'NDEvent: { ID -> all_day, created_at, location, start_at, end_at, content, title, image, url, isFeatured }',
				'UserEvent: { ID -> all_day, created_at, location, start_at, end_at, content, title, image, url, isFeatured, club, netid }',
				'Users: { NETID -> password, email }',
				'Calendar: { }',
				'Notification Preferences: { EMAIL -> timeofday, regularity }',
			].map((bullet, i) => (
				<Typography
					className={classes.indented}
					color="inherit"
					key={i}
					variant="caption"
				>
					{`• ${bullet}`}
				</Typography>
			))}
		</Paper>
		<Paper className={classes.paper}>
			<Typography variant="headline">
				2. Final Choice of Database and Software Platforms
			</Typography>
			{[
				'a. MongoDB - Database',
				'b. Express.js - Framework',
				'c. React.js - Front end',
				'd. Node.js - Back end',
				'e. Digital Ocean - Cloud Service'
			].map((bullet, i) => (
				<Typography
					className={classes.indented}
					color="inherit"
					key={i}
					variant="caption"
				>
					{`${bullet}`}
				</Typography>
			))}
		</Paper>
		<Paper className={classes.paper}>
			<Typography variant="headline">
				3. Where Our Data Comes From
			</Typography>
			{[
				'a. Notre Dame Events API',
				'b. User Submitted Events',
				'c. User Submitted Personal Information'
			].map((bullet, i) => (
				<Typography
					className={classes.indented}
					color="inherit"
					key={i}
					variant="caption"
				>
					{`${bullet}`}
				</Typography>
			))}
		</Paper>
		<Paper className={classes.paper}>
			<Typography variant="headline">
				4. Labor Division
			</Typography>
			{[
				'a. Jewon Oh: Back end (Database)',
				'b. Paul Kwak: Back end (Server/API)',
				'c. Matthew Phelps: Front end (UI/Responsiveness)',
				'd. Maru (Eugene) Choi: Front end (UX/Design)'
			].map((bullet, i) => (
				<Typography
					className={classes.indented}
					color="inherit"
					key={i}
					variant="caption"
				>
					{`${bullet}`}
				</Typography>
			))}
		</Paper>
		<Paper className={classes.paper}>
			<Typography variant="headline">
				5. Project Milestone
			</Typography>
			{[
				'Week 1: Sketch-up/Design layout, setup Database (MongoDB), setup routes',
				'Week 2: Server - send requests to ND API / querying (routes that allow database queries)',
				'Week 3: Setting up components in app, focus on displaying events to user and allow searching keywords/UI for database interaction',
				'Week 4: Fine tuning components in app, separation of concerns',
				'Week 5: Initial demo polish ... Details:'
			].map((bullet, i) => (
				<Typography
					className={classes.indented}
					color="inherit"
					key={i}
					variant="caption"
				>
					{`${bullet}`}
				</Typography>
			))}
			<Typography className={classes.indented}>
				{[
					'Oct 31st Stage 3 complete',
					'Show how to insert records into database',
					'Show at least one query that searches and lists the returned records',
					'Show how to update records',
					'Show how to delete records',
				].map((bullet, i) => (
					<Typography
						className={classes.indented}
						color="inherit"
						key={i}
						variant="caption"
					>
						{`${i+1}. ${bullet}`}
					</Typography>
				))}
			</Typography>
			{[
				'Week 6-14: Clean up front-end, feature ideation, add advanced features',
				'Final Demo: December, last class/exam day',
				'Final Step: Put application url in our project repo on dsg1 server',
			].map((bullet, i) => (
				<Typography
					className={classes.indented}
					color="inherit"
					key={i}
					variant="caption"
				>
					{`${bullet}`}
				</Typography>
			))}
		</Paper>
	</div>
))
