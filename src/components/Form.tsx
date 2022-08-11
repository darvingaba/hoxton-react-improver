

export function Form (){
    return (
      <main>
        <div className="appointmentContainer">
          <h2>Write your details here to set an appointment</h2>
          <div className="appointDetails">
            <div className="formForAppoint">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Enter phone"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    placeholder="Enter date"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="time"
                    placeholder="Enter time"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Describe Your Symptoms</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={3}
                    placeholder="Enter message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
}