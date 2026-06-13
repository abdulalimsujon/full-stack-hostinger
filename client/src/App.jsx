import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/message")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>Welcome to My World 🌍</h1>

        {loading && <p className="loading">Loading...</p>}

        {error && <p className="error">{error}</p>}

        {!loading && !error && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default App;
