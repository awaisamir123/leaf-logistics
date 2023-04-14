import { useEffect, useState } from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNews from "./pages/TopNews";
import Categories from "./pages/Categories";
import NewsDetailComponent from "./pages/NewsDetail";
import Search from "./pages/Search";
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TopNews />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/search" element={<Search />} />
          <Route path="/news-detail" element={<NewsDetailComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
