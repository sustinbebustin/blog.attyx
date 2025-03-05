import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Sidebar.css';

// This is our blog post data
// In a real application, you might fetch this from Firebase or another data source
const blogPosts = [
  {
    id: 'contact-views',
    title: 'How to Set Up Contact Views',
    icon: '📋'
  },
  {
    id: 'discovery-questions',
    title: 'Discovery Questions Guide',
    icon: '🔎'
  }
];

const Sidebar = () => {
  const { viewId } = useParams();
  
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Blog Posts</h3>
      </div>
      <ul className="sidebar-menu">
        {blogPosts.map(post => (
          <li key={post.id} className={viewId === post.id ? 'active' : ''}>
            <Link to={`/${post.id}`}>
              <span className="post-icon">{post.icon}</span>
              <span className="post-title">{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar; 