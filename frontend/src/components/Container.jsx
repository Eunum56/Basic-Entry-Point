import styles from "../CSS_Modules/Container.module.css";
const Container = ({ children }) => {
  return (
    <center>
      <div className={styles.Container}>{children}</div>
    </center>
  );
};
export default Container;
