import {Suspense} from "react";
import {Outlet} from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import styles from "./PageWrapper.module.scss";

const PageWrapper = () => (
  <div className={styles.page_wrapper}>
    <Header className={styles.main_header}/>
    <Suspense fallback={<Loading/>}>
      <Outlet/>
    </Suspense>
    <Footer className={styles.main_footer}/>
  </div>
);

export default PageWrapper;
