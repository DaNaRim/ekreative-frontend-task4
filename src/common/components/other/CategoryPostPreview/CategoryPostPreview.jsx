import {library} from "@fortawesome/fontawesome-svg-core";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {Default, Mobile} from "../../../utils/ResponsiveWrappers";
import {formatDate} from "../PostPreview/PostPreview";
import styles from "./CategoryPostPreview.module.scss";

library.add(faArrowUp);

const CategoryPostPreview = ({className, isMainPost, id, img, category, minRead, author, date, title, desc}) => (
  <>
    <Default>
      <article className={`${styles.categoryPostPreview} ${isMainPost && styles.mainPost} ${className || ""}`}>
        <img src={img.src} alt={img.alt}/>
        <div className={styles.textWrapper}>
          <div className={styles.categoryWrapper}>
            <span>{category}</span>
            {minRead} min read
          </div>
          <Link className={styles.titleWrapper} to={`/posts/${id}`}>
            <h3>{title}</h3>
            <FontAwesomeIcon icon="fa-solid fa-arrow-up"/>
          </Link>
          <p className={styles.desc}>{desc}</p>
          <div className={styles.authorWrapper}>
            <img src={author.img} alt={author.name}/>
            <div className={styles.authorDetails}>
              <p className={styles.authorName}>{author.name}</p>
              <p className={styles.date}>{formatDate(date)}</p>
            </div>
          </div>
        </div>
      </article>
    </Default>
    <Mobile>
      <article className={`${styles.categoryPostPreview} ${styles.categoryPostPreviewMobile} ${className || ""}`}>
        <img src={img.src} alt={img.alt}/>
        <div className={styles.textWrapper}>
          <div className={styles.categoryWrapper}>
            <span>{category}</span>
            {minRead} min read
          </div>
          <Link className={styles.titleWrapper} to={`/posts/${id}`}>
            <h3>{title}</h3>
            <FontAwesomeIcon icon="fa-solid fa-arrow-up"/>
          </Link>
          <p className={styles.desc}>{desc}</p>
          <div className={styles.authorWrapper}>
            <img src={author.img} alt={author.name}/>
            <div className={styles.authorDetails}>
              <p className={styles.authorName}>{author.name}</p>
              <p className={styles.date}>{formatDate(date)}</p>
            </div>
          </div>
        </div>
      </article>
    </Mobile>
  </>
);

export default CategoryPostPreview;