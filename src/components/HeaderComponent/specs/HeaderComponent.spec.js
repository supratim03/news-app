import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import HeaderComponent from "../HeaderComponent";
import { ImageBlock, SearchIcon, SearchInput } from "../HeaderStyled";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

describe("Header component", () => {
    let wrapper;

    const onFocus = jest.fn();
    const handleChange = jest.fn();
    beforeEach(() => {
        wrapper = mount(
            <MemoryRouter>
                <HeaderComponent
                    showSearch={false}
                    onFocus={onFocus}
                />
            </MemoryRouter>

        );
    });

    it('click on logo', () => {
        const element = wrapper.find(ImageBlock);
        element.simulate('click');
        setTimeout(() => {
            expect(mockedUsedNavigate).toHaveBeenCalled()
        }, 0)
    })

    it('click on search', () => {
        const element = wrapper.find(SearchIcon);
        element.simulate('click');
        setTimeout(() => {
            expect(onFocus).toHaveBeenCalled()
        }, 0)
    })
});

describe("Header component with search focus", () => {
    let wrapper;

    const onFocus = jest.fn();
    const handleChange = jest.fn();
    beforeEach(() => {
        wrapper = mount(
            <MemoryRouter>
                <HeaderComponent
                    showSearch={true}
                    onFocus={onFocus}
                />
            </MemoryRouter>

        );
    });

    it("trigger onchange event", () => {
        let element = wrapper.find(SearchInput);
        element.simulate("change", { target: { value: 'test' } });
        setTimeout(() => {
            expect(handleChange).toHaveBeenCalledWith({ target: { value: 'test' } });
        }, 0)
    });

    it('trigger method onkeyPress event', () => {
        let element = wrapper.find(SearchInput);
        element.simulate("keypress", { charCode: 13 });
        setTimeout(() => {
            expect(mockedUsedNavigate).toHaveBeenCalled();
        }, 0)
    })

    it('trigger method onBlur event', () => {
        let element = wrapper.find(SearchInput);
        element.simulate('blur');
        setTimeout(() => {
            expect(onFocus).toHaveBeenCalled();
        }, 0)
    })
})