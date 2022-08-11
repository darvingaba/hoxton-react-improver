import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Doctor = {
    id: number;
    name: string;
    specializedIn: string;
    free: boolean;
}

export function DoctorPage (){
    let [doctor, setDoctor] = useState<Doctor>({} as Doctor);

    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/doctors/${params.id}`)
          .then((res) => res.json())
          .then((data) => {
            setDoctor(data);
          });
    },[])

    return(
        <div className="doctorPage">
            <div className="title">
                <h1> {doctor.name}</h1>
                <p>Here is the doctor</p>
                <p>For : {doctor.specializedIn}</p>
                <p>Availability : {doctor.free ? "Free" : "Not free"}</p>

            </div>
        </div>

    )
}