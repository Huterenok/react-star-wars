import {createStore,applyMiddleware} from 'redux'
import rootReducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { setLocalStorage } from '@utils/localStorage'
import thunk from 'redux-thunk'
const store = createStore(rootReducers,composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
	setLocalStorage('store',store.getState().favoriteReducer)
})

export default store