import styles from "./Form.module.css";

export const Signup = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h3>SIGN UP</h3>
        <label>Email</label>
        <input />
        <label>Password</label>
        <input />
        <button>Sign Up</button>
      </form>
    </div>
  );
};
