import PostCard from "@/components/PostCard/PostCard";
import styles from './blog.module.css'
import { getPosts } from "@/lib/data";


async function Blog() {
  
const post = await getPosts();
  return <>
  <div className={styles.container}>
    {
      post.map(data => (
        <div className={styles.post}>
            <PostCard data={data} key={data.id} />
          </div>
      ))
    }
  </div>
  </>;
}

export default Blog;