import startTrial1 from "../../../../assets/img/start-trial1.jpg";
import startTrial2 from "../../../../assets/img/start-trial2.png";
import startTrial3 from "../../../../assets/img/start-trial3.jfif";
import startTrial4 from "../../../../assets/img/start-trial4.jpg";
import startTrial5 from "../../../../assets/img/start-trial5.jpg";
import Button from "../../form/Button/Button";
import styles from "./StartTrial.module.scss";

const StartTrial = () => {

  const handleLearnMore = () => {
    alert("Learn more");
  };

  const handleGetStarted = () => {
    alert("Get started");
  };

  return (
    <section className={styles.startTrial}>
      <main>
        <div className={styles.leftSide}>
          <h2>
            No long-term contracts. <br/>
            No catches.
          </h2>
          <p>Start your 30-day free trial today.</p>
          <div className={styles.btnWrapper}>
            <Button onClick={handleLearnMore}>Learn more</Button>
            <Button onClick={handleGetStarted}>Get started</Button>
          </div>
        </div>
        <div className={styles.rightSide}>
          <img src={startTrial1} alt="woman write notes"/>
          <img src={startTrial2} alt="woman stand with documents"/>
          <img src={startTrial3} alt="empty office"/>
          <img src={startTrial4} alt="man with phone"/>
          <img src={startTrial5} alt="girls on meeting"/>
        </div>
      </main>
      <footer>
        <div className={styles.footerWrapper}>
          <div className={styles.leftSide}>
            <h3>Start your 30-day free trial</h3>
            <p>Join over 4,000+ startups already growing with Untitled.</p>
          </div>
          <div className={styles.rightSide}>
            <Button onClick={handleLearnMore}>Learn more</Button>
            <Button onClick={handleGetStarted}>Get started</Button>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default StartTrial;