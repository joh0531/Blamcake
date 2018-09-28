import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { CssBaseline, Paper, Typography } from '@material-ui/core'

// export default () => <h1>STAGE 2</h1>
export default withStyles(theme => ({
	general: {
		margin: 100,
	},
	Paper: {
		padding: 25,
		margin: 15
	},
	indented: {
		marginLeft: 45
	}
}))(({ classes }) => (
	<div className={classes.general}>
		<Typography align="center" variant="display2">
			Blamcake - Development Plan 
		</Typography>
		<Typography align="center" variant="display1">
			DataBase Project Fall 2018 - Stage 2	
		</Typography>

		<Paper className={classes.Paper}>
			<Typography variant="headline" gutterBottom>1. Relational Schema</Typography>	
			{[
				'Events(ID, all_day, created_at, location, start_at, end_at, content, title, image, url, isFeatured)',
				'NDEvent(ID, all_day, created_at, location, start_at, end_at, content, title, image, url, isFeatured)',
				'UserEvent(ID, all_day, created_at, location, start_at, end_at, content, title, image, url, isFeatured, club, netid)',
				'Users(NETID, password, email)',
				'Calendar(CATEGORY, length)',
				'NotificationPreferences(EMAIL, timeofday, regularity)',
			].map((bullet, i) => (
				<Typography className={classes.indented} key={i} variant="caption" color="inherit" gutterBottom>{`• ${bullet}`}</Typography>
			))}
		</Paper>
		<Paper className={classes.Paper}>
			<Typography variant="headline" gutterBottom>2. Final Choice of Database and Software Platforms</Typography>	
			{[
				'a. MongoDB - Database',
				'b. Express.js - Framework',
				'c. React.js - Frontend',
				'd. Node.js - Backend',
				'e. Digital Ocean - Cloud Service',
			].map((bullet, i) => (
				<Typography className={classes.indented} key={i} variant="caption" color="inherit" gutterBottom>{`${bullet}`}</Typography>
			))}
		</Paper>
			
			
	</div>
))
