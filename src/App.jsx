import './App.css'
import Navbar from './components/navbar.jsx'
import { Route,Routes } from 'react-router'
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Team from "./components/Team.jsx"
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Team' element={<Team/>}/>
    </Routes>
    </>
  )
}

export default App
