import { useState } from "react";
import PostCard from "../PostCard";
import { useFetchPosts } from "./hooks/useFetchPosts";
import { PostsEntity } from "../../types";
import { usePostsMutate } from "./hooks/usePostsMutate";

function ReactQuery() {
  const { data, isLoading, refetch } = useFetchPosts();
  const {
    mutate,
    isLoading: isPosting,
    data: createPostData,
  } = usePostsMutate();
  const [title, setTitle] = useState("");
  const [user, setUser] = useState("");
  const [likes, setLikes] = useState("");
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Data not Found</div>;

  if (createPostData) console.log(createPostData, "Create post data");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const postData: Omit<PostsEntity, "id"> = {
      post_likes: +likes,
      post_title: title,
      post_user: user,
    };

    mutate(postData);
  }

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-xl mb-2">Add new Post</h1>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          className="border mx-2 p-1 text-sm"
          placeholder="Post Title"
          required
        />
        <input
          type="text"
          onChange={(e) => setUser(e.target.value)}
          className="border mx-2 p-1 text-sm"
          placeholder="Post User"
          required
        />
        <input
          type="number"
          onChange={(e) => setLikes(e.target.value)}
          className="border mx-2 p-1 text-sm"
          placeholder="Post Likes"
          required
        />
        <button className="bg-gray-900 text-white p-2" type="submit">
          {isPosting ? "Posting" : "Post"}
        </button>
      </form>
      <button onClick={() => refetch()} className="bg-gray-900 text-white p-2">
        Refetch
      </button>
      <div className="flex mt-12 flex-col gap-4">
        {data.map((item) => {
          return <PostCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default ReactQuery;
