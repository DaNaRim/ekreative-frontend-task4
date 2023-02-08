import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import styles from "./Header.module.scss";

const Header = () => {

  const onLogIn = () => {
    alert("Log in");
  };

  const onSignUp = () => {
    alert("Sign up");
  };

  return (
    <header className={styles.main_header}>
      <div className={styles.leftSide}>
        <div className={styles.logo}>
          <Logo className={styles.logoIcon}/>
          <h2>Untitled UI</h2>
        </div>
        <Nav/>
      </div>
      <div className={styles.auth}>
        <button className={styles.logIn} onClick={onLogIn}>Log in</button>
        <button className={styles.signUp} onClick={onSignUp}>Sign up</button>
      </div>
    </header>
  );
};

export default Header;