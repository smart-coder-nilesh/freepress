import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Footer from "./Footer";
import Headerwithsearch from "./Body/Headerwithsearch";
import TrendingStories from "./Body/Trendingstories";
import Article from "./Body/Article";
const App = () => {
  return (

    <div className="container mt-4" style={{maxWidth : '100%'}}>
      < Headerwithsearch />
      <hr className="divider" />
      < TrendingStories />
      {/* Categories and Articles */}
      <Article/ >
      <Footer />
    </div>
  );
};

export default App;
