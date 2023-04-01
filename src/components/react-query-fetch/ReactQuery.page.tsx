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
  const { data, isLoading } = useQuery<PostsEntity[]>(["posts"], getPosts);
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
