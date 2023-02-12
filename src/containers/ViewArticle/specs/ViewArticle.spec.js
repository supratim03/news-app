import React from "react";
import { mount } from "enzyme/build";
import configureStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ViewArticle from "../ViewArticle";
import { article } from "../../../testData/testData";

// mock useNavigate
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
   useNavigate: () => mockedUsedNavigate
}));

describe("view article container", () => {
    const sagaMiddleWare = createSagaMiddleware();
    const mockStore = configureStore([sagaMiddleWare]);

    const initialState = {
        "news": {
            "articleById": null,
            "isLoading": true
        }
    };
    const store = mockStore(initialState);
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <ViewArticle />
                </MemoryRouter>
            </Provider>
        );
    });

    it("render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
})

describe("view article container", () => {
    const sagaMiddleWare = createSagaMiddleware();
    const mockStore = configureStore([sagaMiddleWare]);

    const initialState = {
        "news": {
            "articleById": article,
            "isLoading": false
        }
    };
    const store = mockStore(initialState);
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <ViewArticle />
                </MemoryRouter>
            </Provider>
        );
    });

    it("render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
})