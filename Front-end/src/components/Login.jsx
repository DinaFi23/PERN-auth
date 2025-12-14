import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import '../assets/style/Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("Connexion réussie ✅");
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
      console.log(data.user);
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className="form">
        <form onSubmit={handleSubmit} id="form">

    <TextField 
        label="Email"
        variant="outlined"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />

     {/* 
        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    */}
    

     <TextField 
    
        label="Mots de passe"
        variant="outlined"
        type="password"
        placeholder="Mots de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />

    {/* 
        <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> 
    */}
         
    <Button  type="submit" variant="contained">Login</Button>

      <p>{message}</p>
    </form>
    </div>
  );
}

export default Login;
