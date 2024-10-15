import { Link } from "react-router-dom";
import styles from "../CSS_Modules/Login.module.css";
const LoginHeading = ({ value, setValue }) => {
  const changelogin = () => {
    setValue("login");
  };

  return (
    <Link
      to="/login"
      className={`${value === "login" ? styles.loginHeading : styles.text}`}
      onClick={changelogin}
    >
      <div className={styles.text}>Login</div>
    </Link>
  );
};
export default LoginHeading;
