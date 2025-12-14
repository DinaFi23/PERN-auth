import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import '../assets/style/Register.css'

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="form">
         <h2>Créer un compte</h2>
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
      

      <Button  type="submit" variant="contained">S'inscrire</Button>

      <p>{message}</p>
    </form>
    </div>
    
  );
}

export default Register;
