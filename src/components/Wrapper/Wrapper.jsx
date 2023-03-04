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
      {
        path: "/about",
        element: <div>about</div>
      },
      { 
        path: "/artisles", 
        element: <div>articles</div>
      },
      { 
        path: "/artisles:id", 
        element: <div>articles:id</div> 
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