// ReadySetDoneAnimation.tsx

import React from 'react';


const ReadySetDoneAnimation: React.FC = () => {
  return (
    // Changed from div to h3 to match your About section structure
    <h3 className='animateContainer'>
      <span>Ready ... </span>
      <span>Set... </span>
      <span>Done!</span>
    </h3>
  );
};

export default ReadySetDoneAnimation;