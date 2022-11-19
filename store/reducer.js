import * as actionTypes from './constants'
export const Initialized = {
    carParamsList: [],
    showEdition: '1',
    showModalCarDetail: false,
    isFixed: false,
    color: '1',
    wheel: '1',
    decoration: '1',
    sum: 0,
    economize: 0
}
export const reducer = (state, action) => {
    console.log(actionTypes)
    switch (action.type) {
        case actionTypes.CHANGE_CAR_PARAMS_LIST: return { ...state, carParamsList: action.data }
        case actionTypes.CHANGE_SHOW_EDITION: return { ...state, showEdition: action.data }
        case actionTypes.CHANGE_COLOR: return { ...state, color: action.data }
        case actionTypes.CHANGE_WHEEL: return { ...state, wheel: action.data }
        case actionTypes.CHANGE_DECORATION: return { ...state, decoration: action.data }
        case actionTypes.CHANGE_SUM: return { ...state, sum: action.data }
        case actionTypes.CHANGE_ESTIMATE: return { ...state, estimate: action.data }
        default: return state;
    }
}