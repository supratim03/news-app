import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import { getDefaultNews, setIsLoading } from "../../store/actions/actions";
import { Container, GridBlock, ContainerHeaderBlock, SelectBlock, CardBlock, GridContainer, Card, TopCardBlock, CatHeaderBlock } from './HomeContainerStyled';
import '../../styles/HomeContainer.css';
import { useNavigate } from "react-router-dom";
import LoaderComponent from "../../components/LoaderComponent/LoaderComponent";
import { sortDropdownValues } from "../../constants/constant";

const HomeContainer = () => {
    let mediaMatch = window.matchMedia('(max-width: 768px)');
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const isLoading = useSelector(state => state.news.isLoading);
    const newsList = useSelector(state => state.news.defaultNews);
    const [showSearch, setShowSearch] = React.useState(false)

    useEffect(() => {
        dispatch(setIsLoading(true))
        dispatch(getDefaultNews(8, 'newest'))
    }, [])

    const handleArticleById = (id, url) => {
        sessionStorage.setItem('apiUrl', url);
        let value = id.replaceAll('/', '-')
        navigate(`/article/${value}`)
    }

    const prepareTopNewsGrid = newsList.length > 0 && newsList[0].value.map((news, index) => {
        let classValue = null;
        if (index >= 5) {
            classValue = `item-card${index} card-row-2`
        } else {
            classValue = `item-card${index}`
        }

        return (
            <Card
                key={news.id}
                style={index === 3 || index === 4 || news.fields?.thumbnail == null ? { backgroundColor: '#2455a1' } : { background: "url(" + news.fields?.thumbnail + ") no-repeat center center" }}
                className={classValue}
                onClick={() => handleArticleById(news.id, news.apiUrl)}
            >
                {index === 3 || index === 4 ? '' : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}><div>
                    <div className={news.fields?.thumbnail == null ? "blank-img" : ""}></div>
                </div></div>}
                <div className={index === 3 || index === 4 ? "card-container" : "card-desc"}>
                    <div style={{ padding: '10px' }}>
                        <span className="title">
                            {news.webTitle}
                        </span>
                    </div>

                </div>

            </Card>

        )
    })

    const prepareCatNewsBlock = newsList.length > 1 && newsList[1].value.map((card, index) => {
        return (
            <Card 
                key={card.id}
                style={card.fields?.thumbnail == null ? { backgroundColor: '#2455a1' } : { background: "url(" + card.fields?.thumbnail + ") no-repeat center center" }} 
                className="search-card card-row-2" 
                onClick={(e) => handleArticleById(card.id, card.apiUrl)}
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

    const detectBodyClick = () => {
        setShowSearch(false)
    }

    const handleOnFocus = (value) => {
        setShowSearch(value)
    }

    const handleFilterRecords = value => {
        dispatch(getDefaultNews(10, value))
    }
    return (
        <>
            <HeaderComponent showSearch={showSearch} onFocus={handleOnFocus} />
            <Container onClick={detectBodyClick}>
                <GridBlock>
                    <ContainerHeaderBlock>
                        Top Stories
                    </ContainerHeaderBlock>
                    <SelectBlock>
                        <SelectComponent optionsList={sortDropdownValues} handleFilterRecords={handleFilterRecords}/>
                    </SelectBlock>
                </GridBlock>
            </Container>
            <TopCardBlock>
                {!isLoading ? 
                <GridContainer>
                    {prepareTopNewsGrid}
                </GridContainer> : <LoaderComponent />}
            </TopCardBlock>
            {!isLoading && newsList.length > 1 && <CatHeaderBlock>
                <div>{newsList[1].key}</div>
            </CatHeaderBlock>}
            {!isLoading && newsList.length > 1 && 
            <CardBlock><GridContainer>
                    {prepareCatNewsBlock}
                </GridContainer></CardBlock>}
            {!isLoading && <FooterComponent />}
        </>

    )
}

export default HomeContainer;