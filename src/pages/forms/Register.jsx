import { Link } from "react-router-dom";
import "./forms.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/header/Header";


const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (event) => {
    event.preventDefault();


    // Store registration details in local storage
    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredUsername", username);
    localStorage.setItem("registeredPassword", password);
     
    toast.success('Signup successful', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setTimeout(()=>{
        window.location.href="/login"
      },3000)

    console.log({ email, password, username });
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <>
      <Header />
      <div className="form-wrapper">
        <ToastContainer />
        <h1 className="form-title">Create new account</h1>
        <form onSubmit={formSubmitHandler} className="form">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="form-btn" type="submit">
            Register
          </button>
        </form>
        <div className="form-footer">
          Already have an account ?{" "}
          <Link to="/login" className="forms-link">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
