import Button from "../../form/Button/Button";
import Logo from "../Logo/Logo";
import NavHeader from "../NavHeader/NavHeader";
import styles from "./Header.module.scss";

const Header = ({className}) => {

  const onLogIn = () => {
    alert("Log in");
  };

  const onSignUp = () => {
    alert("Sign up");
  };

  return (
    <header className={`${className} ${styles.main_header}`}>
      <div className={styles.leftSide}>
        <div className={styles.logo}>
          <Logo className={styles.logoIcon}/>
          <h2>Untitled UI</h2>
        </div>
        <NavHeader/>
      </div>
      <div className={styles.auth}>
        <button className={styles.logIn} onClick={onLogIn}>Log in</button>
        <Button onClick={onSignUp}>Sign up</Button>
      </div>
    </header>
  );
};

export default Header;