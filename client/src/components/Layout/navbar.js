import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Grid, Tab, Tabs, Typography } from '@material-ui/core'
import SvgIcon from '@material-ui/core/SvgIcon'

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
					</Grid>
                    <Grid item>
                        <Tabs value={value} onChange={this.handleChange}>
							<Tab 
								component={Link} label="Home" to="/" 
								icon={
									<SvgIcon color="inherit">
										<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
									</SvgIcon>
								}
							/>
                            <Tab component={Link} label="Stage 1" to="/stage1" />
                            <Tab component={Link} label="Stage 2" to="/stage2"/>
                        </Tabs>
                    </Grid>
                </Grid>
            </AppBar>
        )
    }
})
