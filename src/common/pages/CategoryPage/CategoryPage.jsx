import {library} from "@fortawesome/fontawesome-svg-core";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import postsData from "../../../data/posts.json";
import InputSearch from "../../components/form/InputSearch/InputSearch";
import Select from "../../components/form/Select/Select";
import CategoryPostPreview from "../../components/other/CategoryPostPreview/CategoryPostPreview";
import Pagination from "../../components/other/Pagination/Pagination";
import {Default, Mobile} from "../../utils/ResponsiveWrappers";
import styles from "./CategoryPage.module.scss";

library.add(faAngleDown);

const POSTS_PER_PAGE = 9;

const categories = [
  "View all",
  "Design",
  "Product",
  "Software Engineering",
  "Customer Success",
  "Leadership",
  "Management",
];

const CategoryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page") || 1));

  const offset = (currentPage - 1) * POSTS_PER_PAGE;
  const [lastPage, setLastPage] = useState(Math.ceil(postsData.length / POSTS_PER_PAGE));

  const [postsToDisplay, setPostsToDisplay] = useState(postsData.slice(offset, offset + POSTS_PER_PAGE));

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || categories[0]);

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
    setSearch(value);
    searchParams.set("search", value);
    setSearchParams(searchParams);
  };

  const handleCategory = (value) => {
    setCategory(value);
    searchParams.set("category", value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!search) {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }

    const newPostsToDisplay = postsData
      .filter(post => !search || post.title.toLowerCase().includes(search.toLowerCase()))
      .filter(post => category === categories[0] || post.category === category.toLowerCase());

    if (newPostsToDisplay.slice(offset, offset + POSTS_PER_PAGE).length === 0) {
      setCurrentPage(1);
      searchParams.delete("page");
      setSearchParams(searchParams);
    }

    setPostsToDisplay(newPostsToDisplay.slice(offset, offset + POSTS_PER_PAGE));
    setLastPage(Math.ceil(newPostsToDisplay.length / POSTS_PER_PAGE));
  }, [search, currentPage, offset, searchParams, setSearchParams, category]);

  return (
    <>
      <Default>
        <main className={styles.categoryPage}>
          <header>
            <p className={styles.preHeading}>Our blog</p>
            <h1>Resources and insights</h1>
            <p className={styles.desc}>The latest industry news, interviews, technologies, and resources.</p>
          </header>
          <main>
            <aside>
              <InputSearch className={styles.searchBar} placeholder="Search" value={search} setValue={handleSearch}/>
              <p>Blog categories</p>
              <ul>
                {categories.map((c) => (
                  <li key={c} className={c === category ? styles.active : ""} onClick={() => handleCategory(c)}>
                    {c}
                  </li>
                ))}
              </ul>
            </aside>
            <section className={styles.posts}>
              {postsToDisplay.length === 0 && <div className={styles.noPosts}>No posts found</div>}
              {postsToDisplay.map((post, index) => (
                <CategoryPostPreview key={post.id} {...post} isMainPost={index === 0}/>
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
      </Default>
      <Mobile>
        <main className={`${styles.categoryPage} ${styles.categoryPageMobile}`}>
          <header>
            <p className={styles.preHeading}>Our blog</p>
            <h1>Resources and insights</h1>
            <p className={styles.desc}>The latest industry news, interviews, technologies, and resources.</p>
          </header>
          <main>
            <div className={styles.filters}>
              <InputSearch className={styles.searchBar} placeholder="Search" value={search} setValue={handleSearch}/>
              <Select className={styles.categories}
                      name="categories"
                      value={category}
                      onChange={handleCategory}
                      options={categories}
                      isTransformOptions={false}/>
            </div>
            <section className={styles.posts}>
              {postsToDisplay.length === 0 && <div className={styles.noPosts}>No posts found</div>}
              {postsToDisplay.map((post, index) => (
                <CategoryPostPreview key={post.id} {...post} isMainPost={index === 0}/>
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
      </Mobile>
    </>
  );
};

export default CategoryPage;