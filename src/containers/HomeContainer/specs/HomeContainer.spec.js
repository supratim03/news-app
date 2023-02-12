import React from "react";
import { mount } from "enzyme/build";
import configureStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import HomeContainer from "../HomeContainer";
import { Card } from "../HomeContainerStyled";

// mock useNavigate
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
   useNavigate: () => mockedUsedNavigate
}));

describe("Home container", () => {
    const sagaMiddleWare = createSagaMiddleware();
    const mockStore = configureStore([sagaMiddleWare]);

    const initialState = {
        "news": {
            "defaultNews": [],
            "isLoading": true
        }
    };
    const store = mockStore(initialState);
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <HomeContainer />
                </MemoryRouter>
            </Provider>
        );
    });

    it("render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
})

describe("Home container with laoder", () => {
    const sagaMiddleWare = createSagaMiddleware();
    const mockStore = configureStore([sagaMiddleWare]);

    const initialState = {
        "news": {
            "defaultNews": [
                {
                  "id": "world/live/2023/feb/12/turkey-syria-earthquake-latest-news-updates-death-toll",
                  "type": "liveblog",
                  "sectionId": "world",
                  "sectionName": "World news",
                  "webPublicationDate": "2023-02-12T11:10:40Z",
                  "webTitle": "Turkey-Syria earthquake: death toll passes 28,000 as UN warns it could ‘more than double’ – latest news",
                  "webUrl": "https://www.theguardian.com/world/live/2023/feb/12/turkey-syria-earthquake-latest-news-updates-death-toll",
                  "apiUrl": "https://content.guardianapis.com/world/live/2023/feb/12/turkey-syria-earthquake-latest-news-updates-death-toll",
                  "fields": {
                    "thumbnail": "https://media.guim.co.uk/b051c775f96ce352a176956872189ca4688abb8c/0_544_8256_4954/500.jpg"
                  },
                  "isHosted": false,
                  "pillarId": "pillar/news",
                  "pillarName": "News"
                },
                {
                  "id": "world/live/2023/feb/12/russia-ukraine-war-latest-updates-ukraine-forces-hold-frontline-in-donetsk-kyivs-top-military-commander-says",
                  "type": "liveblog",
                  "sectionId": "world",
                  "sectionName": "World news",
                  "webPublicationDate": "2023-02-12T11:04:33Z",
                  "webTitle": "Russia-Ukraine war live: highest Russian casualties since first week of invasion, UK says; Poland casts doubt over jets to Kyiv",
                  "webUrl": "https://www.theguardian.com/world/live/2023/feb/12/russia-ukraine-war-latest-updates-ukraine-forces-hold-frontline-in-donetsk-kyivs-top-military-commander-says",
                  "apiUrl": "https://content.guardianapis.com/world/live/2023/feb/12/russia-ukraine-war-latest-updates-ukraine-forces-hold-frontline-in-donetsk-kyivs-top-military-commander-says",
                  "fields": {
                    "thumbnail": "https://media.guim.co.uk/07a6fe944698a60be27b4fa4ff48444499b92570/304_527_5435_3261/500.jpg"
                  },
                  "isHosted": false,
                  "pillarId": "pillar/news",
                  "pillarName": "News"
                },
                {
                  "id": "world/2023/feb/12/bbc-steve-rosenberg-russia-editor-ukraine-war-piano-gorbachev-eurovision",
                  "type": "article",
                  "sectionId": "world",
                  "sectionName": "World news",
                  "webPublicationDate": "2023-02-12T09:30:20Z",
                  "webTitle": "The BBC’s Steve Rosenberg: ‘The increasing aggression in Russia worries me – it could get bumpy’",
                  "webUrl": "https://www.theguardian.com/world/2023/feb/12/bbc-steve-rosenberg-russia-editor-ukraine-war-piano-gorbachev-eurovision",
                  "apiUrl": "https://content.guardianapis.com/world/2023/feb/12/bbc-steve-rosenberg-russia-editor-ukraine-war-piano-gorbachev-eurovision",
                  "fields": {
                    "thumbnail": "https://media.guim.co.uk/22309f2ae5c62b09c9490c1bbbd216492f9a1107/262_0_7729_4640/500.jpg"
                  },
                  "isHosted": false,
                  "pillarId": "pillar/news",
                  "pillarName": "News"
                },
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
                    <HomeContainer />
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