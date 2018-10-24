import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardActions, Button, Typography } from '@material-ui/core'
import { CardContent, CardMedia, CardActionArea } from '@material-ui/core'
//import LocationOn from 'material-ui-icons/LocationOn'
import events from './content'

export default withStyles(theme => ({
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
					<Typography variant="subtitle" component="h3">
						{ title }
					</Typography>
					<Typography variant="h6" component="h3">
						{ content }: ...{ location }
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
