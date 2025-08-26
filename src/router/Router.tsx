import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SearchResult from "../pages/SearchResult";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/chracresult/:chracname" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
