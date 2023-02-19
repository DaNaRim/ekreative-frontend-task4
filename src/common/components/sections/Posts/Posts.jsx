import {library} from "@fortawesome/fontawesome-svg-core";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import postsData from "../../../../data/posts.json";
import {Default, Mobile} from "../../../utils/ResponsiveWrappers";
import InputSearch from "../../form/InputSearch/InputSearch";
import Pagination from "../../other/Pagination/Pagination";
import PostPreview from "../../other/PostPreview/PostPreview";
import styles from "./Posts.module.scss";

library.add(faAngleDown);

const POSTS_PER_PAGE = 8;

const Posts = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page") || 1));

  const offset = (currentPage - 1) * POSTS_PER_PAGE;
  const [lastPage, setLastPage] = useState(Math.ceil(postsData.length / POSTS_PER_PAGE));

  const [postsToDisplay, setPostsToDisplay] = useState(postsData.slice(offset, offset + POSTS_PER_PAGE));

  const [curSearch, setCurSearch] = useState(searchParams.get("search") || "");
  const [order, setOrder] = useState(searchParams.get("order") || "newestFirst");

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      searchParams.set("page", currentPage - 1);
      setSearchParams(searchParams);
    }
  };

  const handleNext = () => {
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
      searchParams.set("page", currentPage + 1);
      setSearchParams(searchParams);
    }
  };

  const handlePage = (page) => {
    setCurrentPage(page);
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  const handleSearch = (value) => {
    setCurSearch(value);
    searchParams.set("search", value);
    setSearchParams(searchParams);
  };

  const handleOrder = (value) => {
    setOrder(value);
    searchParams.set("order", value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!curSearch) {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }

    const newPostsToDisplay = postsData
      .filter(post => !curSearch || post.title.toLowerCase().includes(curSearch.toLowerCase()))
      .sort((a, b) => {
        if (order === "newestFirst") {
          return new Date(b.date) - new Date(a.date);
        } else if (order === "oldestFirst") {
          return new Date(a.date) - new Date(b.date);
        } else if (order === "alphabetical") {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });

    if (newPostsToDisplay.slice(offset, offset + POSTS_PER_PAGE).length === 0) {
      setCurrentPage(1);
      searchParams.delete("page");
      setSearchParams(searchParams);
    }

    setPostsToDisplay(newPostsToDisplay.slice(offset, offset + POSTS_PER_PAGE));
    setLastPage(Math.ceil(newPostsToDisplay.length / POSTS_PER_PAGE));
  }, [curSearch, order, currentPage, offset, searchParams, setSearchParams]);


  return (
    <>
      <Default>
        <section className={styles.posts}>
          <header>
            <InputSearch placeholder="Search" value={curSearch} setValue={handleSearch}/>
            <div className={styles.order}>
              <select name="order" value={order} onChange={e => handleOrder(e.target.value)}>
                <option value="newestFirst">Newest first</option>
                <option value="oldestFirst">Oldest first</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
              <FontAwesomeIcon icon="fa-solid fa-angle-down"/>
            </div>
          </header>
          <main>
            {postsToDisplay.length === 0 && <div className={styles.noPosts}>No posts found</div>}
            {postsToDisplay.map((post) => (
              <PostPreview key={post.id} {...post}/>
            ))}
          </main>
          <Pagination currentPage={currentPage}
                      lastPage={lastPage}
                      handlePrevious={handlePrevious}
                      handleNext={handleNext}
                      handlePage={handlePage}/>
        </section>
      </Default>
      <Mobile>
        <section className={`${styles.posts} ${styles.postsMobile}`}>
          <header>
            <InputSearch placeholder="Search" value={curSearch} setValue={handleSearch}/>
            <div className={styles.order}>
              <select name="order" value={order} onChange={e => handleOrder(e.target.value)}>
                <option value="newestFirst">Newest first</option>
                <option value="oldestFirst">Oldest first</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
              <FontAwesomeIcon icon="fa-solid fa-angle-down"/>
            </div>
          </header>
          <main>
            {postsToDisplay.length === 0 && <div className={styles.noPosts}>No posts found</div>}
            {postsToDisplay.map((post) => (
              <PostPreview key={post.id} {...post}/>
            ))}
          </main>
          <Pagination currentPage={currentPage}
                      lastPage={lastPage}
                      handlePrevious={handlePrevious}
                      handleNext={handleNext}
                      handlePage={handlePage}/>
        </section>
      </Mobile>
    </>
  );
};

export default Posts;