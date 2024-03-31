import PostCard from "@/components/PostCard/PostCard";
import styles from './blog.module.css'

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',{next:{revalidate:3600}})
  return res.json();
}
async function Blog() {
  const post = await getData();


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