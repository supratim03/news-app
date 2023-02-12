import * as actionTypes from "../actionsTypes/types";
import * as newsActions from "../actions/actions";
import { takeEvery, put, call, all} from "redux-saga/effects";
import * as api from "../../api/apiHelper";

export function* getDefaultNews({ pageSize, sortValue }) {
    const api_key = 'd26053c3-44aa-4498-a609-49701712ed54'
	const url = `https://content.guardianapis.com/search?api-key=${api_key}&show-fields=thumbnail&page-size=${pageSize}&order-by=${sortValue}&section=news`;
	const {success, payload} = yield call(api.getData, url);
	if(success) {
		yield all([
			put(newsActions.setDefaultNews(payload.response.results)),
			put(newsActions.setIsLoading(false))
		]);
	} else {
		yield all([
			put(newsActions.setDefaultNews([])),
			put(newsActions.setIsLoading(false))
		]);
	}
}


export function* getArticleById({ apiUrl }) {
    const api_key = 'd26053c3-44aa-4498-a609-49701712ed54'
	const url = `${apiUrl}?api-key=${api_key}&show-fields=thumbnai,headline,thumbnail&show-blocks=all`;
	const {success, payload} = yield call(api.getData, url);
	if(success) {
		yield all([
			put(newsActions.setArticleById(payload?.response?.content)),
			put(newsActions.setIsLoading(false))
		]);
	} else {
		yield all([
			put(newsActions.setArticleById(null)),
			put(newsActions.setIsLoading(false))
		]);
	}
}

export function* getSearchResults({searchText, pageSize, sortValue }) {
    const api_key = 'd26053c3-44aa-4498-a609-49701712ed54'
	const url = `https://content.guardianapis.com/search?q=${searchText}&api-key=${api_key}&show-fields=thumbnail&page-size=${pageSize}&order-by=${sortValue}`;
	const {success, payload} = yield call(api.getData, url);
	if(success) {
		yield all([
			put(newsActions.setSearchResults(payload.response.results)),
			put(newsActions.setIsLoading(false))
		]);
	} else {
		yield all([
			put(newsActions.setSearchResults([])),
			put(newsActions.setIsLoading(false))
		]);
	}
}

function* newsSaga() {
	yield takeEvery(actionTypes.GET_DEFAULT_NEWS, getDefaultNews);
    yield takeEvery(actionTypes.GET_ARTICLE_BY_ID, getArticleById);
	yield takeEvery(actionTypes.GET_SEARCH_RESULTS, getSearchResults);
}

export default newsSaga;