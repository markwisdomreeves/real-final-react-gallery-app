import React from 'react';


const NoResultFound = () => (
    <div className="no-result-found">
        <h2 className="no-result-text">No Result Found</h2>
        <p className="no-result-text">Your search did not return any results. Please try again OR - </p>
        <a href="/"><h3>Go back to Home Page</h3></a>
    </div>  
);

export default NoResultFound;
