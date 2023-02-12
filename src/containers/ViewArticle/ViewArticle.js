import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ArticleDetailComponent from "../../components/ArticleDetailComponent/ArticleDetailComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import LoaderComponent from "../../components/LoaderComponent/LoaderComponent";
import { getArticleById, setIsLoading } from "../../store/actions/actions";

const ViewArticle = () => {
    const dispatch = useDispatch();
    const [showSearch, setShowSearch] = React.useState(false);
    const isLoading = useSelector(state => state.news.isLoading)
    const articleDetail = useSelector(state => state.news.articleById);


    useEffect(() => {
        dispatch(setIsLoading(true))
        dispatch(getArticleById(sessionStorage.getItem('apiUrl')));
    }, [])

    const handleOnFocus = (value) => {
        setShowSearch(value)
    }

    return (
        <>
            <HeaderComponent showSearch={showSearch} onFocus={handleOnFocus} />
            {isLoading && <LoaderComponent />}
            {!isLoading && <ArticleDetailComponent articleDetail={articleDetail}/>}
            {!isLoading && <FooterComponent />}
        </>

    )
}

export default ViewArticle;