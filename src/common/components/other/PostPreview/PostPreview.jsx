import {Link} from "react-router-dom";
import styles from "./PostPreview.module.scss";

const PostPreview = (post) => (
  <article className={styles.postPreview}>
    <header>
      <img src={post.img.src} alt={post.img.alt}/>
      <div className={styles.img_bottom}>
        <div className={styles.img_bottom_left}>
          <p className={styles.author}>{post.author}</p>
          <p className={styles.date}>{post.date}</p>
        </div>
        <div className={styles.img_bottom_right}>
          <p>{post.category}</p>
        </div>
      </div>
    </header>
    <main>
      <h3>{post.title}</h3>
      <p>{post.desc}</p>

      <Link to={`/posts/${post.id}`}>Read more</Link>
    </main>
  </article>
);

export default PostPreview;