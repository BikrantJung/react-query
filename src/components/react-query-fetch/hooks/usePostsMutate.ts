import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PostsEntity } from "../../../types";
import { axios } from "../../../lib/axios";

async function mutatePosts(data: Omit<PostsEntity, "id">) {
  return axios.post("posts/", data);
}

export const usePostsMutate = () => {
  const queryClient = useQueryClient();
  return useMutation(mutatePosts, {
    onError() {
      console.log("OPPS ERROR FOUND");
    },
    onSuccess: (data: any) => {
      // Add the new todo to the cache
      queryClient.setQueryData(["posts"], (oldData: unknown) => {
        const _old_data = oldData as PostsEntity[];
        // retu
        return [..._old_data, data.data];
      });
    },
  });
};
