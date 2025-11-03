import { useState } from 'react'
// can use it for global configs
import './App.css'

import Home from "./pages/home/Home"
import Sidebar from "./components/sidebar/Sidebar";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="appLayout">
      <Sidebar />
      <main className="pageContent">
        <Home />
      </main>
    </div>
  );

}

export default App
