import React from 'react';
    import { useParams } from 'react-router-dom';
    import { motion } from 'framer-motion';

    const blogPosts = [
      { id: 1, title: 'Post One', content: 'Full content of post one.' },
      { id: 2, title: 'Post Two', content: 'Full content of post two.' },
      { id: 3, title: 'Post Three', content: 'Full content of post three.' },
      // Add more posts as needed
    ];

    function BlogPost() {
      const { id } = useParams();
      const post = blogPosts.find((post) => post.id === parseInt(id));

      return (
        <motion.div
          className="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </motion.div>
      );
    }

    export default BlogPost;
