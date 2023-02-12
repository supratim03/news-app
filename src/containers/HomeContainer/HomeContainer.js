import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import { getDefaultNews } from "../../store/actions/actions";
import { Container, GridBlock, ContainerHeaderBlock, SelectBlock, CardBlock, GridContainer, Card } from './HomeContainerStyled';
import '../../styles/HomeContainer.css';
import { useNavigate } from "react-router-dom";
import LoaderComponent from "../../components/LoaderComponent/LoaderComponent";

const HomeContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const isLoading = useSelector(state => state.news.isLoading);
    const newsList = useSelector(state => state.news.defaultNews);
    const [showSearch, setShowSearch] = React.useState(false)

    useEffect(() => {
        dispatch(getDefaultNews(10, 'newest'))
    }, [])
    
    const handleArticleById = (id, url) => {
        sessionStorage.setItem('apiUrl', url);
        let value = id.replaceAll('/', '-')
        navigate(`/article/${value}`)
    }

    const prepareNewsGrid = newsList.map((news, index) => {
        let classValue = null;
        if (index >= 5) {
            classValue = `item-card${index} card-row-2`
        } else {
            classValue = `item-card${index}`
        }

        return (
            <Card
                key={news.id}
                style={index === 3 || index === 4 || news.fields?.thumbnail == null ? { backgroundColor: '#2455a1' } : { backgroundImage: "url(" + news.fields?.thumbnail + ")" }}
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

    const detectBodyClick = () => {
        setShowSearch(false)
    }

    const handleOnFocus = (value) => {
        setShowSearch(value)
    }

    return (
        <>
            <HeaderComponent showSearch={showSearch} onFocus={handleOnFocus} />
            <Container onClick={detectBodyClick}>
                <GridBlock>
                    <ContainerHeaderBlock>
                        {'Top Stories'}
                    </ContainerHeaderBlock>
                    <SelectBlock>
                        <SelectComponent />
                    </SelectBlock>
                </GridBlock>
            </Container>
            <CardBlock>
                {!isLoading ? <GridContainer>
                    {prepareNewsGrid}
                </GridContainer> : <LoaderComponent />}
            </CardBlock>
            {!isLoading && <FooterComponent />}
        </>

    )
}

export default HomeContainer;