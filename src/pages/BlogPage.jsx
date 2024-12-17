import React from "react";
import BlogCard from "../Components/blogscards/BlogCard";
import "../styles/blog.css";
import Breadcrumb from "../shared/breadcrumb/Breadcrumb";

function BlogPage() {
  return (
    <>
      <Breadcrumb buttonText={"Blog"} title={"BLOG STANDARD"}/>
      <BlogCard />
    </>
  );
}

export default BlogPage;
