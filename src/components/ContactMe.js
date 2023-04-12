import "./ContactMe.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setEmailError("Email is required");
      return;
    }

    // submit the form
  };

  return (
    <div className="ContactMe">
    <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="name">Name</label>
        <input 
        	type="text"
            id="name"
            value={name}
        	onChange={(event) => setName(event.target.value)}
        /><br/>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={`form-control ${emailError ? "is-invalid" : ""}`}
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {emailError && <div className="invalid-feedback">{emailError}</div>}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
