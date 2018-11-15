import React from 'react'
import Myevents from './myevents'
import { Consumer } from '../context'

export default () => {
		return(
			<Consumer>
				{({ state: { user } }) => (
					<Myevents
						user = { user }
					/>
				)}
			</Consumer> 
	)
	
}