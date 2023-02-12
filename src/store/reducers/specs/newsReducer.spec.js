import * as types from "../../actionsTypes/types";
import newsReducer from "../newsReducer";

describe("search reducer", () => {
    it("should return the initial state", () => {
        expect(newsReducer(undefined, {})).toEqual(
            {
                defaultNews: [],
                isLoading: true,
                articleById: null,
                searchResults: []
            }
        );
    });

    it("should handle SET_DEFAULT_NEWS", () => {
        const action = {
            type: types.SET_DEFAULT_NEWS,
            payload: [{ id: 1, webTitle: "test" }]
        };
        expect(newsReducer([], action)).toEqual(
            { defaultNews: [{ id: 1, webTitle: "test" }] }
        );
    });

    it("should handle SET_DEFAULT_NEWS", () => {
        const action = {
            type: types.SET_IS_LOADING,
            payload: true
        };
        expect(newsReducer([], action)).toEqual(
            { isLoading: true }
        );
    });

    it("should handle SET_DEFAULT_NEWS", () => {
        const action = {
            type: types.SET_ARTICLE_BY_ID,
            payload: null
        };
        expect(newsReducer([], action)).toEqual(
            { articleById: null }
        );
    });

    it("should handle SET_SEARCH_RESULTS", () => {
        const action = {
            type: types.SET_SEARCH_RESULTS,
            payload: []
        };
        expect(newsReducer([], action)).toEqual(
            { searchResults: [] }
        );
    });
})