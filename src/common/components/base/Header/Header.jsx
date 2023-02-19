import {library} from "@fortawesome/fontawesome-svg-core";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {Default, Mobile} from "../../../utils/ResponsiveWrappers";
import Button from "../../form/Button/Button";
import Logo from "../Logo/Logo";
import NavHeader from "../NavHeader/NavHeader";
import styles from "./Header.module.scss";

library.add(faBars);

const Header = ({className}) => {
  const location = useLocation();

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [location.pathname, setIsMobileNavOpen]);

  const onLogIn = () => {
    alert("Log in");
  };

  const onSignUp = () => {
    alert("Sign up");
  };

  const onMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <Default>
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
      </Default>
      <Mobile>
        <header className={`${className} ${styles.main_header_mobile}`}>
          <div className={styles.leftSide}>
            <div className={styles.logo}>
              <Logo className={styles.logoIcon}/>
              <h2>Untitled UI</h2>
            </div>
          </div>
          <FontAwesomeIcon icon="fa-solid fa-bars" role="button" onClick={onMobileNavToggle}/>
          <aside className={`${styles.mobileNav} ${isMobileNavOpen ? styles.open : ""}`}>
            <FontAwesomeIcon icon="fa-solid fa-bars" role="button" onClick={onMobileNavToggle}/>
            <NavHeader activeClassName={styles.activeNav}/>
            <div className={styles.auth}>
              <button onClick={onLogIn}>Log in</button>
              <button onClick={onSignUp}>Sign up</button>
            </div>
          </aside>
        </header>
      </Mobile>
    </>
  );
};

export default Header;