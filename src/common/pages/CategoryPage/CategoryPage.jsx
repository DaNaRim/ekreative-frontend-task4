import {library} from "@fortawesome/fontawesome-svg-core";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import postsData from "../../../data/posts.json";
import InputSearch from "../../components/form/InputSearch/InputSearch";
import CategoryPostPreview from "../../components/other/CategoryPostPreview/CategoryPostPreview";
import Pagination from "../../components/other/Pagination/Pagination";
import styles from "./CategoryPage.module.scss";

library.add(faAngleDown);

const POSTS_PER_PAGE = 8;

const CategoryPage = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page") || 1));

  const offset = (currentPage - 1) * POSTS_PER_PAGE;
  const [lastPage, setLastPage] = useState(Math.ceil(postsData.length / POSTS_PER_PAGE));

  const [postsToDisplay, setPostsToDisplay] = useState(postsData.slice(offset, offset + POSTS_PER_PAGE));

  const [curSearch, setCurSearch] = useState(searchParams.get("search") || "");

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

  useEffect(() => {
    if (!curSearch) {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }

    const newPostsToDisplay = postsData
      .filter(post => !curSearch || post.title.toLowerCase().includes(curSearch.toLowerCase()));

    if (newPostsToDisplay.slice(offset, offset + POSTS_PER_PAGE).length === 0) {
      setCurrentPage(1);
      searchParams.delete("page");
      setSearchParams(searchParams);
    }

    setPostsToDisplay(newPostsToDisplay.slice(offset, offset + POSTS_PER_PAGE));
    setLastPage(Math.ceil(newPostsToDisplay.length / POSTS_PER_PAGE));
  }, [curSearch, currentPage, offset, searchParams, setSearchParams]);

  return (
    <main className={styles.categoryPage}>
      <header>
        <p className={styles.preHeading}>Our blog</p>
        <h1>Resources and insights</h1>
        <p className={styles.desc}>The latest industry news, interviews, technologies, and resources.</p>
      </header>
      <main>
        <aside>
          <InputSearch className={styles.searchBar} placeholder="Search" value={curSearch} setValue={setCurSearch}/>
          <p>Blog categories</p>
          <ul>
            <li>View all</li>
            <li>Design</li>
            <li>Product</li>
            <li>Software Engineering</li>
            <li>Customer Success</li>
            <li>Leadership</li>
            <li>Management</li>
          </ul>
        </aside>
        <section className={styles.posts}>
          {postsToDisplay.map((post) => (
            <CategoryPostPreview key={post.id} {...post}/>
          ))}
        </section>
      </main>
      <footer>
        <Pagination currentPage={currentPage}
                    lastPage={lastPage}
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                    handlePage={handlePage}/>
      </footer>
    </main>
  );
};

export default CategoryPage;