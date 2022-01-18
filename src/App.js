import React, { useState } from 'react'

const App = () => {
	const [ farm, setFarm ] = useState( '' )

	const handleFarmChange = ( event ) => {
		setFarm( event.target.value )
	}

	return (
		<div id='appContainer'>
			<h1>Farm data viewer</h1>
			<label htmlFor='farms'>
				Please select a farm.
			</label><br></br>
			<select name='farms' onChange={ handleFarmChange } value={ farm }>
				<option defaultValue disabled hidden style={ { display: 'none' } } value=''></option>
				<option value='partialTechResearchFarm'>PartialTech Research Farm</option>
				<option value='frimanMetsolaCollective'>Friman Metsola collective</option>
			</select>
		</div>
	)
}

export default App
