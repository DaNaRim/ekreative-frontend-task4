import {Link} from "react-router-dom";
import {Default, Mobile} from "../../../utils/ResponsiveWrappers";
import styles from "./PostPreview.module.scss";

const PostPreview = ({className, id, img, author, date, category, title, desc}) => (
  <>
    <Default>
      <article className={`${styles.postPreview} ${className ? className : ""}`}>
        <header>
          <img src={img.src} alt={img.alt}/>
          <div className={styles.img_bottom}>
            <div className={styles.img_bottom_left}>
              <p className={styles.author}>{author.name}</p>
              <p className={styles.date}>{formatDate(date)}</p>
            </div>
            <div className={styles.img_bottom_right}>
              <p>{category}</p>
            </div>
          </div>
        </header>
        <main>
          <h3>{title}</h3>
          <p>{desc}</p>

          <Link to={`/posts/${id}`}>Read more</Link>
        </main>
      </article>
    </Default>
    <Mobile>
      <article className={`${styles.postPreview} ${styles.postMobile} ${className ? className : ""}`}>
        <header>
          <img src={img.src} alt={img.alt}/>
          <div className={styles.img_bottom}>
            <div className={styles.img_bottom_left}>
              <p className={styles.author}>{author.name}</p>
              <p className={styles.date}>{formatDate(date)}</p>
            </div>
            <div className={styles.img_bottom_right}>
              <p>{category}</p>
            </div>
          </div>
        </header>
        <main>
          <h3>{title}</h3>
          <p>{desc}</p>

          <Link to={`/posts/${id}`}>Read more</Link>
        </main>
      </article>
    </Mobile>
  </>
);

export default PostPreview;

export function formatDate(millis) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(millis);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}