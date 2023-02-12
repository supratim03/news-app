import React from "react";
import { shallow } from "enzyme";
import SelectComponent from "../SelectComponent";
import { sortDropdownValues } from "../../../constants/constant";

describe("ArticleDetail component", () => {
    let wrapper;

    const handleFilterRecords = jest.fn()
    beforeEach(() => {
        wrapper = shallow(
            <SelectComponent 
                optionsList={sortDropdownValues}
                handleFilterRecords={handleFilterRecords}
            />
        );
    });

    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});