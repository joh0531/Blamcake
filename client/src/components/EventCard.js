import React, { Fragment, Component } from 'react'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardActions, Button, Typography } from '@material-ui/core'
import { Collapse, Grid, IconButton } from '@material-ui/core'
import { CardContent, CardMedia, CardActionArea } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import LocationOn from '@material-ui/icons/LocationOn'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


export default withStyles(theme => ({
	card: {
		margin: theme.spacing.unit * 2,
		minWidth: theme.spacing.unit * 60,
		padding: theme.spacing.unit * 1.5,
	},
	location: {
		color: purple[300],
		fontSize: 16,
		float: 'left',
	},
	icon: {
		color: purple[400],
		marginRight: theme.spacing.unit * 1.5,
		marginTop: theme.spacing.unit * 1.5,
		fontSize: 18,
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
}))(class extends Component {
	state = { expanded: false }
	
	handleExpandClick = () => {
		this.setState({ expanded: !this.state.expanded })
	}
	
	render() {
		const { classes, title, content, location } = this.props

		return (
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
						<div>
							<LocationOn 
								className={classes.icon} 
								fontSize="small"
								gutterBottom
							/>
							<Typography 
								variant="overline" 
								className={classes.location}
							>
								Location : { location }
							</Typography>
							<IconButton 
								className={classnames(classes.expand, {
									[classes.expandOpen]: this.state.expanded,
								})}
								onClick={this.handleExpandClick}
								>
								<ExpandMoreIcon />
							</IconButton>
						</div>
					</CardContent>
				</CardActionArea>
				<Collapse 
					in={this.state.expanded}
					timeout="auto"
					unmountOnExit
				>
					<CardContent>
						<Typography variant="body1">
							{ content }
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
		)
	}
})
