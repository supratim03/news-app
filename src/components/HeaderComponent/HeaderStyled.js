import styled from "styled-components"

export const HeaderBlock = styled.div`
    overflow: hidden;
    background-color: #0d3779;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    z-index: 1;
`;

export const ElementBlock = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    @media (max-width: 768px) {
        margin-left: 10px;
        margin-right: 10px;
    }
`;

export const ImageBlock = styled.image`
    content: url(${(props=> props.imgUrl)});
    padding-top: 25px;
    cursor: pointer;
`;

export const SearchContainer = styled.div`
    float: right;
    width: 100px;
    text-align: center;
    border-bottom: 5px solid #ffffff;
    margin-top: 75px;
`;

export const SearchIcon = styled.image`
    content: url(${(props=> props.imgUrl)});;
    cusror: pointer
`;

export const SearchInputBlock = styled.div`
    float: right;
    width: 250px;
    margin-top: 60px;
    @media (max-width: 768px) {
        width: 150px !important;
    }
`;

export const SearchInput = styled.input`
    width: -webkit-fill-available;
    /* padding-top: 12px;
    padding-right: 20px;
    padding-left: 20px; */
    padding: 12px 20px;
    border-top: #2455a1;
    border-right: #2455a1;
    border-left: #2455a1;
    border-bottom: 5px solid #ffffff;
    background-color: #2455a1;
    background-image: url('../files/search.svg');
    background-repeat: no-repeat;
    background-position: 90%;
    color: #ffffff;
`;