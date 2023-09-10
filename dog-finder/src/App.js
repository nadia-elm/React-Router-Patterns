
import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import { Navbar } from './components/Navbar.js';
import { Dogs} from './components/Dogs.js'
import { DogInfo } from './components/DogInfo.js';
import './index.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/dogs' element={<Dogs />}></Route>
          <Route path='/dog/:dogName' element={<DogInfo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
