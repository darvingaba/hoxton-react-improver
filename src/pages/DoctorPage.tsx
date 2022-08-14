import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
};
type Props = {
    patient: Patient;
}

export function DoctorPage ({patient} : Props) {
    let [doctor, setDoctor] = useState<Doctor>({} as Doctor);

    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/doctors/${params.id}`)
          .then((res) => res.json())
          .then((data) => {
            setDoctor(data);
          });
    },[])

     function changeAvailability(){
        fetch(`http://localhost:3001/doctors/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                free: !doctor.free,
            }),
        })
          .then((res) => res.json())
          .then((data) => {
            setDoctor(data);
          });
    }

    return(
        <div className="doctorPage">
            <div className="title">
                <h1> {doctor.name}</h1>
                <p>Here is the doctor</p>
                <p>For : {doctor.specializedIn}</p>
                <p>Availability : {doctor.free ? "Free" : `Occupied for ${patient.time}, date ${patient.date}`}</p>
                <button
                    onClick={changeAvailability}   
                >Change availability</button>
                <Link to={"/appointment"}>Check appointment</Link>

            </div>
        </div>

    )
}