import React from "react";
import {Route, Routes} from "react-router";
import PageWrapper from "../common/components/base/PageWrapper/PageWrapper";
import "./App.scss";

const HomePage = React.lazy(() => import("../common/pages/HomePage/HomePage"));
const CategoryPage = React.lazy(() => import("../common/pages/CategoryPage/CategoryPage"));
const PostPage = React.lazy(() => import("../common/pages/PostPage/PostPage"));

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper/>}>
      <Route path="/" index element={<HomePage/>}/>
      <Route path="/category" element={<CategoryPage/>}/>
      <Route path="/posts/:id" element={<PostPage/>}/>
    </Route>
  </Routes>
);

export default App;
