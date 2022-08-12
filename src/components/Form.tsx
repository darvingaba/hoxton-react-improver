import { useState } from "react";
import { Link } from "react-router-dom";


export function Form (){

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [date, setDate] = useState("");
    let [time, setTime] = useState("");
    let [symptoms, setSymptoms] = useState("");

    return (
      <main>
        <div className="appointmentContainer">
          <h2>Write your details here to set an appointment</h2>
          <div className="appointDetails">
            <div className="formForAppoint">
              <form  onSubmit={(e) => {
                e.preventDefault();
                e.target.name.value;
                e.target.email.value;
                e.target.phone.value;
                e.target.date.value;
                e.target.time.value;
                console.log(e.target.symptoms.value);


                fetch("http://localhost:3001/patient", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name: e.target.name.value,
                    email: e.target.email.value,
                    phone: e.target.phone.value,
                    date: e.target.date.value,
                    time: e.target.time.value,
                    symptoms: e.target.symptoms.value,
                  }),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    setName(data.name);
                    setEmail(data.email);
                    setPhone(data.phone);
                    setDate(data.date);
                    setTime(data.time);
                    setSymptoms(data.symptoms);
                  });
              
            }}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                    required
                    name="name"
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    required
                  />

                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Enter phone"
                    name="phone"
                    required
                  />

                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    placeholder="Enter date"
                    name="date"
                    required
                  />

                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="time"
                    placeholder="Enter time"
                    name="time"
                    required
                  />

                  <label htmlFor="message">Describe Your Symptoms</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={3}
                    placeholder="Enter message"
                    name="symptoms"
                    required
                  ></textarea>
                <Link to="/doctors">  
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
}