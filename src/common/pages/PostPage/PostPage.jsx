import {useParams} from "react-router";
import postsData from "../../../data/posts.json";
import SmallPost from "../../components/other/SmallPost/SmallPost";
import LatestPosts from "../../components/sections/LatestPosts/LatestPosts";
import PostPageHeader from "../../components/sections/PostPageHeader/PostPageHeader";
import SimilarPosts from "../../components/sections/SimilarPosts/SimilarPosts";
import {Default, Mobile} from "../../utils/ResponsiveWrappers";
import styles from "./PostPage.module.scss";

const PostPage = () => {
  const {id} = useParams();

  const mainPost = postsData.find(post => post.id === id);

  return (
    <>
      <Default>
        <main className={styles.postPage}>
          <PostPageHeader/>
          <SmallPost className={styles.mainPost} isMainPost={true} {...mainPost}/>
          <SimilarPosts mainPost={mainPost}/>
          <LatestPosts/>
        </main>
      </Default>
      <Mobile>
        <main className={`${styles.postPage} ${styles.postPageMobile}`}>
          <PostPageHeader/>
          <SmallPost className={styles.mainPost} {...mainPost}/>
          <SimilarPosts mainPost={mainPost}/>
          <LatestPosts/>
        </main>
      </Mobile>
    </>
  );
};

export default PostPage;
