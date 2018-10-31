import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Grid, Tab, Tabs, Typography } from '@material-ui/core'
import BuildIcon from '@material-ui/icons/Build'
import EventIcon from '@material-ui/icons/Event'

export default withStyles(theme => ({
    title: {
        color: theme.palette.primary.contrastText
    }
}))(class extends Component {
    state = {
        value: 0
    }
    handleChange = (e, value) => {
        this.setState({ value })
    }
    render() {
        const { classes } = this.props
        const { value } = this.state
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
                </Grid>
            </AppBar>
        )
    }
})
