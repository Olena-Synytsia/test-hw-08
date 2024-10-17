import Navigation from "../Navigation/Navigation.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";

import s from "./AppBar.module.css";

const AppBar = () => {
  return (
    <div>
      <header className={s.appBar_header}>
        <Navigation />
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
        <AuthNav />
      </header>
    </div>
  );
};
export default AppBar;
