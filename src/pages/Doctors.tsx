import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
type Doctor = {
    id: number;
    name: string;
    specializedIn: string;
    free: boolean;
}
type Patient = {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    symptoms: string;
}

export function Doctors(){
    let [doctors, setDoctors] = useState<Doctor[]>([]);
    let [patient, setPatient] = useState<Patient>({} as Patient);

    useEffect(() => {
        fetch("http://localhost:3001/doctors")
          .then((res) => res.json())
          .then((data) => {
            setDoctors(data);
          });
    },[])

    useEffect(() => {
        fetch("http://localhost:3001/patient")
          .then((res) => res.json())
          .then((data) => {
            setPatient(data);
          });
    },[])



    return (
      <div className="doctorsPage">
        <div className="title">
          <h1>Hello {patient.name}</h1>
          <p>Here is the list of doctors</p>
          <p>
            Check if the doctor is available for time {patient.time} on day{" "}
            {patient.date}
          </p>
        </div>
        <ul className="doctorsList">
          {doctors.map((doctor) => (
            <Link
              className="doctorLink"
              to={`/doctors/${doctor.id}`}
              key={doctor.id}
            >
              <li className="doctor" key={doctor.id}>
                <h2>{doctor.name}</h2>
                <p>For : {doctor.specializedIn}</p>
                <p>
                  Availability :{" "}
                  {doctor.free
                    ? "Free"
                    : `Occupied for ${patient.time}, date ${patient.date}`}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
}

