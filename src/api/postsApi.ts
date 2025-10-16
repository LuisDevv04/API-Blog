import axiosClient from "./axiosClient";
import type { Post } from "../types/post";

export const postsApi = {
  getAll: () => axiosClient.get<Post[]>("/posts"),
  getById: (id: number) => axiosClient.get<Post>(`/posts/${id}`),
  create: (data: Post) => axiosClient.post<Post>("/posts", data),
};
