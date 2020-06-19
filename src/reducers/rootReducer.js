import { combineReducers } from 'redux';
// import reducers for example
// import carsReducer from '....
import featuresReducer from './featuresReducer'

const rootReducer = combineReducers({
    state: featuresReducer,
  });

  export default rootReducer;