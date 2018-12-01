import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
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
    render() {
        const { classes } = this.props
        const { value, anchorEl } = this.state
        return (
            <AppBar position="static">
                <Grid alignItems="center" container justify="space-around">
                    <Grid item>
						<Button
                            className={classes.title}
                            variant="text"
                            component={Link}
                            to="/"
                        >
                            Blamcake
                        </Button>
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
                            component={Link}
                            to="/myevents"
                        > 
                            My Events
                        </Button>
                    </Grid>
                </Grid>
            </AppBar>
        )
    }
})
