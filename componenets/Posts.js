import Post from "@/styles/Posts.module.css";
import Link from "next/link";
import Post_Data from "./data";
import Image from "next/image";

const Posts = (props) => {
  const Data = Post_Data.map((post) => {
    return (
      <div className={Post.Post} key={post.id}>
        <div>
          <Image
            src="/Logo.jpg"
            width={100}
            height={100}
            alt="Blog Post Image"
          />
        </div>
        <div className={Post.Body}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </div>
    );
  });

  return <div className={Post.Blog}>{Data}</div>;
};

export default Posts;
