import React from "react";
import { Routes, Route } from "react-router-dom";
const HomeContainer = React.lazy(() => import("../containers/HomeContainer/HomeContainer"));
const SearchContainer = React.lazy(() => import("../containers/SearchContainer/SearchContainer"));
const ViewArticle = React.lazy(() => import("../containers/ViewArticle/ViewArticle"));

const AppRoot = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/article/:id" element={<ViewArticle />} />
            <Route path="/search/:searchVal" element={<SearchContainer />} />
        </Routes>
    )
}

export default AppRoot;