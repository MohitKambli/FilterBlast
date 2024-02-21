import React from 'react';

const LoadingDot = ({ isLoading }) => {
  return <span className={`loading-dot ${isLoading ? 'blink' : ''}`}>.</span>
};

export default LoadingDot;