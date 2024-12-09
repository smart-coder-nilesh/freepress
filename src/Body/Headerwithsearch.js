import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assests/logo.png";
import "./style.css";

const Headerwithsearch = () => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (query.length > 0) {
            loadSuggestions(query);
        } else {
            clearSuggestions();
        }
    }, [query]);

    const loadSuggestions = (query) => {
        const news = ["abc", "efg", "hik", "jkl", "mno"];
        const filteredSuggestions = news.filter(s => s.toLowerCase().includes(query.toLowerCase()));
        setSuggestions(filteredSuggestions);
    };

    const clearSuggestions = () => {
        setSuggestions([]);
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion);
        clearSuggestions();

    };

    return (
        <header className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex align-items-center">
                <img src={logo} alt="FreePress Logo" className="me-2" style={{ height: "70px" }} />
                <div className="logo fw-bold fs-4"></div>
            </div>

            <nav>
                <a href="https://www.cricbuzz.com/" className="me-3 text-decoration-none text-dark" target="_blank" rel="noreferrer">
                    Sports
                </a>
                <a href="https://timesofindia.indiatimes.com/business" className="me-3 text-decoration-none text-dark" target="_blank" rel="noreferrer">
                    Business
                </a>
                <a href="https://timesofindia.indiatimes.com/health" className="me-3 text-decoration-none text-dark " target="_blank" rel="noreferrer">
                    Health
                </a>
                <a href="https://timesofindia.indiatimes.com/health" className="me-3 text-decoration-none text-dark " target="_blank" rel="noreferrer">
                    Technology
                </a>
                <a href="https://timesofindia.indiatimes.com/health" className="me-3 text-decoration-none text-dark " target="_blank" rel="noreferrer">
                    Finance
                </a>
            </nav>
            <div className = 'align-items-center'style={{display: "flex"}}>
                
            <div className="search-container position-relative">
                <input
                    type="text"
                    id="search-bar"
                    className={`form-control ${suggestions.length > 0 ? "has-suggestions" : ""}`}
                    placeholder="Search for articles and news"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {suggestions.length > 0 && (
                    <div id="suggestions">
                        {suggestions.map((suggestion, index) => (
                            <div
                                key={index}
                                className="suggestion"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </div>
                        ))}
                    </div>
                )}
                
            </div>
            <div>
                <button className="btn btn-primary mx-2" style={{width: 'fit-content'}}>Search</button>
            </div>
            
            </div>
        </header>
    );
};

export default Headerwithsearch;
