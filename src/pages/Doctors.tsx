import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
type Doctor = {
    id: number;
    name: string;
    specializedIn: string;
    free: boolean;
}

export function Doctors(){
    let [doctors, setDoctors] = useState<Doctor[]>([]);
    const params = useParams();

    useEffect(() => {
        fetch("http://localhost:3001/doctors")
          .then((res) => res.json())
          .then((data) => {
            setDoctors(data);
          });
    },[])


    return (
      <div className="doctorsPage">
        <div className="title">
          <h1>Doctors</h1>
          <p>Here is the list of doctors</p>
        </div>
        <ul className="doctorsList">
          {doctors.map((doctor) => (
            <Link className="doctorLink" to={`/doctors/${doctor.id}`} key={doctor.id}>
            <li className="doctor" key={doctor.id}>
              <h2>{doctor.name}</h2>
              <p>For : {doctor.specializedIn}</p>
              <p>Availability : {doctor.free ? "Free" : "Not free"}</p>
            </li>
            </Link>
          ))}
        </ul>
      </div>
    );
}

