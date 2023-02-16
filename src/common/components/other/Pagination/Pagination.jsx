import {library} from "@fortawesome/fontawesome-svg-core";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "../../form/Button/Button";
import styles from "./Pagination.module.scss";

library.add(faAngleRight, faAngleLeft);

const Pagination = ({currentPage, lastPage, handlePrevious, handleNext, handlePage}) => (
  <div className={styles.paginationWrapper}>
    <div className={styles.left}>
      <Button disabled={currentPage === 1} onClick={handlePrevious}>Previous</Button>
      <FontAwesomeIcon icon="fa-solid fa-angle-left"/>
    </div>
    <div className={styles.pagination}>
      {getPagination(currentPage, lastPage, handlePage)}
    </div>
    <div className={styles.right}>
      <Button disabled={currentPage === lastPage || lastPage === 0} onClick={handleNext}>Next</Button>
      <FontAwesomeIcon icon="fa-solid fa-angle-right"/>
    </div>
  </div>
);

const getPagination = (currentPage, lastPage, handlePage) => {
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

export default Pagination;