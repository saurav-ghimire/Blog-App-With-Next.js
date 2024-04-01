"use client"

import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/PostUser/page";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

const SinglePostPage = async ({ params }) => {
  
  const fetchedData = await getPost(params.slug);
  console.log(fetchedData)
  
  return (
    <div className={styles.container}>
      {fetchedData.img && (
        <div className={styles.imgContainer}>
          <Image src={fetchedData.img} alt="" fill className={styles.img} />
        </div>
      )}
      
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{fetchedData.title}</h1>
        <div className={styles.detail}>
        {/* <Suspense fallback={<div>Loading...</div>}>
        <PostUser userId={fetchedData.userId} />
        </Suspense> */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              2023/1/10
            </span>
          </div>
        </div>
        <div className={styles.content}>
          {
            fetchedData.desc
          }
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
