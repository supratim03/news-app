import * as actions from "../actions";
import * as types from "../../actionsTypes/types";

describe("user actions", () => {
    it("should get default news", () => {
        const pageSize = 10;
        const sortValue = "newest";
        const expectedAction = {
            type: types.GET_DEFAULT_NEWS,
            pageSize,
            sortValue
        };
        expect(actions.getDefaultNews(pageSize, sortValue)).toEqual(expectedAction);
    });

    it("should set default news", () => {
        const newsList = []
        const expectedAction = {
            type: types.SET_DEFAULT_NEWS,
            payload: newsList
        };
        expect(actions.setDefaultNews(newsList)).toEqual(expectedAction);
    });

    it("should set loading", () => {
        const isLoading = false;
        const expectedAction = {
            type: types.SET_IS_LOADING,
            payload: isLoading
        };
        expect(actions.setIsLoading(isLoading)).toEqual(expectedAction);
    });

    it("should get article by ID", () => {
        const apiUrl = 'test';
        const expectedAction = {
            type: types.GET_ARTICLE_BY_ID,
            apiUrl
        };
        expect(actions.getArticleById(apiUrl)).toEqual(expectedAction);
    });

    it("should set article by ID", () => {
        const article = null;
        const expectedAction = {
            type: types.SET_ARTICLE_BY_ID,
            payload: article
        };
        expect(actions.setArticleById(article)).toEqual(expectedAction);
    });

    it("should get search results", () => {
        const pageSize = 10;
        const sortValue = "newest";
        const searchText = "test"
        const expectedAction = {
            type: types.GET_SEARCH_RESULTS,
            searchText,
            pageSize,
            sortValue
        };
        expect(actions.getSearchResults(searchText, pageSize, sortValue)).toEqual(expectedAction);
    });

    it("should set article by ID", () => {
        const results = [];
        const expectedAction = {
            type: types.SET_SEARCH_RESULTS,
            payload: results
        };
        expect(actions.setSearchResults(results)).toEqual(expectedAction);
    });
})