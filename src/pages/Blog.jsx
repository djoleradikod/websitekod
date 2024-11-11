import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';

    const blogPosts = [
      { id: 1, title: 'Post One', excerpt: 'This is a short excerpt of post one.', date: '2023-10-01' },
      { id: 2, title: 'Post Two', excerpt: 'This is a short excerpt of post two.', date: '2023-09-25' },
      { id: 3, title: 'Post Three', excerpt: 'This is a short excerpt of post three.', date: '2023-09-20' },
      // Add more posts as needed
    ];

    const POSTS_PER_PAGE = 2;

    function Blog() {
      const [currentPage, setCurrentPage] = useState(1);

      const indexOfLastPost = currentPage * POSTS_PER_PAGE;
      const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
      const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

      const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

      return (
        <motion.div
          className="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Blog</h1>
          {currentPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-post-date">{post.date}</p>
              <p className="blog-post-excerpt">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="project-card-link">Read More</Link>
            </div>
          ))}
          <div className="pagination">
            {[...Array(totalPages)].map((_, index) => (
              <button key={index} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
        </motion.div>
      );
    }

    export default Blog;
