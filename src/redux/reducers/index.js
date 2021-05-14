import inventoryReducer from './inventory';
import productsReducer from './products';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
     inventory: inventoryReducer, 
     products: productsReducer 
})

export default allReducers;

// import reducer from './reducer';
// import { combineReducers } from 'redux';

// const allReducers = combineReducers({
//      reducer
// })

// export default allReducers;