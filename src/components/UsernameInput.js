import { useState } from "react";

const UsernameInput = ({ onDataAvailable, onStartFetch }) => {
  const [userName, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    onStartFetch();
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((response) => {
        if (!response.ok) {
          throw Error("The GitHub Username doesn't exist");
        }
        return response.json();
      })
      .then((data) => {
        onDataAvailable(data, userName);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="search">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="form"
            onChange={handleChange}
            type="name"
            placeholder="GitHub Username"
            data-testid="nameinput"
          />
          <button className="button">CHECK IT OUT!!!</button>
        </form>
      </div>
      {loading && "loading..."}
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default UsernameInput;
