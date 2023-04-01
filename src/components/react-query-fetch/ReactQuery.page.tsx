import PostCard from "../PostCard";
import { useFetchPosts } from "./hooks/useFetchPosts";

function ReactQuery() {
  const { data, isLoading } = useFetchPosts();

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
