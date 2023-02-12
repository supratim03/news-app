import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer/HomeContainer";
import SearchContainer from "../containers/SearchContainer/SearchContainer";
import ViewArticle from "../containers/ViewArticle/ViewArticle";

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