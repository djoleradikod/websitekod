import React from 'react';
    import { motion } from 'framer-motion';

    function News() {
      return (
        <motion.div
          className="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>News</h1>
          <div className="section">
            <h2>Industry Updates</h2>
            <p>Stay informed with the latest news and developments in the world of data centers and virtualization.</p>
          </div>
          <div className="section">
            <h2>Upcoming Events</h2>
            <p>Join me at upcoming conferences and webinars where I will be speaking about the future of virtualization.</p>
          </div>
        </motion.div>
      );
    }

    export default News;
