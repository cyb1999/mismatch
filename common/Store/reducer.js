import * as actionTypes from './constants'
export const Initialized = {
    showCloud: null,
    showPage: null,

}
export const reducer = (state, action) => {
    console.log(actionTypes)
    switch (action.type) {
        case actionTypes.CHANGE_SHOWCLOUD: return { ...state, showCloud: action.data }
        case actionTypes.CHANGE_SHOWPAGE: return { ...state, showPage: action.data }
        default:
            return state;
    }
}