import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Form } from './components/Form';
import { Header } from './components/Header'
import { Doctors } from './pages/Doctors';
import { DoctorPage } from './pages/DoctorPage';


function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Form />} /> */}
        <Route path="/form" element={<Form />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorPage/>} />
      </Routes>
      
    </div>
  );
}

export default App
