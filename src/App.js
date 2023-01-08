import "./App.css";

import { Routes, Route } from 'react-router';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Homepage from "./pages/Home.page";
import Moviepage from "./pages/Movie.page"; 
import Playpage from "./pages/Play.page";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "8bca6abd1ce2af55b06237f44415c4f5";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movie/:id" element={<Moviepage />} /> 
      <Route path="/plays" element={<Playpage />} />
    </Routes>
  );
  
  
}

export default App;
