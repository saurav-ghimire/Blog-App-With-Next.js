
import styles from "./singlePost.module.css";
const SinglePostPage = ({ post }) => {
  return (
    <div className={styles.container}>
      {/* {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )} */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title Here</h1>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              2023/1/10
            </span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima accusamus nihil minus, inventore, labore nobis aliquam quia veniam dignissimos, asperiores id unde sint tempora ullam voluptate ut numquam eius sed?
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
