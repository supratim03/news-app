import React, { useEffect, useState } from "react";
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
import InfiniteScroll from "react-infinite-scroll-component";

const SearchContainer = () => {
    const { searchVal } = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const searchResults = useSelector(state => state.news.searchResults);
    const isLoading = useSelector(state => state.news.isLoading);
    const [pageSize, setPageSize] = useState(15);
    const [sortByValue, setSortByValue] = useState('newest')

    useEffect(() => {
        dispatch(setIsLoading(true))
        dispatch(getSearchResults(searchVal, pageSize, sortByValue))
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
                style={card.fields?.thumbnail == null ? { backgroundColor: '#2455a1' } : { background: "url(" + card.fields?.thumbnail + ") no-repeat center center" }}
                className="search-card card-row-2"
                onClick={() => handleArticleById(card.id, card.apiUrl)}
            >
                <div className="no-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
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
        setSortByValue(value)
        dispatch(getSearchResults(searchVal, 15, value))
    }

    const fetchNextRecords = () => {
        const page_size = pageSize + 15;
        setPageSize(pageSize + 15);
        dispatch(getSearchResults(searchVal, page_size, sortByValue));
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
                        <SelectComponent optionsList={sortDropdownValues} handleFilterRecords={handleFilterRecords} />
                    </SelectBlock>
                </GridBlock>
            </Container>
            <CardBlock>
                {!isLoading ?
                    <InfiniteScroll
                        dataLength={searchResults.length}
                        next={fetchNextRecords}
                        hasMore={true}
                        loader={<h4 style={{ display: 'flex', justifyContent: 'center' }}><LoaderComponent /></h4>}
                        style={{ overflowX: 'hidden' }}
                    >
                        <GridContainer>
                            {prepareSearchCards}
                        </GridContainer>
                    </InfiniteScroll>
                    : <LoaderComponent />}
            </CardBlock>
            {!isLoading && <FooterComponent />}
        </>
    )
}

export default SearchContainer; 