import {Route, Routes} from "react-router";
import PageWrapper from "../common/components/base/PageWrapper/PageWrapper";
import CategoryPage from "../common/pages/CategoryPage/CategoryPage";
import HomePage from "../common/pages/HomePage/HomePage";
import "./App.scss";

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper/>}>
      <Route path="/" index element={<HomePage/>}/>
      <Route path="/category" element={<CategoryPage/>}/>
    </Route>
  </Routes>
);

export default App;
