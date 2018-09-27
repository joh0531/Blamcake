import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { CssBaseline, Paper, Typography } from '@material-ui/core'

// export default () => <h1>STAGE 2</h1>
export default withStyles(theme => ({
	general: {
		margin: 100,
	},
	Paper: {
		padding: 25
	}
}))(({ classes }) => (
	<div className={classes.general}>
		<Typography align="center" variant="display2">
			Blamcake - Development Plan 
		</Typography>
		<Typography align="center" variant="display1">
			DataBase Project Fall 2018 - Stage 2	
		</Typography>
		<Paper>
			<Typography variant="headline" className={classes.Paper} >1</Typography>	
			<Typography variant="headline" className={classes.Paper} >2</Typography>	
			<Typography variant="headline" className={classes.Paper} >3</Typography>	
			<Typography variant="headline" className={classes.Paper} >3</Typography>	
			<Typography variant="headline" className={classes.Paper} >3</Typography>	
		</Paper>
	</div>
))
