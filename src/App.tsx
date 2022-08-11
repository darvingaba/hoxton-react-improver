import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      <header>
        <ul className="header">
          <li className="home">
            <a href="#">Home</a>
          </li>
          <li className="appointments">
            <a href="#">Appointments</a>
          </li>
        </ul>
      </header>
      <main>
        <div className="appointmentContainer">
          <h2>Here you can you make an appointment</h2>
          <div className="appointDetails">
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default App
