import {useState} from "react";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import Button from "../../components/form/Button/Button";
import Input from "../../components/form/Input/Input";
import styles from "./PostPage.module.scss";

const PostPage = () => {
  const {id} = useParams();

  const [email, setEmail] = useState("");

  const onGetStarted = () => {
    alert("Get started");
    setEmail("");
  };

  return (
    <main className={styles.postPage}>
      <header>
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
      <section className="mainPost">

      </section>
      <section className="similarPosts">

      </section>
      <section className="latestPosts">

      </section>
    </main>
  );
};

export default PostPage;