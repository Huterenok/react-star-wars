import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from "../constants/actionTypes";
import { omit } from "lodash";
import { getLocalStorage } from "@utils/localStorage";

const initialState = getLocalStorage('store')

// const store = {
// 	2 : {
// 		name :' asdasdasdasd',
// 		img:''
// 	}
// }


const favoriteReducer = (state = initialState,action) =>{
	switch (action.type) {
		case ADD_PERSON_TO_FAVORITE:
			console.log({...state,...action.payload})
			return {
				...state,
				...action.payload
			}		
		case REMOVE_PERSON_FROM_FAVORITE:
			return omit(state,action.payload)
		default:
			return state
	}
}

export default favoriteReducer