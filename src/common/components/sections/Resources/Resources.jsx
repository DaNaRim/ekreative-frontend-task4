import {useState} from "react";
import {Link} from "react-router-dom";
import {Default, Mobile} from "../../../utils/ResponsiveWrappers";
import Button from "../../form/Button/Button";
import Input from "../../form/Input/Input";
import styles from "./Resources.module.scss";

const Resources = () => {

  const [email, setEmail] = useState("");

  const onGetStarted = () => {
    alert("Get started");
    setEmail("");
  };

  return (
    <>
      <Default>
        <section className={styles.resources}>
          <p className={styles.preHeading}>Resources</p>
          <h1>Untitled blog</h1>
          <p className={styles.desc}>Tool and strategies modern teams need to help their companies grow.</p>
          <div className={styles.inputWrapper}>
            <Input type="email" placeholder="Email address" value={email} setValue={setEmail}/>
            <Button onClick={onGetStarted}>Get started</Button>
          </div>
          <p className={styles.policy}>We care about your data in our <Link to="/">privacy policy</Link>.</p>
        </section>
      </Default>
      <Mobile>
        <section className={`${styles.resources} ${styles.resourcesMobile}`}>
          <p className={styles.preHeading}>Resources</p>
          <h1>Untitled blog</h1>
          <p className={styles.desc}>Tool and strategies modern teams need to help their companies grow.</p>
          <div className={styles.inputWrapper}>
            <Input type="email" placeholder="Email address" value={email} setValue={setEmail}/>
            <p className={styles.policy}>We care about your data in our <Link to="/">privacy policy</Link>.</p>
            <Button onClick={onGetStarted}>Get started</Button>
          </div>
        </section>
      </Mobile>
    </>
  );
};

export default Resources;