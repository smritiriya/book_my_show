import React, { Component } from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar.Component";

const MovieLayoutHoc = 
  (Component) =>
    ({ ...props }) => {
      return (
        <div>
          <MovieNavbar/>
          <Component {...props} />
          <div>footer</div>
        </div>
      );
    }

export default MovieLayoutHoc;
