import './App.css'
import Navbar from './components/Navbar.jsx'
import { Route,Routes } from 'react-router'
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Team from "./components/Team.jsx"
import Movinfo from './components/movinfo.jsx'


// export const ws = new WebSocket("ws://localhost:8000");

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Team' element={<Team/>}/>
      <Route path='/movie/:id' element={<Movinfo  />}/>
    </Routes>
    </>
  )
}

export default App;
