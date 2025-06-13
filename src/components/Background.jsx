import React, { useEffect, useRef } from 'react';

function Background() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const scaleFactor = 1 / 20;
      const shapes = containerRef.current.querySelectorAll(".shape");
      const x = event.clientX * scaleFactor;
      const y = event.clientY * scaleFactor;

      shapes.forEach((shape, i) => {
        const isOdd = i % 2 !== 0;
        const direction = isOdd ? -1 : 1;
        shape.style.transform = `translate(${x * direction}px, ${y * direction}px) rotate(${x * direction * 10}deg)`;
      });
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="w-screen h-screen absolute dark:bg-black dark:bg-transparent">
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