import React, { Fragment, Component } from 'react'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardActions, Typography } from '@material-ui/core'
import { Collapse, Grid, IconButton } from '@material-ui/core'
import { CardContent, CardMedia, CardActionArea } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import LocationOn from '@material-ui/icons/LocationOn'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default withStyles(theme => ({
	card: {
		margin: theme.spacing.unit * 1.5,
		minWidth: theme.spacing.unit * 50,
	},
	location: {
		color: purple[300],
		fontSize: 16,
		float: 'left',
	},
	icon: {
		color: purple[400],
		marginLeft: theme.spacing.unit,
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
	action: {
		paddingLeft: theme.spacing.unit * 2,
		paddingTop: theme.spacing.unit * 0.5,
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
					<LocationOn 
						className={classes.icon} 
						fontSize="small"
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
				</CardActions>
				<Collapse 
					in={this.state.expanded}
					timeout="auto"
					unmountOnExit
				>
					<CardContent className={classes.content}>
						<Typography variant="body1">
							{ content }
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
		)
	}
})
