import logo from './logo.svg';
import './App.css';
import React from 'react';
import "./index.css"
import {Routes, Route} from "react-router-dom"
import Home from './Route/Home';
import About from './Route/About';
import Contact from './Route/Contact';
import Project from './Route/Project';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about'element={<About/>} />
        <Route path='/contact'element={<Contact/>} />
        <Route path='/project'element={<Project/>} />
      </Routes>     
    </>
  );
}
