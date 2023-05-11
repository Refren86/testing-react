import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Link to="/" data-testid="link-main">
        main
      </Link>
      <Link to="/about" data-testid="link-about">
        about
      </Link>
      <Link to="/users" data-testid="link-users">
        users
      </Link>
    </>
  );
}