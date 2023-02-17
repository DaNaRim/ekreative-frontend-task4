import {library} from "@fortawesome/fontawesome-svg-core";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {useParams} from "react-router";
import postsData from "../../../data/posts.json";
import SmallPost from "../../components/other/SmallPost/SmallPost";
import PostPageHeader from "../../components/sections/PostPageHeader/PostPageHeader";
import SimilarPosts from "../../components/sections/SimilarPosts/SimilarPosts";
import styles from "./PostPage.module.scss";

library.add(faArrowUp);

const PostPage = () => {
  const {id} = useParams();

  const mainPost = postsData.find(post => post.id === id);

  return (
    <main className={styles.postPage}>
      <PostPageHeader/>
      <SmallPost isMainPost={true} {...mainPost}/>
      <SimilarPosts mainPost={mainPost}/>
      <section className="latestPosts">

      </section>
    </main>
  );
};

export default PostPage;
