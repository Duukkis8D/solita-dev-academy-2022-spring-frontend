import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import farmFilterReducer from './reducers/farmFilterReducer'
import farmTestData from './data/farmTestData'

const store = createStore( farmFilterReducer, farmTestData )

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById( 'root' )
)