import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { blogs } from './Blog';
import './blogdetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) {
    return <div className="blogdetail-section"><h2>Blog not found</h2></div>;
  }

  return (
    <section className="blogdetail-section">
      <img src={blog.img} alt={blog.title} className="blogdetail-img-full" />
      <div className="blogdetail-content-full">
        <h1 className="blogdetail-title">{blog.title}</h1>
        <div className="blogdetail-meta">
          <span>{blog.date}</span>
          <span>• {blog.author}</span>
          <span>• {blog.location}</span>
          <span>• {blog.readingTime}</span>
        </div>
        <div className="blogdetail-tags">
          {blog.tags.map(tag => <span key={tag} className="blogdetail-tag">{tag}</span>)}
        </div>
        <p className="blogdetail-fullcontent">{blog.fullContent}</p>
        <button className="blogdetail-backbtn" onClick={() => navigate(-1)}>Back to Blogs</button>
      </div>
    </section>
  );
};

export default BlogDetail; 