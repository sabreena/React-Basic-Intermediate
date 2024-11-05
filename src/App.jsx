import { useState, useEffect } from "react";
import { User } from "./User";

function App() {
  const [users, setUsers] = useState([]); // State for storing users
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    // Fetch data from the API
    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((res) => {
        //if response is successful
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((e) => {
        if (e?.name === "AbortError") return;
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  let jsx;
  if (loading) {
    jsx = <h2>Loading...</h2>;
  } else if (error != null) {
    jsx = <h2>Error!</h2>;
  } else {
    jsx = (
      <ul>
        {users.map((user) => {
          return <User key={user.id} name={user.name} />;
        })}
      </ul>
    );
  }

  return (
    <>
      <h1>User List</h1>
      {jsx}
    </>
  );
}

export default App;
