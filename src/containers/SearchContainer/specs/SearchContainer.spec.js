import React from "react";
import { mount } from "enzyme/build";
import configureStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import SearchContainer from "../SearchContainer";
import { Card } from "../SearchContainerStyled";

// mock useNavigate
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
   useNavigate: () => mockedUsedNavigate
}));

describe("Search container", () => {
    const sagaMiddleWare = createSagaMiddleware();
    const mockStore = configureStore([sagaMiddleWare]);

    const initialState = {
        "news": {
            "searchResults": [],
            "isLoading": true
        }
    };
    const store = mockStore(initialState);
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <SearchContainer />
                </MemoryRouter>
            </Provider>
        );
    });

    it("render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
})

describe("Search container with value", () => {
    const sagaMiddleWare = createSagaMiddleware();
    const mockStore = configureStore([sagaMiddleWare]);

    const initialState = {
        "news": {
            "searchResults": [
                {
                  "id": "sport/2023/feb/12/gimmicky-ollie-robinson-grumbles-pink-cricket-ball-cyclone-gabrielle-england-new-zealand",
                  "type": "article",
                  "sectionId": "sport",
                  "sectionName": "Sport",
                  "webPublicationDate": "2023-02-12T09:09:25Z",
                  "webTitle": "‘Gimmicky’: Robinson grumbles at pink ball as cyclone rumbles in New Zealand",
                  "webUrl": "https://www.theguardian.com/sport/2023/feb/12/gimmicky-ollie-robinson-grumbles-pink-cricket-ball-cyclone-gabrielle-england-new-zealand",
                  "apiUrl": "https://content.guardianapis.com/sport/2023/feb/12/gimmicky-ollie-robinson-grumbles-pink-cricket-ball-cyclone-gabrielle-england-new-zealand",
                  "fields": {
                    "thumbnail": "https://media.guim.co.uk/2d388cedece73b9be32ffa6061466c6a122c7b65/0_81_2045_1226/500.jpg"
                  },
                  "isHosted": false,
                  "pillarId": "pillar/sport",
                  "pillarName": "Sport"
                },
                {
                  "id": "world/2023/feb/12/tear-down-these-walls-or-get-used-to-a-world-of-fear-separation-and-division",
                  "type": "article",
                  "sectionId": "world",
                  "sectionName": "World news",
                  "webPublicationDate": "2023-02-12T09:00:19Z",
                  "webTitle": "Tear down these walls, or get used to a world of fear, separation and division | Simon Tisdall",
                  "webUrl": "https://www.theguardian.com/world/2023/feb/12/tear-down-these-walls-or-get-used-to-a-world-of-fear-separation-and-division",
                  "apiUrl": "https://content.guardianapis.com/world/2023/feb/12/tear-down-these-walls-or-get-used-to-a-world-of-fear-separation-and-division",
                  "fields": {
                    "thumbnail": "https://media.guim.co.uk/0ba5fecff1226de8b2df7895b81d22cc0305e4ff/0_38_4926_2956/500.jpg"
                  },
                  "isHosted": false,
                  "pillarId": "pillar/news",
                  "pillarName": "News"
                }
              ],
            "isLoading": false
        }
    };
    const store = mockStore(initialState);
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <SearchContainer />
                </MemoryRouter>
            </Provider>
        );
    });

    it("render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should navigate on click of card', () => {
        const element = wrapper.find(Card).at(0);
        element.simulate('click', "world/2023/feb/12/bbc-steve-rosenberg-russia-editor-ukraine-war-piano-gorbachev-eurovision", "https://www.theguardian.com/world/2023/feb/12/bbc-steve-rosenberg-russia-editor-ukraine-war-piano-gorbachev-eurovision");
        setTimeout(() => {
            expect(mockedUsedNavigate).toHaveBeenCalled();
        }, 0)
    })
})