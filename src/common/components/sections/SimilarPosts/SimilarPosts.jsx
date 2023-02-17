import {useEffect, useState} from "react";
import postsData from "../../../../data/posts.json";
import Pagination from "../../other/Pagination/Pagination";
import SmallPost from "../../other/SmallPost/SmallPost";
import styles from "./SimilarPosts.module.scss";

const POSTS_PER_PAGE = 6;

const SimilarPosts = ({mainPost}) => {

  const [page, setPage] = useState(1);
  const offset = (page - 1) * POSTS_PER_PAGE;
  const lastPage = Math.ceil(postsData.length / POSTS_PER_PAGE);

  const [postsSortedByTags, setPostsSortedByTags] = useState(postsData.filter(post => post.id !== mainPost.id));

  const [postsToDisplay, setPostsToDisplay] = useState(
    postsSortedByTags.slice(offset, offset + POSTS_PER_PAGE),
  );

  const handleSimilarPostsPrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleSimilarPostsNext = () => {
    if (page < lastPage) {
      setPage(page + 1);
    }
  };

  //sort by tags from mainPost tags. The more tags match, the higher the post will. Sorting only once on mount
  useEffect(() => {
    console.log("called");
    setPostsSortedByTags(
      postsData.filter(post => post.id !== mainPost.id)
               .sort((a, b) => {
                 const aTags = a.tags.map(tag => tag.toLowerCase());
                 const bTags = b.tags.map(tag => tag.toLowerCase());
                 const mainPostTags = mainPost.tags.map(tag => tag.toLowerCase());
                 const aTagsCount = aTags.filter(tag => mainPostTags.includes(tag)).length;
                 const bTagsCount = bTags.filter(tag => mainPostTags.includes(tag)).length;
                 return bTagsCount - aTagsCount;
               }),
    );
  }, [mainPost.id, mainPost.tags]);

  useEffect(() => {
    setPostsToDisplay(
      postsSortedByTags.slice(offset, offset + POSTS_PER_PAGE),
    );
  }, [mainPost.id, mainPost.tags, offset, page, postsSortedByTags]);

  return (
    <section className={styles.similarPosts}>
      <div className={styles.posts}>
        {postsToDisplay.map(post => <SmallPost key={post.id} {...post}/>)}
      </div>
      <Pagination currentPage={page}
                  lastPage={lastPage}
                  handleNext={handleSimilarPostsNext}
                  handlePrevious={handleSimilarPostsPrevious}
                  handlePage={setPage}
      />
    </section>
  );
};

export default SimilarPosts;