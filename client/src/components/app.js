import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from './context'
import Layout from './Layout'
import Home from './home'
import { Stage1, Stage2 } from './Stages'

export default class extends Component {
	state = {
		interests: [],
	}
	setInterests = (formState) => {
		let interests = []
		Object.entries(formState).forEach(([interest, selected]) => {
			if (selected){
				interests.push(interest)
			}
		})
		this.setState({ interests })
	}
	render() {
		return (
			<BrowserRouter>
				<Provider 
					value={{ 
						state: this.state, 
						setInterests: this.setInterests 
					}}
				>
					<Layout>
						<Switch>
							<Route exact component={Home} path="/" />
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
