"use client"

import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/PostUser/page";
import { Suspense } from "react";

const SinglePostPage = async ({ params }) => {
  
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`, {cache:"no-store"});
  const fetchedData = await data.json();
  console.log(fetchedData)
  
  return (
    <div className={styles.container}>
      {/* {post.img && ( */}
        <div className={styles.imgContainer}>
        <Image src="/noavatar.png" alt="" height={100} width={200} />
        </div>
      {/* )} */}
      
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{fetchedData.title}</h1>
        <div className={styles.detail}>
        <Suspense fallback={<div>Loading...</div>}>
        <PostUser userId={fetchedData.userId} />
        </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              2023/1/10
            </span>
          </div>
        </div>
        <div className={styles.content}>
          {
            fetchedData.body
          }
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
