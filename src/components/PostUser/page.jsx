import Image from "next/image";
import styles from "./postUser.module.css";

async function PostUser({userId}) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache:"no-store"});
  const user = await data.json();
  console.log(user)

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
}

export default PostUser;