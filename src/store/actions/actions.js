import * as actionTypes from "../actionsTypes/types";

export const getDefaultNews = (pageSize, sortValue) => {
    return {
        type: actionTypes.GET_DEFAULT_NEWS,
        pageSize,
        sortValue
    }
}

export const getArticlesByCategory = (category, data, sortBy) => {
    return {
        type: actionTypes.GET_ARTICLE_BY_CAT,
        category,
        data,
        sortBy
    }
}

export const setDefaultNews = (newsList) => {
    return {
        type: actionTypes.SET_DEFAULT_NEWS,
        payload: newsList
    }
}


export const setIsLoading = (isLoading) => {
    return {
        type: actionTypes.SET_IS_LOADING,
        payload: isLoading
    }
}

export const getArticleById = (apiUrl) => {
    return {
        type: actionTypes.GET_ARTICLE_BY_ID,
        apiUrl
    }
}

export const setArticleById = (article) => {
    return {
        type: actionTypes.SET_ARTICLE_BY_ID,
        payload: article
    }
}

export const getSearchResults = (searchText, pageSize, sortValue) => {
    return {
        type: actionTypes.GET_SEARCH_RESULTS,
        searchText,
        pageSize,
        sortValue
    }
}

export const setSearchResults = (results) => {
    return {
        type: actionTypes.SET_SEARCH_RESULTS,
        payload: results
    }
}

