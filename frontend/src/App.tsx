
import './App.css'
import Routing from './Routing'
import { useEffect } from 'react';
import { getProperties } from './services/WebService';
import { useDispatch } from 'react-redux';
import { addData } from './redux/slices/PropertiesSlice';
function App() {


  return (
    <>
    <Routing/>
    </>
  )
}

export default App
