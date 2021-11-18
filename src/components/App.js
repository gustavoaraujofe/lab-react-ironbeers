import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import NavBar from './NavBar';
import AllBeers from './AllBeers';
import DetailsBeer from './DetailsBeer';
import { Route, Routes } from 'react-router';
import Random from './Random';
import NewBeer from './NewBeer';
import {useState} from 'react'

function App() {
  const [navBar, setNavBar] = useState('')
 

  return (
    <div>
      {navBar ? <NavBar setNavBar={setNavBar} /> : null}
       
      <Routes>
        <Route path="/" element={<Home navBar={navBar} setNavBar={setNavBar} />} />
        <Route path="all-beers" element={<AllBeers setNavBar={setNavBar} />} />
        <Route path=":beer" element={<DetailsBeer setNavBar={setNavBar} />} />
        <Route path="random" element={<Random setNavBar={setNavBar} />} />
        <Route path="newbeer" element={<NewBeer setNavBar={setNavBar} />} />
      </Routes>
    </div>
  );
}

export default App;
