import {library} from "@fortawesome/fontawesome-svg-core";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import postsData from "../../../../data/posts.json";
import Button from "../../form/Button/Button";
import SmallPost from "../../other/SmallPost/SmallPost";
import styles from "./LatestPosts.module.scss";

library.add(faArrowLeft, faArrowRight);

const POSTS_PER_PAGE = 3;

const LatestPosts = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const offset = (page - 1) * POSTS_PER_PAGE;
  const lastPage = Math.ceil(postsData.length / POSTS_PER_PAGE);

  const [postsSorted, setPostsSorted] = useState(postsData);

  const [postsToDisplay, setPostsToDisplay] = useState(
    postsSorted.slice(offset, offset + POSTS_PER_PAGE),
  );

  useEffect(() => {
    setPostsSorted(postsData.sort((a, b) => b.date - a.date));
  }, []);

  useEffect(() => {
    setPostsToDisplay(
      postsSorted.slice(offset, offset + POSTS_PER_PAGE),
    );
  }, [offset, page, postsSorted]);


  const handleViewAll = () => {
    navigate("/");
  };

  const handleSimilarPostsPrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleSimilarPostsNext = () => {
    if (page < lastPage) {
      setPage(page + 1);
    }
  };

  return (
    <section className={styles.latestPosts}>
      <header>
        <div className={styles.leftSide}>
          <h2>Latest writings</h2>
          <p>The latest news, technologies, and resources from our team.</p>
        </div>
        <Button onClick={handleViewAll}>View all posts</Button>
      </header>
      <main>
        {postsToDisplay.map(post => (
          <SmallPost key={post.id} {...post}/>
        ))}
      </main>
      <footer>
        <div role="button" onClick={handleSimilarPostsPrevious} className={page === 1 ? styles.disabled : ""}>
          <FontAwesomeIcon icon="fa-solid fa-arrow-left"/>
        </div>
        <div role="button"
             onClick={handleSimilarPostsNext}
             className={page === lastPage || postsToDisplay.length === 0 ? styles.disabled : ""}>
          <FontAwesomeIcon icon="fa-solid fa-arrow-right"/>
        </div>
      </footer>
    </section>
  );
};

export default LatestPosts;