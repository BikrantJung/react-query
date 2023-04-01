import { axios } from "../../../lib/axios";
import { useQuery } from "@tanstack/react-query";
import { PostsEntity, UserEntity } from "../../../types";

async function getUsers(): Promise<UserEntity[]> {
  const { data } = await axios.get("users/");
  return data;
}
export const useFetchUsers = () => {
  return useQuery(["users"], getUsers, {
    onError() {
      console.log("OPPS ERROR FOUND");
    },
  });
};
