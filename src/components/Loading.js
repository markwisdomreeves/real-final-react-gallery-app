import React from 'react';
import Loader from 'react-loader-spinner';


class Loading extends React.Component {
   
    render() {
     return(
      <Loader
         type="ThreeDots"
         color="#00BFFF"
         height={70}
         width={70}
         timeout={500000}

      />
     );
    }
 }


export default Loading;