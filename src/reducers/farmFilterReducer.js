const farmFilterReducer = ( state, action ) => {
	switch ( action.type ) {
	case 'SET_FILTER': {
		const newState = {
			...state,
			filter: action.filter
		}
		console.log( 'newState in farmFilterReducer:', newState )
		return newState
	}
	default:
		return state
	}
}

export const farmFilterChange = ( filter ) => {
	return {
		type: 'SET_FILTER',
		filter
	}
}

export default farmFilterReducer