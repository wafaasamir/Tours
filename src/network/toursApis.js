// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// // fetch Posts data
// export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   return response.data;
// });

// // adding new post
// export const addPost = createAsyncThunk("posts/addPost", async (postInfo) => {
//   const response = await axios.post(
//     "https://jsonplaceholder.typicode.com/posts",
//     postInfo
//   );
//   return response.data;
// });

// // deleting post
// export const deletePost = createAsyncThunk("posts/deletePost", async (postId) => {
//   const response = await axios.delete(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`,
//   );
//   return postId;
// });

// // fetch specific post data
// export const fetchPostDetails = createAsyncThunk("posts/fetchPostDetails", async (postId) => {
//   const response = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`,
//   );
//   return response.data;
// });


