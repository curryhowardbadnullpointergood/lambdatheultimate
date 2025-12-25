import { useState } from 'react'
// can use it for global configs
import './App.css'
// routing 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home/Home"
import Sidebar from "./components/sidebar/Sidebar";
import About from "./pages/about/About"
import Projects from "./pages/projects/Projects"
import Blog from "./pages/blog/Blog"

function App() {

  return (

   <BrowserRouter>
      <div className="appLayout">
        <Sidebar />
        <main className="pageContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );

}

export default App
