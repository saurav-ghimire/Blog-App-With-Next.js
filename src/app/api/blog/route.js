import { Post } from "@/lib/models";
import { initializeDb } from "@/lib/utils";
import { NextResponse } from "next/server";


export const GET = async (request) => {
  try{
    initializeDb();
    const PostData = await Post.find();
    return NextResponse.json(PostData);
  }
  catch(err){
    console.log(err);
    throw new Error("Failed to fetch the post");
  }
}