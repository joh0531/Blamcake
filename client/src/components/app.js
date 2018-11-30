import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from './context'
import Layout from './Layout'
import Home from './home'
import { Stage1, Stage2 } from './Stages'
import Myevents from './Manage'
import Add from './Manage/add.js'
import Edit from './Manage/edit.js'
import axios from 'axios'

export default class extends Component {
	state = {
		interests: [],
		user: '',
		events: [],
	}
	setInterests = formState => {
		let interests = []
		Object.entries(formState.interests).forEach(([interest, selected]) => {
			if (selected){
				interests.push(interest)
			}
		})
		let { user } = formState
		this.setState({ interests, user })
		if (formState.sub) {
			console.log('send email!')
			axios.post('/email', { user })
				.then(res => console.log(res))
				.catch(error => console.log(error))
		}
	}
	// server request for events pertaining to interests
	updateEvents = interests => {
		return axios.post('/update', { interests })
			.then(({ data }) =>
				this.setState({
					events: data
				})
			).then(() => console.log(this.state)
			).catch(error => console.error(error))
	}
	updateEventAttendees = (index, _id, attending, doAddUser) => {
		const { events, user } = this.state

		if (doAddUser){
			attending.push(user)
		} else {
			attending = attending.filter(attendee => attendee !== user)
			console.log(attending)
		}
		events[index].attending = attending
		axios.post('/editEvent', { _id, attending })
			.then(() =>
				this.setState({ events })
			)
	}
	render() {
		return (
		    <BrowserRouter>
		    	<Provider
		    		value={{
		    			state: this.state,
		    			setInterests: this.setInterests,
						updateEvents: this.updateEvents,
						updateEventAttendees: this.updateEventAttendees,
		    		}}
		    	>
			        <Layout>
			            <Switch>
			                <Route exact component={Home} path="/" />
			                <Route component={Stage1} path="/stage1" />
			                <Route component={Stage2} path="/stage2" />
							<Route component={Myevents} path="/myevents" />
							<Route component={Add} path="/add" />
							<Route component={Edit} path="/edit" />
			            </Switch>
			        </Layout>
			    </Provider>
		    </BrowserRouter>
		)
	}
}
