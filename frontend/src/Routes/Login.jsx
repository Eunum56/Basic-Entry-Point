import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import styles from "../CSS_Modules/Login.module.css";
import { useEffect, useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("Username");

  useEffect(() => {
    const checkLoginUser = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/user/login", {
          method: "GET",
          credentials: "include",
        });
        const result = await response.json();

        if (result.message === "Already logged IN") {
          navigate("/dashboard");
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        console.log(error.message);
        navigate("/login");
      }
    };
    checkLoginUser();
  }, [navigate]);

  const ChangeValue = () => {
    if (value === "Username") setValue("Email");
    if (value === "Email") setValue("Username");
  };

  const actionData = useActionData();

  const message =
    actionData?.Details || actionData?.Password || actionData?.Success || "";

  return (
    <>
      <div className={styles.Heading}>
        <Form method="POST" className={styles.form}>
          {value !== "Username" ? (
            <div className={styles.username}>
              <label htmlFor="username" className={styles.usernamelabel}>
                Username :
              </label>
              <input
                name="username"
                type="text"
                placeholder="Enter Username"
                className={styles.usernameinput}
                required
              />
            </div>
          ) : (
            <div className={styles.email}>
              <label htmlFor="email" className={styles.emaillabel}>
                Email :
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter Email"
                className={styles.emailinput}
                required
              />
            </div>
          )}
          <p className={styles.change} onClick={ChangeValue}>
            Login with {value}
          </p>
          <div className={styles.password}>
            <label htmlFor="password" className={styles.passwordlabel}>
              Password :
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              className={styles.passwordinput}
              required
            />
          </div>
          {message && <div className={styles.message}>{String(message)}</div>}
          <button type="submit" className={styles.loginbtn}>
            LOGIN
          </button>
        </Form>
      </div>
    </>
  );
};

export default Login;

export const handlelogin = async (e) => {
  const formData = await e.request.formData();
  const Data = Object.fromEntries(formData);

  try {
    const response = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(Data),
    });

    const result = await response.json();

    if (result.Success) {
      return redirect("/dashboard");
    }

    return result;
  } catch (error) {
    console.error("Error during Login:", error);
    return { Error: "An error occurred during Login." };
  }
};
