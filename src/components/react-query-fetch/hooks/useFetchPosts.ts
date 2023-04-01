import { useQuery } from "@tanstack/react-query";
import { PostsEntity } from "../../../types";
import { axios } from "../../../lib/axios";

async function getPosts(): Promise<PostsEntity[]> {
  return await axios.get("posts/");
}

export const useFetchPosts = () => {
  return useQuery(["posts"], getPosts, {
    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
  });
};
const { data } = useFetchPosts();
