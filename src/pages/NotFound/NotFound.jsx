import { Link } from "react-router-dom";
import { useRef } from "react";

import s from "./NotFound.module.css";

const NotFound = () => {
  const stateRef = useRef(location.state);
  const linkGoBack = stateRef.current ?? "/";

  return (
    <div>
      <div>Not Found</div>
      <Link to={linkGoBack} className={s.link_back}>
        Go back
      </Link>
    </div>
  );
};
export default NotFound;
