import React from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import MovieContainer from './components/MovieContainer';


function App() {
  return (
     <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route exact path="/movie/:id" element={<MovieContainer/>} />
           </Routes>
    </BrowserRouter> 
  )
}

export default App
