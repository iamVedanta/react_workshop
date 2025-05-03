import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function User() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const homeNav = useNavigate(); // one view to another view without userAction, it is simliar to redirect

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>User Details</h2>
      <button className="btn btn-primary" onClick={() => homeNav("/")}>
        Back to Home
      </button>

      <table className="table table-striped">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{user.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{user.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
