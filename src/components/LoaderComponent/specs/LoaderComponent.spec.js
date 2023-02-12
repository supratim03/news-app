import React from "react";
import { shallow } from "enzyme";
import LoaderComponent from "../LoaderComponent";

describe("ArticleDetail component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <LoaderComponent />
        );
    });

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});