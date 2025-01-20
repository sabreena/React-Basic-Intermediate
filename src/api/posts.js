import { baseApi } from "./base"

export function getPosts(options) {
  return baseApi.get("posts", options).then(res => res.data)
}

export function getPost(postId, options) {
  return baseApi.get(`posts/${postId}`, options).then(res => res.data)
}

export function createPost(data, options) {
  // Post data to the Posts route.
  // post is a request here
  return baseApi.post("posts", data, options).then(res => res.data)
}

export function updatePost(postId, data, options) {
  // Here we call put method to update the post
  return baseApi.put(`posts/${postId}`, data, options).then(res => res.data)
}

export function deletePost(postId, options) {
  return baseApi.delete(`posts/${postId}`, options).then(res => res.data);
}
