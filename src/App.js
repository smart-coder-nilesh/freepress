import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Footer from "./Footer";
import Headerwithsearch from "./Body/Headerwithsearch";
import TrendingStories from "./Body/Trendingstories";
import Article from "./Body/Article";
const App = () => {
  return (

    <div className="container mt-4" style={{ maxWidth: '100%' }}>
      <div className="fixed-header">
        < Headerwithsearch />
        <hr className="divider" />
      </div>
      <div>

      < TrendingStories />
      {/* Categories and Articles */}
      <Article />
      <Footer />
      </div>
    </div>
  );
};

export default App;
