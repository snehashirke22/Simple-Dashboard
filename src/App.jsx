import './App.css'
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import { useState } from 'react';

function App() {
const [openSidebar, setOpenSidebar] = useState(false);

const ToggleSidebar = () =>{
  setOpenSidebar(!openSidebar);
}
  return (
    <div className='grid-container'>
      <Header ToggleSidebar={ToggleSidebar}/>
      <Sidebar ToggleSidebar={ToggleSidebar} openSidebar={openSidebar}/>
      <Home />
    </div>
  )
}

export default App
