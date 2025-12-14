import { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Non autorisé");
      return;
    }

    fetch("http://localhost:3001/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setData(data))
      .catch(() => setError("Erreur serveur"));
  }, []);

  if (error) return <p>{error}</p>;
  if (!data) return <p>Chargement...</p>;

  return (
    <div>
      <h1>{data.message}</h1>
      <p>Email : {data.user.email}</p>
    </div>
  );
}

export default Dashboard;
