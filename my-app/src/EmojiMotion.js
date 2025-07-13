import React, { useState } from 'react';
import { motion } from 'framer-motion';

function EmojiMotion() {
  const [start, setStart] = useState(false);

  const handleClick = () => {
    setStart(true); // Motion शुरू करो
  };

  return (
    <div
      style={{
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#f0f0f0',
      }}
    >
      <motion.div
        initial={{ y: 400, opacity: 4 }}
        animate={start ? { y: -100, opacity: 1 } : {}}
        transition={{
          duration: 2,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        😊
      </motion.div>

      <div style={{ position: 'absolute', bottom: '50px', width: '100%', textAlign: 'center' }}>
        <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '1rem' }}>
          Click to Move Emoji Up
        </button>
      </div>
    </div>
  );
}

export default EmojiMotion;
