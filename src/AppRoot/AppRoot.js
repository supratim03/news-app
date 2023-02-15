import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
const HomeContainer = React.lazy(() => import("../containers/HomeContainer/HomeContainer"));
const SearchContainer = React.lazy(() => import("../containers/SearchContainer/SearchContainer"));
const ViewArticle = React.lazy(() => import("../containers/ViewArticle/ViewArticle"));

const AppRoot = () => {
    return (
        <>
            <Suspense fallback={LoaderComponent}>
                <Routes>
                    <Route path="/" element={<HomeContainer />} />
                    <Route path="/article/:id" element={<ViewArticle />} />
                    <Route path="/search/:searchVal" element={<SearchContainer />} />
                </Routes>
            </Suspense>
        </>
    )
}

export default AppRoot;