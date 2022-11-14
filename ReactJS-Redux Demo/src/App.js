import React from 'react';
import Navbar from './Components/navbar';
import Register from './Components/register';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Components/table';

function App() {
  return (
 
      <BrowserRouter>
      <div>
        <Navbar />
        {/* <Table/> */}
        <Routes>
        <Route exact path="/" element={<Table/>}/>
        <Route path='/home' element={<Table/>}/>
        <Route path="/register" element={<Register/>}/>
        </Routes>
        
        </div>
      </BrowserRouter>
 
  )
}

export default App;
