import styled from "styled-components"

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15%;
    flex-direction: column;
    align-items: center;
`;

export const Loader = styled.div`
    border: 5px solid #0d3779;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 2s linear infinite;
`;