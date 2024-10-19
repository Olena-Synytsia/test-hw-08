import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors.js";
import { logout } from "../../redux/auth/operations.js";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };

  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  return (
    <div className={s.container}>
      <div className={s.text}>Welcome, {user.name}</div>
      <NavLink className={buildLinkClass} to="/contacts">
        Contacts
      </NavLink>
      <button onClick={() => dispatch(logout())} className={s.btn}>
        Exit
      </button>
    </div>
  );
};
export default UserMenu;
