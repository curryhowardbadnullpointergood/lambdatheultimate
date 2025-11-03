import { useState } from 'react'
// can use it for global configs
// import './App.css'

import Home from "./pages/home/Home"
import Sidebar from "./components/sidebar/Sidebar";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Sidebar />
      <main>
        <Home />
      </main>
    </div>
  );

}

export default App
