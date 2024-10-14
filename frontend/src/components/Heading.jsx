import styles from "../CSS_Modules/Container.module.css";
import SignupHeading from "./SignupHeading";
import LoginHeading from "./LoginHeading";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
const Heading = () => {
  const params = useParams();
  const [value, setValue] = useState(params);

  return (
    <>
      <div className={styles.heading}>
        <SignupHeading value={value} setValue={setValue} />
        <LoginHeading value={value} setValue={setValue} />
      </div>
      <Outlet />
    </>
  );
};
export default Heading;
