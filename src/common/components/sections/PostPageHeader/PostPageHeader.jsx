import {useState} from "react";
import {Link} from "react-router-dom";
import Button from "../../form/Button/Button";
import Input from "../../form/Input/Input";
import styles from "./PostPageHeader.module.scss";

const PostPageHeader = () => {

  const [email, setEmail] = useState("");

  const onGetStarted = () => {
    alert("Get started");
    setEmail("");
  };

  return (
    <header className={styles.postPageHeader}>
      <p className={styles.preHeading}>Our blog</p>
      <h1>Resources and insights</h1>
      <p className={styles.desc}>The latest industry news, interviews, technologies, and resources.</p>
      <div className={styles.getStartedWrapper}>
        <div className={styles.inputWrapper}>
          <Input type="email" placeholder="Email address" value={email} setValue={setEmail}/>
          <Button onClick={onGetStarted}>Get started</Button>
        </div>
        <p className={styles.policy}>We care about your data in our <Link to="/">privacy policy</Link>.</p>
      </div>
    </header>
  );
};

export default PostPageHeader;