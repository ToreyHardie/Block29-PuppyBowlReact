import { useState } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import NewPlayerForm from './components/NewPlayerForm'
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";


<BrowserRouter>
<Routes>
<Route path='/' element={<AllPlayers/>} />
<Route path='/players/:id' element={<SinglePlayer />}></Route>
</Routes>
</BrowserRouter>

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div id="title">Puppybowl</div>
      <div id="newplayer"><NewPlayerForm/></div>
      <div id="playerBoxes"><AllPlayers /></div>
    </>

 
  );
}

export default App
