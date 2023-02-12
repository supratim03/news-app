import React, { useState } from "react";
import PropTypes from 'prop-types' 
import {
    HeaderBlock, ElementBlock, ImageBlock,
    SearchContainer, SearchInput,
    SearchIcon, SearchInputBlock
} from './HeaderStyled';
import { useNavigate } from "react-router-dom";

const HeaderComponent = ({showSearch, onFocus}) => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState(null)

    const handleShowSearch = () => {
        onFocus(!showSearch)
    }

    const detectBodyClick = () => {
        onFocus(false);
    }

    const redirectToHome = () => {
        navigate('/')
    }

    const handleChange = e => {
        const value = e.target.value;
        setSearchValue(value);
    }

    const handleKeyPress = (e) => {
        if(e.charCode === 13) {
            navigate(`/search/${searchValue}`)
        }
    }
    return (
        <HeaderBlock>
            <ElementBlock>
                <ImageBlock imgUrl={window.location.origin + "/Logo-white.png"} onClick={redirectToHome}/>
                {!showSearch ? <SearchContainer>
                    <SearchIcon imgUrl={window.location.origin + "/search.svg"} onClick={handleShowSearch}/>
                </SearchContainer> :
                <SearchInputBlock>
                    <SearchInput
                        placeholder="Search all news"
                        onBlur={detectBodyClick}
                        onChange={handleChange}
                        onKeyPress={(e) => handleKeyPress(e)}
                    />
                </SearchInputBlock>}
            </ElementBlock>
        </HeaderBlock>
    )
}

HeaderComponent.propTypes = {
    showSearch: PropTypes.bool.isRequired,
    onFocus: PropTypes.func.isRequired
}

export default HeaderComponent;