import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './website/Home';
import SecondHome from './website/SecondHome';

const App = () => {
  document.title = "JH's Portfolio"; 
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SecondHome" element={<SecondHome />} />
        </Routes>
      </Router>
  );
};

export default App;
