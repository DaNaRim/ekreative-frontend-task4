import {Route, Routes} from "react-router";
import PageWrapper from "../common/components/base/PageWrapper/PageWrapper";
import HomePage from "../common/pages/HomePage/HomePage";
import "./App.scss";

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper/>}>
      <Route path="/:page?" index element={<HomePage/>}/>

    </Route>
  </Routes>
);

export default App;
