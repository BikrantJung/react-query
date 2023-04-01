import React from "react";
import useTraditionalFetch from "./hooks/useTraditionalFetch";
import PostCard from "../PostCard";

function TraditionalPage() {
  const { data, isLoading } = useTraditionalFetch();
  if (isLoading) return <div>Loading.....</div>;
  if (!data) return <div>Data not found</div>;
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

export default TraditionalPage;
