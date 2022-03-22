import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { farmFilterChange } from './reducers/farmFilterReducer'
import FarmMeasurements from './components/FarmMeasurements'
import './css/App.css'

const App = () => {
	const locationFilter = useSelector( state => state.filter )
	const dispatch = useDispatch()

	const filterFarm = ( event ) => {
		const filter = event.target.value
		dispatch( farmFilterChange( filter ) )
	}

	return (
		<div id='appContainer'>
			<h1>Farm data viewer</h1>

			<label htmlFor='farms'>
				Please select a farm.
			</label><br></br>
			<select name='farms' onChange={ filterFarm } value={ locationFilter }>
				<option value='All farms'>All farms</option>
				<option value='PartialTech Research Farm'>PartialTech Research Farm</option>
				<option value='Friman Metsola collective'>Friman Metsola collective</option>
			</select>

			<FarmMeasurements></FarmMeasurements>
		</div>
	)
}

export default App
