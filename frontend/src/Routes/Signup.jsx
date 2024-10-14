import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import styles from "../CSS_Modules/signup.module.css";
import { useEffect } from "react";

const Signup = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkSignupUser = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/user/signup", {
          method: "GET",
          credentials: "include",
        });
        const result = await response.json();

        if (result.message === "Already signed UP") {
          navigate("/dashboard");
        } else {
          navigate("/signup");
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        console.log(error.message);
        navigate("/signup");
      }
    };
    checkSignupUser();
  }, [navigate]);

  const actionData = useActionData();

  const message =
    actionData?.Email ||
    actionData?.Username ||
    actionData?.Registered ||
    actionData?.Password ||
    actionData?.Success ||
    actionData?.InvalidUser ||
    actionData?.Error ||
    "";

  return (
    <div className={styles.signup_container}>
      <Form method="POST" className={styles.form}>
        <div className={styles.name}>
          <label htmlFor="name" className={styles.namelabel}>
            Name :
          </label>
          <input
            name="name"
            placeholder="Enter Name"
            type="text"
            className={styles.nameinput}
            required
          />
        </div>
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
        <button type="submit" className={styles.signupbtn}>
          SIGN UP
        </button>
      </Form>
    </div>
  );
};

export default Signup;

export const handlesignup = async (e) => {
  const formData = await e.request.formData();
  const Data = Object.fromEntries(formData);

  try {
    const response = await fetch("http://localhost:4000/api/signup", {
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
    console.error("Error during signup:", error);
    return { Error: "An error occurred during signup." };
  }
};
