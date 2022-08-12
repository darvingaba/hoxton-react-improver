import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Form } from './components/Form';
import { Header } from './components/Header'
import { Doctors } from './pages/Doctors';
import { DoctorPage } from './pages/DoctorPage';

type Patient = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  symptoms: string;
};


function App() {
  let [patient, setPatient] = useState<Patient>({} as Patient);

  useEffect(() => {
    fetch("http://localhost:3001/patient")
      .then((res) => res.json())
      .then((data) => {
        setPatient(data);
      });
  } , [patient]);


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Form />} />
        <Route path="/form" element={<Form />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorPage patient={patient}/>} />
      </Routes>
      
    </div>
  );
}

export default App
