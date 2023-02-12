import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootSaga from "./sagas/rootSaga";
import rootReducer from "./reducers/rootReducer";

//create saga middleware
const sagaMiddleWare = createSagaMiddleware();

//Mounting on the store
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleWare, logger)
});

sagaMiddleWare.run(rootSaga);

export default store;