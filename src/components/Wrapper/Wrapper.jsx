import React from "react";
import {
    BrowserRouter as Router,
    useRoutes,
  } from "react-router-dom";

import App from "../../pages/HomePage/App";
import ArtistPage from "../../pages/ArtistPage/ArtistPage";

const Element = () => {
    let element = useRoutes([
      {
        path: "/",
        element: <App />,
      },
      { 
        path: ":id", 
        element: <ArtistPage /> 
      }, 
    ]);
  
    return element;
  }

const Wrapper = () => {
    return (
        <Router>
          <Element/>
        </Router>
    );
}

export default Wrapper;