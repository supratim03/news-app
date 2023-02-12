import React from "react";
import { shallow } from "enzyme";
import FooterComponent from "../FooterComponent";

describe("footer component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <FooterComponent />
        );
    });

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});