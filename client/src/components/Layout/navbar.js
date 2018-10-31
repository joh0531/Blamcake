import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'
import BuildIcon from '@material-ui/icons/Build'
import EventIcon from '@material-ui/icons/Event'
import { AppBar, Grid, Tab, Tabs, Typography, Menu, MenuItem, Button } from '@material-ui/core'

export default withStyles(theme => ({
    title: {
        color: theme.palette.primary.contrastText
    }
}))(class extends Component {
    state = {
        value: 0,
        anchorEl: null
    }
    handleChange = (e, value) => {
        this.setState({ value })
    }
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget })
    }
    handleClose = () => {
        this.setState({ anchorEl: null })
    }
    render() {
        const { classes } = this.props
        const { value, anchorEl } = this.state
        return (
            <AppBar position="static">
                <Grid alignItems="center" container justify="space-around">
                    <Grid item>
						<Typography
                            className={classes.title}
                            variant="title"
                        >
                            Blamcake
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Tabs value={value} onChange={this.handleChange}>
							<Tab component={Link} label="Home" to="/"
								icon={ <EventIcon color="inherit"/> }
							/>
							<Tab component={Link} label="Stage 1" to="/stage1" 
								icon={ <BuildIcon color="inherit"/> }
							/>
							<Tab component={Link} label="Stage 2" to="/stage2"
								icon={ <BuildIcon color="inherit"/> }
							/>
                        </Tabs>
                    </Grid> 
                    <Grid item>
                        <Button
                            className={classes.title}
                            variant="text"
                            onClick={this.handleClick}
                        > 
                            My Events
                        </Button>
                        <Menu
                            id="eventmenu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose} component={Link} label="Add" to="/add">Add</MenuItem>
                            <MenuItem onClick={this.handleClose}>Edit</MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
            </AppBar>
        )
    }
})
