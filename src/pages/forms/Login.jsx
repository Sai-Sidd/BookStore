import { Link } from "react-router-dom";
import "./forms.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/header/Header2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      return toast.error("Email is required");
    }

    if (password.trim() === "") {
      return toast.error("Password is required");
    }

    // Retrieve registration details from local storage
    const registeredEmail = localStorage.getItem("registeredEmail");
    const registeredPassword = localStorage.getItem("registeredPassword");

    // Check if provided login details match the registered details
    if (email === registeredEmail && password === registeredPassword) {
      // Successful login
      console.log("Login successful!");
      
      // Perform any necessary actions after successful login
      toast.success('Login successful', {
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
          window.location.href="/home"
        },3000)
    } else {
      // Invalid login
      window.location.href="/"
      toast.error("Invalid email or password");
    }
  };

  return (
    <>
      <Header />
      <div className="form-wrapper">
        <ToastContainer />
        <h1 className="form-title">Login to your account</h1>
        <form onSubmit={formSubmitHandler} className="form">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="form-btn" type="submit">
            Login
          </button>
        </form>
        <div className="form-footer">
          Don't have an account?{" "}
          <Link to="/register" className="forms-link">
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
