import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from './context'
import PrivateRoute from './privateRoute'
import Interest from './Interest'
import Layout from './Layout'
import Home from './Home'
import { Stage1, Stage2 } from './Stages'

export default class extends Component {
	state = {
		interestFormComplete: false,
	}
	render() {
		return (
			<BrowserRouter>
				<Provider value={{ state: this.state }}>
					<Layout>
						<Switch>
							<Route exact 
								path="/interest" 
								component={Interest}/>
							<PrivateRoute
								path="/"
								component={Home}/>
							<Route component={Stage1} path="/stage1" />
							<Route component={Stage2} path="/stage2" />
						</Switch>
					</Layout>
				</Provider>
			</BrowserRouter>
		)
	}
}
// Previously this was the first route:
// <Route exact component={Home} path="/" />
