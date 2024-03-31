import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"


const PostCard = ({data}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
      <Image src="/noavatar.png" alt="" height={100} width={200} />
        <span className={styles.date}>2016/10/12</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.desc}>{data.body}</p>
        <Link className={styles.link} href={`/blog/${data.id}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard