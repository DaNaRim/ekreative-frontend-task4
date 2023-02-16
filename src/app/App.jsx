import {Route, Routes} from "react-router";
import PageWrapper from "../common/components/base/PageWrapper/PageWrapper";
import CategoryPage from "../common/pages/CategoryPage/CategoryPage";
import PostPage from "../common/pages/PostPage/PostPage";
import HomePage from "../common/pages/HomePage/HomePage";
import "./App.scss";

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
