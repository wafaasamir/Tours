import React from "react";
import { BrowserRouter } from "react-router-dom";
import BlogCard from "../Components/blogscards/BlogCard";
import "../styles/blog.css";

function BlogPage() {
  return (
    <BrowserRouter>
      <BlogCard />
    </BrowserRouter>
  );
}

export default BlogPage;
