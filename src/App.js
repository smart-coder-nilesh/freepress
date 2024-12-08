import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Footer from "./Footer";
import Headerwithsearch from "./Body/Headerwithsearch";
import TrendingStories from "./Body/Trendingstories";

const App = () => {
  return (

    <div className="container mt-4" style={{maxWidth : '100%'}}>
      < Headerwithsearch />
      <hr className="divider" />
      < TrendingStories />

      {/* Categories and Articles */}
      <section>
        <h2 className="text-center mb-4">Categories and Articles</h2>
        <div className="row">
          {[
            {
              title: "City Architecture",
              description:
                "Explore the latest trends in urban architecture.",
              image: "https://picsum.photos/600/600?random=4",
            },
            {
              title: "Home Decor Tips",
              description:
                "Discover how to create a warm and inviting home.",
              image: "https://picsum.photos/600/600?random=5",
            },
            {
              title: "Adventure Awaits",
              description:
                "Join our adventure club for thrilling experiences.",
              image: "https://picsum.photos/600/600?random=6",
            },
          ].map((category, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img
                  src={category.image}
                  className="card-img-top"
                  alt={category.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{category.title}</h5>
                  <p className="card-text">{category.description}</p>
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
