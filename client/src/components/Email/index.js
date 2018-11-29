import React from 'react'
import Subscription from './subscription'
import { Consumer } from '../context'

export default () => {
		return(
			<Consumer>
				{({ state: { user } }) => (
					<Subscription
						user = { user }
					/>
				)}
			</Consumer> 
	)
	
}