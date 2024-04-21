import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS } from "./constants";

const initialState = {
    searchField: '',
    isPending: false,
    robots: [],
    error: ''
}

export const reducer = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD: 
            return { ...state, searchField: action.payload };
        case REQUEST_ROBOTS_PENDING:
            return { ...state, isPending: true };
        case REQUEST_ROBOTS_SUCCESS:
            return { ...state, isPending: false, robots: action.payload };
        case REQUEST_ROBOTS_FAILED:
            return { ...state, isPending: false, error: action.payload };
        default:
            return state;
    }

}