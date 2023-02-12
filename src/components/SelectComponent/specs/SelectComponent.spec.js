import React from "react";
import { shallow } from "enzyme";
import SelectComponent from "../SelectComponent";

describe("ArticleDetail component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <SelectComponent />
        );
    });

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});