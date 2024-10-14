import { Link, Outlet } from "react-router-dom";
import styles from "../CSS_Modules/Container.module.css";
const Home = () => {
  return (
    <>
      <div className={styles.HomeContainer}>
        <Link to="/signup" className={styles.HomeSignup}>
          <div className={styles.SignupHeading}>Signup</div>
          <div className={styles.SignupBody}>Create a new Account</div>
        </Link>
        <Link to="/login" className={styles.HomeLogin}>
          <div className={styles.LoginHeading}>Login</div>
          <div className={styles.LoginBody}>Login into existing Account</div>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
