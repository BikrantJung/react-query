import React, { useEffect, useState } from "react";
import { axios } from "../../../lib/axios";
import { PostsEntity } from "../../../types";

const useTraditionalFetch = () => {
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState<PostsEntity[]>([]);

  useEffect(() => {
    axios.get("posts/").then((res) => {
      setData(res.data);
      setisLoading(false);
    });
  }, []);

  return { isLoading, data };
};

export default useTraditionalFetch;
