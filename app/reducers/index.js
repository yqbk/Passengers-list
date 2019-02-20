import { combineReducers } from 'redux'

import passengers from './passengers'
import traveller from './traveller'

export default combineReducers({
  passengers,
  traveller,
})
