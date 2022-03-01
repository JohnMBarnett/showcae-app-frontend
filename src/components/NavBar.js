import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { user } = useAuth0();

  return (
    <nav className="nav_container">
      <h1>ToDo</h1>
      <div className="pic_container">
        <img src={user.picture} alt={user.name} />
        <LogoutButton />
      </div>
    </nav>
  );
};

export default NavBar;
