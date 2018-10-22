import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import { Typography, Grid, Paper } from '@material-ui/core'

// export default withStyles() => <h1>HOME!</h1>

export default withStyles(theme => ({
	home: {
		//display: 'flex',
		//alignItems: 'flex-end',
		//flexGrow: 1,
	},
	icon: {
		margin: theme.spacing.unit * 2,
	},
	paper: {
		margin: theme.spacing.unit * 0,
		padding: theme.spacing.unit * 4,
		width: 200,
		height: 200,
	},
	gridcontainer: {
		direction: "row",
		justify: "flex-start",
		alignItems: "baseline",
		margin: theme.spacing.unit * 0,
	},
}))(({ classes }) => (
    <div className={classes.home}>
		<Grid container className={classes.gridcontainer}> 
			{[1,2,3,4,5,6,7].map((num) => (
			
			<Grid item xs>
				<Paper className={classes.paper}>{`${num}`}</Paper>
			</Grid>
			
			))}
		</Grid>
	</div> 
))
