import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardActions, Button, Typography } from '@material-ui/core'
import { CardContent, CardMedia, CardActionArea } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
//import LocationOn from 'material-ui-icons/LocationOn'
import events from './content'

export default withStyles(theme => ({
	card: {
		margin: theme.spacing.unit * 2,
	},
	pretty: {
		color: purple[500]
	}

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
	<Fragment>
		{events.map(({ title, content, location }) => (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia>
				</CardMedia>
				<CardContent>
					<Typography i
						variant="subtitle" 
						component="h2"
						color="primary"
						gutterBottom
					>
						{ title }
					</Typography>
					<Typography variant="h5" component="h4">
						{ content }
					</Typography>
					<Typography variant="h6" component="h5"
						className={classes.pretty}>
						Location : { location }
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
		))}
	</Fragment>
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
