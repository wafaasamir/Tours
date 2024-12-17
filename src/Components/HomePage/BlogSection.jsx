import React from "react";
import"../../styles/blogsection.css";
import  passportImage from "../../assets/images/homepage/ticket.png";
import blog1Image from "../../assets/images/homepage/blog-1.jpg";
import blog2Image from "../../assets/images/homepage/blog-1-1.jpg";
import blog3Image from "../../assets/images/homepage/blog-1-2.jpg";

const BlogSection = () => {
  return (
    <section className="blog-section">
      <img
        src={passportImage}
        alt="Passport Illustration"
        className="decorative-passport"
      />
      <div className="container">
        <h2 className="section-title">Amazing news & blog for every update</h2>
        <div className="blog-wrapper">
          <div className="blog-card">
            <div className="blog-image">
              <img src={blog1Image} alt="Blog Image 1" />
              <span className="blog-tag">Adventure</span>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span>📅 June 14, 2024</span>
                <span>💬 12 Comments</span>
              </div>
              <h3 className="blog-title">
                You should See things when visiting Japan
              </h3>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-image">
              <img src={blog2Image} alt="Blog Image 2" />
              <span className="blog-tag">City Tours</span>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span>📅 Nov 21, 2023</span>
                <span>💬 06 Comments</span>
              </div>
              <h3 className="blog-title">
                A place where start new life with adventure travel
              </h3>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>
          <div className="blog-card">
            <div className="blog-image">
              <img src={blog3Image} alt="Blog Image 3" />
              <span className="blog-tag">Adventure</span>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span>📅 April 08, 2024</span>
                <span>💬 09 Comments</span>
              </div>
              <h3 className="blog-title">
                You should See things when visiting Japan
              </h3>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;