import React from "react";
import { useQuery } from "@tanstack/react-query";
import { axios } from "../../lib/axios";
import { PostsEntity } from "../../types";
import PostCard from "../PostCard";

async function getPosts() {
  const { data } = await axios.get("posts/");
  return data;
}

function ReactQuery() {
  /**
   * Stale Time is the time data gets stale and again refetched on comonent mount
   * Cache Time is the time in which data will be deleted from the cache and again refetched
   */

  const { data, isLoading } = useQuery<PostsEntity[]>(["posts"], getPosts, {
    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
  });
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Data not Found</div>;
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="flex flex-col gap-4">
        {data.map((item) => {
          return <PostCard {...item} key={item.post_id} />;
        })}
      </div>
    </div>
  );
}

export default ReactQuery;
