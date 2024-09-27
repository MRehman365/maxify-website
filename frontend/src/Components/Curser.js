import React from 'react';

const Curser = () => {
  const { useEffect, useState } = React;
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove);
  };

  const onMouseMove = (e) => {
    // Adjust for the 70px margin-top of the page
    setPosition({ x: e.pageX + 10, y: e.pageY - 60 });
  };

  return (
    <div className='sm:hidden md:block  w-full'>
      <div 
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        className="cursor overflow-hidden w-full"
      ></div>
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        className="cursor-follower"
      ></div>
    </div>
  );
};

export default Curser;
