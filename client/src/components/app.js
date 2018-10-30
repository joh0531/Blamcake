import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from './context'
import Layout from './Layout'
import Home from './home'
import { Stage1, Stage2 } from './Stages'
import { Add, Edit } from './Manage'

<<<<<<< HEAD
export default () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact component={Home} path="/" />
                <Route component={Stage1} path="/stage1" />
                <Route component={Stage2} path="/stage2" />
                <Route component={Add} path="/add" />
                <Route component={Edit} path="/edit" />
            </Switch>
        </Layout>
    </BrowserRouter>
)
=======
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
						</Switch>
					</Layout>
				</Provider>
			</BrowserRouter>
		)
	}
}
// Previously this was the first route:
// <Route exact component={Home} path="/" />
>>>>>>> 06156d2abaec46591e96797351b7137856204e72
