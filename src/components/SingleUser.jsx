import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function User() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  //   const location = useLocation();
  const homeNav = useNavigate(); // useNavigate is a hook that returns a function that can be used to navigate programmatically.
  // one view to another view without userAction, it is simliar to redirect
  // UseNaviagate and match are almost similar, but useNavigate is more flexible and powerful.
  // useNavigate is a hook that returns a function that can be used to navigate programmatically.
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
