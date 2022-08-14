
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

type Props = {
    patient: Patient;
    doctor: Doctor;
}

export function Appointment({patient, doctor}: Props) {
   

    return (
      <div className="appointmentPage">
        <div className="appointmentDetails">
          <h1>Hello {patient.name}</h1>
          <p>
            Details about appointment:
            <p>
              On {patient.date} at {patient.time}
            </p>
            <p>Your symptoms: {patient.symptoms}</p>
            <p>Please be 10 minutes early on the hospital.</p>
          </p>
        </div>
      </div>
    );
}
