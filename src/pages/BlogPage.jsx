import React from "react";
import BlogCard from "../Components/blogscards/BlogCard";
import "../styles/blog.css";
import Breadcrumb from "../shared/breadcrumb/Breadcrumb";
import Newsletter from "../shared/newsletter/Newsletter";

function BlogPage() {
  return (
    <>
      <Breadcrumb buttonText={"Blog"} title={"BLOG STANDARD"}/>
      <BlogCard />
      <Newsletter />
    </>
  );
}

export default BlogPage;
