import { Router, useRouter } from "next/router";

const Post = () => {
  const Router = useRouter();
  const { post } = Router.query;
  return <h1>{post}</h1>;
};

export default Post;
