import React from "react";
import { PostsEntity } from "../types";
function PostCard({ post_id, post_likes, post_title, post_user }: PostsEntity) {
  return (
    <div className="p-2  max-w-sm border shadow">
      <h1 className="font-semibold text-gray-800">{post_title}</h1>
      <p className="text-xs">
        Posted by: <span className="font-medium">{post_user}</span>
      </p>
    </div>
  );
}

export default PostCard;
