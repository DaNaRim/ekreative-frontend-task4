import {library} from "@fortawesome/fontawesome-svg-core";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import InputSearch from "../../components/form/InputSearch/InputSearch";
import CategoryPostPreview from "../../components/other/CategoryPostPreview/CategoryPostPreview";
import styles from "./CategoryPage.module.scss";
import postsData from "../../../data/posts.json";

library.add(faAngleDown);

const POSTS_PER_PAGE = 8;

const CategoryPage = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page") || 1));

  const offset = (currentPage - 1) * POSTS_PER_PAGE;
  const [lastPage, setLastPage] = useState(Math.ceil(postsData.length / POSTS_PER_PAGE));

  const [postsToDisplay, setPostsToDisplay] = useState(postsData.slice(offset, offset + POSTS_PER_PAGE));

  const [curSearch, setCurSearch] = useState(searchParams.get("search") || "");


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
        {/*  Pagination  */}
      </footer>
    </main>
  );
};

export default CategoryPage;