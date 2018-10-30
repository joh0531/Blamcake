import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from './context'
import Layout from './Layout'
import Home from './home'
import { Stage1, Stage2 } from './Stages'
import { Add, Edit } from './Manage'


export default class extends Component {
	state = {
		interestFormComplete: false,
	}
	setInterests = () => {
		this.setState({ interestFormComplete: true })
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
							<Route component={Add} path="/add" />
               				<Route component={Edit} path="/edit" />
						</Switch>
					</Layout>
				</Provider>
			</BrowserRouter>
		)
	}
}
