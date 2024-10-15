import { Link } from "react-router-dom";
import styles from "../CSS_Modules/SignUp.module.css";
const SignupHeading = ({ value, setValue }) => {
  const changesignup = () => {
    setValue("signup");
  };
  return (
    <Link
      to="/signup"
      className={`${value === "signup" ? styles.signupHeading : styles.text}`}
      onClick={changesignup}
    >
      <div className={styles.text}>SignUP</div>
    </Link>
  );
};

export default SignupHeading;
