import styles from "./Form.module.css";

export const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h3>LOGIN</h3>
        <label>Email</label>
        <input />
        <label>Password</label>
        <input />
        <button>Login</button>
      </form>
    </div>
  );
};
