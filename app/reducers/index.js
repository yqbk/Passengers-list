import { combineReducers } from 'redux'

import passengers from './passengersReducer'
import traveller from './travellerReducer'

export default combineReducers({
  passengers,
  traveller,
})
