import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardActions, Button, Typography, Grid } from '@material-ui/core'
import { CardContent, CardMedia, CardActionArea, IconButton } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import LocationOn from '@material-ui/icons/LocationOn'
import events from './mockevents'

export default withStyles(theme => ({
	card: {
		margin: theme.spacing.unit * 2,
		minWidth: theme.spacing.unit * 60,
		padding: theme.spacing.unit * 1.5,
	},
	location: {
		color: purple[300],
		fontSize: 16,
	},
	icon: {
		color: purple[400],
		marginRight: theme.spacing.unit * 1.5,
		marginTop: theme.spacing.unit * 1.5,
		fontSize: 18,
	},
	//paper: {
	//	margin: theme.spacing.unit * 0,
	//	padding: theme.spacing.unit * 4,
	//	//width: 200,
	//	height: 200,
	//},
	//gridcontainer: {
	//	direction: "row",
	//	justify: "flex-start",
	//	alignItems: "baseline",
	//	margin: theme.spacing.unit * 0,
	//},
}))(({ classes }) => (
	<Grid container justify="center"> 
		{events.map(({ title, content, location }) => (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia>
				</CardMedia>
				<CardContent>
					<Typography i
						variant="h4" 
						color="primary"
						gutterBottom
					>
						{ title }
					</Typography>
					<Typography variant="subtitle1" gutterBottom>
						{ content }
					</Typography>
					<div>
						<LocationOn 
							className={classes.icon} 
							fontSize="small"
							gutterBottom
							style={{float:"left"}}
						/>
						<Typography 
							variant="overline" 
							className={classes.location}
							style={{float:"left"}}
						>
							Location : { location }
						</Typography>
					</div>
				</CardContent>
			</CardActionArea>
		</Card>
		))}
	</Grid>
	// <Grid container> 
	// 	<Grid item sm>
	// 		<Grid container className={classes.gridcontainer}> 
	// 			{events.map((num) => (
				
	// 			<Grid item xs>
	// 				<Paper className={classes.paper}>{`${num}`}</Paper>
	// 			</Grid>
				
	// 			))}
	// 		</Grid>
	// 	</Grid>
	// </Grid>
))
