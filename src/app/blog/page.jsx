import PostCard from "@/components/PostCard/PostCard";
import styles from './blog.module.css'
import { getPosts } from "@/lib/data";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog",{next:{revalidate:3600}});
  return res.json();
}

async function Blog() {
  const post = await getData();
// const post = await getPosts();
console.log('test')
  return <>
  <div className={styles.container}>
    {
      post.map(data => (
        <div className={styles.post}>
          
            <PostCard key={data.id} data={data} />
          </div>
      ))
    }
  </div>
  </>;
}

export default Blog;