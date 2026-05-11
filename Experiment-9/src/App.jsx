import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({});
  const [success, setSuccess] = useState("");

  const [user, setUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (name.trim() === "") {
      formErrors.name = "Username is required";
    }

    if (!email.includes("@")) {
      formErrors.email = "Valid email is required";
    }

    if (password.length < 6) {
      formErrors.password = "Password is too short";
    }

    setError(formErrors);

    if (Object.keys(formErrors).length === 0) {

      const newUser = {
        name: name,
        email: email
      };

      setUser([...user, newUser]);

      setSuccess("Registration successful");

      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="container">

      <h2>Registration Form</h2>

      {success && <p>{success}</p>}

      <form onSubmit={handleSubmit} className="form">

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {error.name && <p className="error">{error.name}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {error.email && <p className="error">{error.email}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error.password && <p className="error">{error.password}</p>}

        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default App;