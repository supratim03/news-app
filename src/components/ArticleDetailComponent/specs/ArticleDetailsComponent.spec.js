import React from "react";
import { shallow } from "enzyme";
import ArticleDetailComponent from "../ArticleDetailComponent";
import {articleDetail} from '../../../testData/testData'

describe("ArticleDetail component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <ArticleDetailComponent 
                articleDetail={null}
            />
        );
    });

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});

describe("ArticleDetail component with value", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <ArticleDetailComponent 
                articleDetail={articleDetail}
            />
        );
    });

    it("renders correctly with data", () => {
        expect(wrapper).toMatchSnapshot();
    });
});