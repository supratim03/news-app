import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import LoaderComponent from "../../components/LoaderComponent/LoaderComponent";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import { getSearchResults, setIsLoading } from "../../store/actions/actions";
import { Card, CardBlock, Container, ContainerHeaderBlock, GridBlock, GridContainer, SelectBlock } from "./SearchContainerStyled";
import '../../styles/HomeContainer.css'
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { sortDropdownValues } from "../../constants/constant";

const SearchContainer = () => {
    const { searchVal } = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const searchResults = useSelector(state =>  state.news.searchResults);
    const isLoading = useSelector(state => state.news.isLoading)

    useEffect(() => {
        dispatch(setIsLoading(true))
        dispatch(getSearchResults(searchVal, 10, 'newest'))
    }, [])

    const handleArticleById = (id, url) => {
        sessionStorage.setItem('apiUrl', url);
        let value = id.replaceAll('/', '-')
        navigate(`/article/${value}`)
    }

    const prepareSearchCards = searchResults.map(card => {
        return (
            <Card 
                key={card.id}
                style={card.fields?.thumbnail == null ? { backgroundColor: '#2455a1' } : { backgroundImage: "url(" + card.fields?.thumbnail + ")" }} 
                className="search-card" 
                onClick={(e) => handleArticleById(card.id, card.apiUrl)}
            >
                <div className="no-image">
                    <div className={card.fields?.thumbnail == null ? "blank-img" : ""}></div>
                </div>
                <div className="card-desc">
                    <div style={{ padding: '10px' }}>
                        <span className="title">
                            {card.webTitle}
                        </span>
                    </div>
                </div>
            </Card>
        )
    })

    const handleFilterRecords = value => {
        dispatch(getSearchResults(searchVal, 10, value))
    }

    return (
        <>
            <HeaderComponent />
            <Container>
                <GridBlock>
                    <ContainerHeaderBlock>
                        Search Results
                    </ContainerHeaderBlock>
                    <SelectBlock>
                        <SelectComponent optionsList={sortDropdownValues} handleFilterRecords={handleFilterRecords}/>
                    </SelectBlock>
                </GridBlock>
            </Container>
            <CardBlock>
                {!isLoading ? <GridContainer>
                    {prepareSearchCards}
                </GridContainer> : <LoaderComponent />}
            </CardBlock>
            {!isLoading && <FooterComponent />}
        </>
    )
}

export default SearchContainer;