import {useEffect, useState} from "react";
import postsData from "../../../../data/posts.json";
import styles from "./SimilarPosts.module.scss";
import Pagination from "../../other/Pagination/Pagination";
import SmallPost from "../../other/SmallPost/SmallPost";

const SIMILAR_POSTS_PER_PAGE = 6;
const SimilarPosts = ({mainPost}) => {

  const [similarPostsPage, setSimilarPostsPage] = useState(1);
  const similarPostsOffset = (similarPostsPage - 1) * SIMILAR_POSTS_PER_PAGE;
  const similarPostsLastPage = Math.ceil(postsData.length / SIMILAR_POSTS_PER_PAGE);

  const [similarPostsSortedByTags, setSimilarPostsSortedByTags] = useState(postsData);

  const [similarPostsToDisplay, setSimilarPostsToDisplay] = useState(
    similarPostsSortedByTags.slice(similarPostsOffset, similarPostsOffset + SIMILAR_POSTS_PER_PAGE),
  );

  const handleSimilarPostsPrevious = () => {
    if (similarPostsPage > 1) {
      setSimilarPostsPage(similarPostsPage - 1);
    }
  };

  const handleSimilarPostsNext = () => {
    if (similarPostsPage < similarPostsLastPage) {
      setSimilarPostsPage(similarPostsPage + 1);
    }
  };

  //sort by tags from mainPost tags. The more tags match, the higher the post will. Sorting only once on mount
  useEffect(() => {
    setSimilarPostsSortedByTags(
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
    setSimilarPostsToDisplay(
      similarPostsSortedByTags.slice(similarPostsOffset, similarPostsOffset + SIMILAR_POSTS_PER_PAGE),
    );
  }, [mainPost.id, mainPost.tags, similarPostsOffset, similarPostsPage, similarPostsSortedByTags]);

  return (
    <section className={styles.similarPosts}>
      <div className={styles.posts}>
        {similarPostsToDisplay.map(post => <SmallPost key={post.id} {...post}/>)}
      </div>
      <Pagination currentPage={similarPostsPage}
                  lastPage={similarPostsLastPage}
                  handleNext={handleSimilarPostsNext}
                  handlePrevious={handleSimilarPostsPrevious}
                  handlePage={setSimilarPostsPage}
      />
    </section>
  );
};

export default SimilarPosts;