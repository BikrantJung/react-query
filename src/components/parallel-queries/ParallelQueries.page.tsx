import React from "react";
import { useFetchPosts } from "../react-query-fetch/hooks/useFetchPosts";
import { useFetchUsers } from "./hooks/useParallelQueries";

function ParallelQueries() {
  // Parallel Queries are same as calling queries twice.
  const {} = useFetchPosts();
  const {} = useFetchUsers();
  return <div>ParallelQueries</div>;
}

export default ParallelQueries;
