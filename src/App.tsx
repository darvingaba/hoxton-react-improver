import { useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom';
import './App.css'
import { Form } from './components/Form';
import { Header } from './components/Header'
import { Doctors } from './pages/Doctors';
import { DoctorPage } from './pages/DoctorPage';
import { Appointment } from './pages/Appointment';

type Patient = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  symptoms: string;
};
type Doctor = {
  id: number;
  name: string;
  specializedIn: string;
  free: boolean;
};


function App() {
  let [patient, setPatient] = useState<Patient>({} as Patient);
  let [doctor, setDoctor] = useState<Doctor>({} as Doctor);

  let params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/doctors/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setDoctor(data);
      });
  }, [doctor]);

 

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
        <Route path="/appointment" element={<Appointment 

        patient={patient}
     
        doctor={doctor}/>} />

      </Routes>
      
    </div>
  );
}

export default App
