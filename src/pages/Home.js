import React from 'react';
import './HomeStyles.css'; // Import CSS file for Home styles

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>JudicialSense: Deep understanding of Legal Documents</h1>
        <p>
        The platform aims to automate the extraction of key information, identify potential risks, 
        and enhance the understanding of complex clauses, thereby reducing the time and effort required 
        for manual document review.
        </p>
        <button className="home-btn">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
