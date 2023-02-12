import { runSaga } from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import * as api from "../../../api/apiHelper";
import * as actions from "../../actions/actions";
import * as types from "../../actionsTypes/types";
import newsSaga, { getArticleById, getDefaultNews, getSearchResults } from "../newsSaga";

describe("Search Saga", () => {
    api.getData = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should call getDefaultNews and dispatch success action", async () => {
        const dummyResponse = {
            "success": true,
            "payload": {
                "response": {
                    "results": []
                }
            }
        };
        const requestObject = {
            "pageSize": 10,
            "sortValue": "newest"
        };
        api.getData.mockImplementation(() => dummyResponse);
        const dispatched = [];
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            getDefaultNews, requestObject).toPromise();
        expect(dispatched).toEqual([
            actions.setDefaultNews(dummyResponse.payload.response.results),
            actions.setIsLoading(false)
        ]);
    });

    it("should call getArticleById and dispatch success action", async () => {
        const dummyResponse = {
            "success": true,
            "payload": {
                "response": {
                    "content": null
                }
            }
        };
        const requestObject = {
            "apiUrl": "test"
        };
        api.getData.mockImplementation(() => dummyResponse);
        const dispatched = [];
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            getArticleById, requestObject).toPromise();
        expect(dispatched).toEqual([
            actions.setArticleById(dummyResponse.payload.response.content),
            actions.setIsLoading(false)
        ]);
    });

    it("should call getDefaultNews and dispatch success action", async () => {
        const dummyResponse = {
            "success": true,
            "payload": {
                "response": {
                    "results": []
                }
            }
        };
        const requestObject = {
            "pageSize": 10,
            "sortValue": "newest",
            "searchText": "USA"
        };
        api.getData.mockImplementation(() => dummyResponse);
        const dispatched = [];
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            getSearchResults, requestObject).toPromise();
        expect(dispatched).toEqual([
            actions.setSearchResults(dummyResponse.payload.response.results),
            actions.setIsLoading(false)
        ]);
    });
})

describe("newsSaga()", () => {
    const gen = newsSaga();

    it("Should fire on GET_DEFAULT_NEWS", () => {
        const expected = takeEvery(types.GET_DEFAULT_NEWS, actions.getDefaultNews);
        const actual = gen.next().value;
        expect(JSON.stringify(actual)).toStrictEqual(JSON.stringify(expected));
    });

    it("Should fire on GET_ARTICLE_BY_ID", () => {
        const expected = takeEvery(types.GET_ARTICLE_BY_ID, actions.getArticleById);
        const actual = gen.next().value;
        expect(JSON.stringify(actual)).toStrictEqual(JSON.stringify(expected));
    });

    it("Should fire on GET_SEARCH_RESULTS", () => {
        const expected = takeEvery(types.GET_SEARCH_RESULTS, actions.getSearchResults);
        const actual = gen.next().value;
        expect(JSON.stringify(actual)).toStrictEqual(JSON.stringify(expected));
    });
});

describe("Search Saga", () => {
    api.getData = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should call getDefaultNews and dispatch failed action", async () => {
        const dummyResponse = {
            "success": false,
            "payload": {
                "response": {
                    "results": []
                }
            }
        };
        const requestObject = {
            "pageSize": 10,
            "sortValue": "newest"
        };
        api.getData.mockImplementation(() => dummyResponse);
        const dispatched = [];
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            getDefaultNews, requestObject).toPromise();
        expect(dispatched).toEqual([
            actions.setDefaultNews([]),
            actions.setIsLoading(false)
        ]);
    });

    it("should call getArticleById and dispatch failed action", async () => {
        const dummyResponse = {
            "success": false,
            "payload": {
                "response": {
                    "content": null
                }
            }
        };
        const requestObject = {
            "apiUrl": "test"
        };
        api.getData.mockImplementation(() => dummyResponse);
        const dispatched = [];
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            getArticleById, requestObject).toPromise();
        expect(dispatched).toEqual([
            actions.setArticleById(null),
            actions.setIsLoading(false)
        ]);
    });

    it("should call getDefaultNews and dispatch failed action", async () => {
        const dummyResponse = {
            "success": false,
            "payload": {
                "response": {
                    "results": []
                }
            }
        };
        const requestObject = {
            "pageSize": 10,
            "sortValue": "newest",
            "searchText": "USA"
        };
        api.getData.mockImplementation(() => dummyResponse);
        const dispatched = [];
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action)
            },
            getSearchResults, requestObject).toPromise();
        expect(dispatched).toEqual([
            actions.setSearchResults([]),
            actions.setIsLoading(false)
        ]);
    });
})