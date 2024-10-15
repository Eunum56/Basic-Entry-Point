import { useNavigate } from "react-router-dom";
import styles from "../CSS_Modules/Dashboard.module.css";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch("api/user/dashboard", {
          method: "GET",
          credentials: "include",
        });

        const result = await response.json();

        if (response.ok) {
          setName(result.user.name);
          setEmail(result.user.email);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        navigate("/");
      }
    };
    checkAuthentication();
  }, [navigate]);

  // Logout handler
  const handleLogout = async () => {
    try {
      const res = await fetch("api/logout", {
        method: "POST",
        credentials: "include",
      });
      const result = await res.json();
      console.log(result);
      if (res.ok) {
        navigate("/");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      <div className={styles.heading}>Welcome to Dashboard</div>
      <div className={styles.userinfo}>
        <div className={styles.name}>Name: {name}</div>
        <div className={styles.email}>Email: {email}</div>
        <button className={styles.logout} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Dashboard;
