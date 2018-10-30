import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Consumer } from './context'

export default ({ component: Component, ...rest }) => (
	<Consumer>
		{({ state: { interestFormComplete } }) => (
			<Route {...rest} render={props => (
				interestFormComplete ? <Component {...props}/>
				: <Redirect to={{ pathname: '/interest' }} />
			)} />
		)}
	</Consumer>
)
