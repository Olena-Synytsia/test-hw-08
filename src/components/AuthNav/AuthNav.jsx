import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  return (
    <div className={s.nav}>
      <div className={s.link}>
        {/* <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink> */}
        {/* {!isLoggedIn && ()} */}
        <>
          <NavLink className={buildLinkClass} to="/login">
            Login
          </NavLink>
          <NavLink className={buildLinkClass} to="/register">
            Register
          </NavLink>
        </>

        {/* {isLoggedIn && ()} */}
        <button
          // onClick={() => dispatch(logout())}
          className="btn btn-secondary"
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default AuthNav;
