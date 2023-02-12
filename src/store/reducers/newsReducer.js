import * as actionTypes from "../actionsTypes/types";

const initialState = {
    defaultNews: [],
    isLoading: true,
    articleById: null,
    searchResults: []
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_DEFAULT_NEWS:
            return {
                ...state,
                defaultNews: action.payload,
            }
        case actionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case actionTypes.SET_ARTICLE_BY_ID:
            return {
                ...state,
                articleById: action.payload,
            }
        case actionTypes.SET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.payload,
            }
        default:
            return state;
    }
}

export default newsReducer;