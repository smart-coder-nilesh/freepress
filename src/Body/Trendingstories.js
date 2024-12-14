import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css"
const TrendingStories = () => {
  const stories = [
    {
      title: "Urban Trends",
      description: "Read about the latest urban development trends shaping cities worldwide.",
      image: "https://loremflickr.com/600/600/urban",
    },
    {
      title: "Island Escape",
      description: "Discover hidden gems in island getaways and plan your next escape.",
      image: "https://picsum.photos/600/600?random=2",
    },
    {
      title: "Music Festivals",
      description: "Explore the most popular music festivals happening this year.",
      image: "https://loremflickr.com/600/600/nature",
    },
    {
      title: "Organic Living",
      description: "Learn about the health benefits of incorporating organic produce into your diet.",
      image: "https://picsum.photos/600/600?random=3",
    },
  ];

  return (
    <section className="mb-5" style={{ marginTop : '95px'}}>
      <h2 className="text-center mb-4">Trending Stories</h2>
      <div className="row">
        {stories.map((story, index) => (
          <div className="col-md-6 col-lg-3 mb-4" key={index}>
            <div className="card">
              <img src={story.image} className="card-img-top" alt={story.title} />
              <div className="card-body">
                <h5 className="card-title">{story.title}</h5>
                <p className="card-text">{story.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingStories;
