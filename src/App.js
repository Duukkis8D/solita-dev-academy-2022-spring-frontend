import React from 'react'
import { useDispatch } from 'react-redux'
import { farmFilterChange } from './reducers/farmFilterReducer'
import FarmMeasurements from './components/FarmMeasurements'
import './css/App.css'

const App = () => {
	const dispatch = useDispatch()

	const filterFarm = ( event ) => {
		console.log( 'filter data in filterFarm event handler:', event.target.value )
		const filter = event.target.value
		dispatch( farmFilterChange( filter ) )
	}

	return (
		<div id='appContainer'>
			<h1>Farm data viewer</h1>

			<label htmlFor='farms'>
				Please select a farm.
			</label><br></br>
			<select name='farms' onChange={ filterFarm }>
				<option defaultValue disabled hidden style={ { display: 'none' } } value=''></option>
				<option value='PartialTech Research Farm'>PartialTech Research Farm</option>
				<option value='Friman Metsola collective'>Friman Metsola collective</option>
			</select>

			<FarmMeasurements></FarmMeasurements>
		</div>
	)
}

export default App
