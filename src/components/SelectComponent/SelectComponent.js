import React from "react";
import { SelectBlock } from "./SelectStyled";

const SelectComponent = () => {
    return (
        <SelectBlock>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="relevance">Popular First</option>
        </SelectBlock>
    )
}

export default SelectComponent;