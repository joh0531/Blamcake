import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid, Paper } from '@material-ui/core'

// export default withStyles() => <h1>HOME!</h1>

export default withStyles(theme => ({
	home: {
		display: 'flex',
		alignItems: 'flex-end',
		flexGrow: 1,
	},
	icon: {
		margin: theme.spacing.unit * 2,
	},
	paper: {
		margin: theme.spacing.unit * 2,
		padding: theme.spacing.unit * 2,
		width: 200,
		height: 200,
	},
	gridcontainer: {
		margin: theme.spacing.unit * 4,
	},
}))(({ classes }) => (
    <div className={classes.home}>
		<Grid container className={classes.gridcontainer}> 
			<Grid item xs>
				<Paper className={classes.paper}>hi</Paper>
			</Grid>
			<Grid item xs>
				<Paper className={classes.paper}>hi</Paper>
			</Grid>
			<Grid item xs>
				<Paper className={classes.paper}>hi</Paper>
			</Grid>
			<Grid item xs>
				<Paper className={classes.paper}>hi</Paper>
			</Grid>
			<Grid item xs>
				<Paper className={classes.paper}>hi</Paper>
			</Grid>
			<Grid item xs>
				<Paper className={classes.paper}>hi</Paper>
			</Grid>
		</Grid>
	</div> 
))
