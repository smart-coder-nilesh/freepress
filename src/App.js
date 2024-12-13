import React , {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Footer from "./footer/Footer";
import Headerwithsearch from "./Header/Headerwithsearch";
import TrendingStories from "./Body/Trendingstories";
import Article from "./Body/Article";

const App = () => {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    console.log("mode")
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (

    <div className="container mt-4" style={{ maxWidth: '100%' }}>
      <div className="fixed-header">
        < Headerwithsearch mode={mode} toggleMode ={toggleMode} />
      </div>
      <div style={{width :'100%'}}>
      
      < TrendingStories mode={mode} />
      {/* Categories and Articles */}
      <Article mode={mode} />
      <Footer mode={mode} />
      </div>
    </div>
  );
};

export default App;
