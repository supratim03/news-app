import styled from 'styled-components'

export const ArticleContainer = styled.div`
    display: grid;
    margin-top: 12%;
    margin-left: 100px;
    margin-right: 100px;
    @media (max-width: 768px) {
        margin-top: 35%;
        margin-left: 10px;
        margin-right: 10px;
        grid-template-columns: 100%;
    }
`;

export const PublicationDateBlock = styled.div`
    padding-top: 20px
`;

export const ArticleBlock = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    grid-gap: 20px;
    padding-top: 20px;
    @media (max-width: 768px) {
        grid-template-columns: 100%;
        grid-row-gap: 50px;
        grid-gap: 0px;
    }
`;

export const Title = styled.span`
    font-weight: bold;
    font-size: 36px;
    @media (max-width: 768px) {
        grid-template-columns: 100%;
        font-weight: bold;
        font-size: 24px;
    }
`;

export const ArticleBody = styled.div`
    padding-top: 20px;
    padding-bottom: 200px;
`;

export const BodyBlock = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    grid-gap: 20px;
    min-height: 100vh;
    @media (max-width: 768px) {
        grid-template-columns: 100%;
        grid-row-gap: 50px;
        grid-gap: 0px;
    }
`;

export const HeadlineBlock = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    grid-gap: 20px;
    padding-top: 20px;
    @media (max-width: 768px) {
        grid-template-columns: 100%;
        grid-row-gap: 50px;
        grid-gap: 0px;
    }
`;

export const Headline = styled.span`
    font-size: 20px;
    font-weight: 700;
    @media (max-width: 768px) {
        font-weight: 700;
        font-size: 16px;
    }
`;

export const Thumbnail = styled.div`
    background-image: url(${(props=> props.imgUrl)});
    height: 350px;
    width: auto;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 768px) {
        grid-column-start: 1;
        grid-row-start: 1;
    }
`;

export const TextBlock = styled.div`
    @media (max-width: 768px) {
        grid-column-start: 1;
        grid-row-start: 2;
    }
`;