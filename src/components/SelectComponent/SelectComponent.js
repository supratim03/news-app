import React from "react";
import PropTypes from 'prop-types' 
import { SelectBlock } from "./SelectStyled";

const SelectComponent = ({optionsList, handleFilterRecords}) => {

    const prepareOptions = optionsList.map(opt => {
        return (
            <option value={opt.value}>
                {opt.label}
            </option>
        )
    })

    const handleSelect = ({target : {value}}) => {
        handleFilterRecords(value)
    }
    return (
        <SelectBlock onChange={handleSelect}>
           {prepareOptions}
        </SelectBlock>
    )
}
SelectComponent.propTypes = {
    optionsList: PropTypes.arrayOf(PropTypes.shape).isRequired,
    handleFilterRecords: PropTypes.func.isRequired
}
export default SelectComponent;