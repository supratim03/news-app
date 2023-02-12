import styled from "styled-components"

export const Container = styled.div`
    margin-top: 12%;
    margin-left: 100px;
    margin-right: 100px;
    @media (max-width: 768px) {
        margin-top: 35%;
        margin-left: 10px;
        margin-right: 10px;
    }
`;

export const GridBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    width: 100%;
`;

export const ContainerHeaderBlock = styled.span`
    font-weight: bold;
    font-size: 24px;
    color: #000000;
`;

export const SelectBlock = styled.div`
    width: 100%;
    float: right;
    text-align: right;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-gap: 25px;
    /* background-color: #2196F3; */
    padding: 10px;
    width: 100%;
    margin-top: 30px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: minmax(100px, auto);
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr); 
        width: auto;
    }
`;

export const CardBlock = styled.div`
    padding-bottom: 200px;
    min-height: 100vh;
    margin-left: 100px;
    margin-right: 100px;
    @media (max-width: 768px) {
        margin-left: 10px;
        margin-right: 10px;
    }
`;

export const Card = styled.div`
    background-repeat: no-repeat !important;
    background-size: cover !important;
    position: relative;
    cursor: pointer;
`;