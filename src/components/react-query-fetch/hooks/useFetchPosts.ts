import { useQuery } from "@tanstack/react-query";
import { PostsEntity } from "../../../types";
import { axios } from "../../../lib/axios";

async function getPosts(): Promise<PostsEntity[]> {
  const { data } = await axios.get("posts/");
  return data;
}

export const useFetchPosts = () => {
  return useQuery(["posts"], getPosts, {
    onError() {
      console.log("OPPS ERROR FOUND");
    },
  });
};
