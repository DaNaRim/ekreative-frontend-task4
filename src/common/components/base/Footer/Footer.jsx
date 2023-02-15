import {useState} from "react";
import {Link} from "react-router-dom";
import Button from "../../form/Button/Button";
import Input from "../../form/Input/Input";
import Logo from "../Logo/Logo";
import NavFooter from "../NavFooter/NavFooter";
import styles from "./Footer.module.scss";

const Footer = ({className}) => {

  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert("Subscribe");
    setEmail("");
  };

  return (
    <footer className={`${className} ${styles.mainFooter}`}>
      <main>
        <div className={styles.leftSide}>
          <div className={styles.logo}>
            <Logo className={styles.logoIcon}/>
            <h2>Untitled UI</h2>
          </div>
          <NavFooter/>
        </div>
        <div className={styles.rightSide}>
          <p>Stay up to date</p>
          <div className={styles.emailWrapper}>
            <Input type="email" placeholder="Enter your email" value={email} setValue={setEmail}/>
            <Button onClick={handleSubscribe}>Subscribe</Button>
          </div>
        </div>
      </main>
      <footer>
        <p>© 2077 Untitled UI. All rights reserved.</p>
        <div className={styles.links}>
          <Link to="/">Terms</Link>
          <Link to="/">Privacy</Link>
          <Link to="/">Cookies</Link>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;