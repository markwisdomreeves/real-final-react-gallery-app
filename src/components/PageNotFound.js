
import React, { Fragment } from 'react';


const pageNotFound = ({ location }) => {
    return(
        <Fragment>
        <h3 className="no-result-text">404 error - No match Found for 
           <code>{location.pathname}</code></h3>
        <a href="/"><h3>Go back to Home Page</h3></a>
       </Fragment>
    );
}

   
export default pageNotFound;

