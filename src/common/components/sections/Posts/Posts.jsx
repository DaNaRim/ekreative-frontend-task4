import {library} from "@fortawesome/fontawesome-svg-core";
import {faAngleDown, faAngleLeft, faAngleRight, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import postsData from "../../../../data/posts.json";
import Button from "../../form/Button/Button";
import Input from "../../form/Input/Input";
import PostPreview from "../../other/PostPreview/PostPreview";
import styles from "./Posts.module.scss";

library.add(faMagnifyingGlass, faAngleDown, faAngleRight, faAngleLeft);

const POSTS_PER_PAGE = 10;

const Posts = () => {
  const navigate = useNavigate();
  const {page = 1} = useParams();

  const [currentPage, setCurrentPage] = useState(Number(page));

  const lastPage = Math.ceil(postsData.length / POSTS_PER_PAGE);
  const offset = (currentPage - 1) * POSTS_PER_PAGE;

  const postsToDisplay = postsData.slice(offset, offset + POSTS_PER_PAGE);

  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("newestFirst");

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      navigate(`/${currentPage - 1}`);
    }
  };

  const handleNext = () => {
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
      navigate(`/${currentPage + 1}`);
    }
  };

  const handlePage = (page) => {
    setCurrentPage(page);
    navigate(`/${page}`);
  };

  const getPagination = (currentPage, lastPage) => {

    const pageNumbers = Array.from({length: lastPage}, (_, i) => i + 1);

    return (
      <ul>
        {pageNumbers.map(number => {
          if (number === 1
            || number === currentPage - 2
            || number === currentPage - 1
            || number === currentPage
            || number === currentPage + 1
            || number === currentPage + 2
            || number === lastPage) {
            return (
              <li key={number}
                  className={number === currentPage ? styles.active : ""}
                  onClick={() => handlePage(number)}>
                {number}
              </li>
            );
          } else if (number === currentPage - 3 || number === currentPage + 3) {
            return <li key={number} className={styles.dots}>...</li>;
          } else {
            return null;
          }
        })}
      </ul>
    );
  };

  return (
    <section className={styles.posts}>
      <header>
        <div className={styles.searchBar}>
          <Input type="search" placeholder="Search" value={search} setValue={setSearch}/>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass"/>
        </div>
        <div className={styles.order}>
          <select name="order" value={order} onChange={e => setOrder(e.target.value)}>
            <option value="newestFirst">Newest first</option>
            <option value="oldestFirst">Oldest first</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
          <FontAwesomeIcon icon="fa-solid fa-angle-down"/>
        </div>
      </header>
      <main>
        {postsToDisplay.map((post) => (
          <PostPreview key={post.id} {...post}/>
        ))}
      </main>
      <footer>
        <div className={styles.left}>
          <Button disabled={currentPage === 1} onClick={handlePrevious}>Previous</Button>
          <FontAwesomeIcon icon="fa-solid fa-angle-left"/>
        </div>
        <div className={styles.pagination}>
          {getPagination(currentPage, lastPage)}
        </div>
        <div className={styles.right}>
          <Button disabled={currentPage === lastPage} onClick={handleNext}>Next</Button>
          <FontAwesomeIcon icon="fa-solid fa-angle-right"/>
        </div>
      </footer>
    </section>
  );
};

export default Posts;



