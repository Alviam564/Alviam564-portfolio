import React, { useEffect, useRef } from 'react';

function Background() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const scaleFactor = 1 / 20;
      const x = event.clientX * scaleFactor;
      const y = event.clientY * scaleFactor;
      
      const shapes = document.querySelectorAll(".shape");
      shapes.forEach((shape, i) => {
        const isOdd = i % 2 !== 0;
        const direction = isOdd ? -1 : 1;
        shape.style.transform = `translate(${x * direction}px, ${y * direction}px) rotate(${x * direction * 10}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
    return (
    <div className="w-screen h-screen fixed dark:bg-black invisible md:visible pointer">
      <img src="/assets/squiggly.svg" className="shape fixed shape-0" alt=''/>
      <img src="/assets/circle.svg" className="shape fixed shape-1" alt=''/>
      <img src="/assets/squiggly.svg" className="shape fixed shape-2" alt=''/>
      <img src="/assets/circle.svg" className="shape fixed shape-3" alt=''/>
      <img src="/assets/triangle.svg" className="shape fixed shape-4" alt=''/>
      <img src="/assets/circle.svg" className="shape fixed shape-5" alt=''/>
      <img src="/assets/squiggly.svg" className="shape fixed shape-6" alt=''/>
      <img src="/assets/circle.svg" className="shape fixed shape-7" alt=''/>
      <img src="/assets/squiggly.svg" className="shape fixed shape-8" alt=''/>
    </div>
  )
}

export default Background