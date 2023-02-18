import {library} from "@fortawesome/fontawesome-svg-core";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {formatDate} from "../PostPreview/PostPreview";
import styles from "./SmallPost.module.scss";

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
  "Research": "#0c8370",
  "Presentation": "#026aa2",
  "Frameworks": "#c01048",
  "Figma": "#027a48",
};

const SmallPost = ({className, isMainPost, img, category, tags, author, date, title, desc}) => (

  <article className={`${styles.smallPost} ${isMainPost && styles.mainPost} ${className || ""}`}>
    <img src={img.src} alt={img.alt}/>
    <div className={styles.authorWrapper}>
      {author.name} • {formatDate(date)}
    </div>
    <div className={styles.titleWrapper}>
      <h2>{title}</h2>
      <FontAwesomeIcon icon="fa-solid fa-arrow-up"/>
    </div>
    <p className={styles.desc}>{desc}</p>
    <div className={styles.tagsWrapper}>
      <div style={getCategoryStyles(category)}>{category}</div>
      {tags.map(tag =>
        <div key={tag} style={getTagStyles(tag)}>{tag}</div>,
      )}
    </div>
  </article>
);

export default SmallPost;

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