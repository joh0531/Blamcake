import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from './context'
import Layout from './Layout'
import Home from './home'
import { Stage1, Stage2 } from './Stages'
import { Add, Myevents } from './Manage'
import axios from 'axios'

export default class extends Component {
	state = {
		interests: [],
		user: '',
		events: [],
	}
	setInterests = (formState) => {
		let interests = []
		Object.entries(formState.interests).forEach(([interest, selected]) => {
			if (selected){
				interests.push(interest)
			}
		})
		let { user } = formState
		this.setState({ interests, user }, () => console.log(this.state))
	}
	// server request for events pertaining to interests
	updateEvents = interests => {
		return axios.post('/update', { interests })
			.then(({ data }) =>
				this.setState({ 
					events: data 
					
					// data.map(event => ({
					// 	data
					// }))
						// category: event.category,
						// title: event.title,
						// location: event.location,
						// content: event.content,
						// attending: event.attending,
				})
			).then(() => console.log(this.state)
			).catch(error => console.error(error))
	}
	// TODO:
	// update local event with correct attendees, THEN post to axios
	// or other way around
	//
	// send to editevent... the new attending list for that particular id
	// id , attending)
	//
	// for each id in state attending ..... send a post adding this user
	// to the list of attendees
	// }
	// {
	// 	_id: id,
	// 	attending: []
	// }
	updateEventAttendees = (index, _id, attending) => {
		console.log('event selected:',this.state.events[index])
		console.log('type of attending',typeof attending)
		console.log('new attending list in update event attendees:',attending[0])

		// const events = Object.assign({}, this.state.events)
		// events[index].attending = attending
		// console.log('events',events)
		// this.setState({ events }, () => {
		// 	console.log(this.state)
		// })
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
			                <Route component={Add} path="/add" />
							<Route component={Myevents} path="/myevents" />
			            </Switch>
			        </Layout>
			    </Provider>
		    </BrowserRouter>
		)
	}
}
