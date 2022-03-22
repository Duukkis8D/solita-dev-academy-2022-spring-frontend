import React from 'react'
import { useSelector } from 'react-redux'

const FarmMeasurements = () => {
	const locationFilter = useSelector( state => state.filter )
	const allFarms = useSelector( state => state.farmMeasurements )

	const filterFarms = () => {
		if( locationFilter === 'ALL' ) {
			return allFarms
		} else {
			return allFarms.filter( farmMeasurement => farmMeasurement.location === locationFilter )
		}
	}

	return (
		<ul>
			{ filterFarms().map( farmMeasurement => {
				return (
					<li key={ farmMeasurement._id }>
						{ farmMeasurement.location }<pre>&#9;</pre>
						{ farmMeasurement.datetime }<pre>&#9;</pre>
						{ farmMeasurement.sensorType }<pre>&#9;</pre>
						{ farmMeasurement.value }
					</li>
				)
			} ) }
		</ul>
	)
}

export default FarmMeasurements