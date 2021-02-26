import styles from "../styles/SignUpBox.module.css";

export function SignUpBox({ signUp, setDef }) {
  function SignPrancha() {
    setDef();
    console.log(signUp);
  }

  return (
    <div className={styles.signBox}>
      <header>
        <h1>
          <span>wave.</span>master
        </h1>
        <strong>surfing skills to surf your mind</strong>
        <p>let's sign up.</p>
      </header>

      {signUp ? (
        <div className={styles.animate}>
          <p className={styles.goodjob}>good job!</p>
          <p className={styles.spangood}>you're good to surf now.</p>
        </div>
      ) : (
        <section>
          <form action="" className={styles.signForm}>
            <label for="name">
              <span>Name</span>
              <input type="text" name="name" id="name" />
            </label>
            <label for="name">
              <span>E-mail</span>
              <input type="text" name="email" id="email" />
            </label>
            <label for="email">
              <span>Password</span>
              <input type="password" name="password" id="password" />
            </label>
            <button type="button" onClick={SignPrancha}>
              Sign Up
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
