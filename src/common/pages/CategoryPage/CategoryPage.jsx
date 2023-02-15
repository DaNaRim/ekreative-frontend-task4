import {useState} from "react";
import InputSearch from "../../components/form/InputSearch/InputSearch";
import styles from "./CategoryPage.module.scss";

const CategoryPage = () => {

  const [search, setSearch] = useState("");

  return (
    <main className={styles.categoryPage}>
      <header>
        <p className={styles.preHeading}>Our blog</p>
        <h1>Resources and insights</h1>
        <p className={styles.desc}>The latest industry news, interviews, technologies, and resources.</p>
      </header>
      <aside>
        <InputSearch placeholder="Search" value={search} setValue={setSearch}/>
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
      <main>
        {/*  Posts  */}
        {/*  Pagination  */}
      </main>
    </main>
  );
};

export default CategoryPage;