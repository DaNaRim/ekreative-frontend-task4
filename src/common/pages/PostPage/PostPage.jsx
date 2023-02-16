import {library} from "@fortawesome/fontawesome-svg-core";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import postsData from "../../../data/posts.json";
import Button from "../../components/form/Button/Button";
import Input from "../../components/form/Input/Input";
import {formatDate} from "../../components/other/PostPreview/PostPreview";
import styles from "./PostPage.module.scss";

library.add(faArrowUp);

const categoryColorMap = {
  "Default": "#5942c6",
  "Design": "#6941c6",
  "Product": "#026aa2",
  "Customer Success": "#c01048",
  "Software Engineering": "#027a48",
  "Leadership": "#6941c6",
  "Management": "#e3ba24",
};

const tagsColorMap = {
  "Default": "#5942c6",
  "Research": "#6941c6",
  "Presentation": "#026aa2",
  "Frameworks": "#c01048",
};

const PostPage = () => {
  const {id} = useParams();

  const [email, setEmail] = useState("");

  const mainPost = postsData.find(post => post.id === id);

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
      <section className={styles.mainPost}>
        <img src={mainPost.img.src} alt={mainPost.img.alt}/>
        <div className={styles.authorWrapper}>
          {mainPost.author.name} • {formatDate(mainPost.date)}
        </div>
        <div className={styles.titleWrapper}>
          <h2>{mainPost.title}</h2>
          <FontAwesomeIcon icon="fa-solid fa-arrow-up"/>
        </div>
        <p className={styles.desc}>{mainPost.desc}</p>
        <div className={styles.tagsWrapper}>
          <div style={getCategoryStyles(mainPost.category)}>{mainPost.category}</div>
          {mainPost.tags.map(tag =>
            <div key={tag} style={getTagStyles(tag)}>{tag}</div>,
          )}
        </div>
      </section>
      <section className="similarPosts">

      </section>
      <section className="latestPosts">

      </section>
    </main>
  );
};

export default PostPage;

function getCategoryStyles(category) {
  const color = categoryColorMap[category] || categoryColorMap["Default"];
  return {
    color,
    backgroundColor: obscureHexColor(color),
  };
}

function getTagStyles(tag) {
  const color = tagsColorMap[tag] || tagsColorMap["Default"];
  return {
    color,
    backgroundColor: obscureHexColor(color),
  };
}

function obscureHexColor(hexColor, percent = 0.1) {
  const color = hexColor.replace("#", "");

  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${percent})`;
}
