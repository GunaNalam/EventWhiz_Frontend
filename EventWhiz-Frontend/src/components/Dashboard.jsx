import { useSelector } from "react-redux";
import withAuth from "./withAuth";

function Dashboard() {
  const auth = useSelector((state) => state.auth);
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome {auth.userData.name}</h2>
    </div>
  );
}

export default withAuth(Dashboard);