import React, { useEffect } from 'react';
import './MouseTrail.css';

const MouseTrail = () => {
  useEffect(() => {
    const trail = document.getElementById('mouse-trail');

    const moveTrail = (e) => {
      const { clientX: x, clientY: y } = e;
      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;
      trail.style.transform = `translate(${x + scrollX}px, ${y + scrollY}px)`;
    };

    window.addEventListener('mousemove', moveTrail);

    return () => {
      window.removeEventListener('mousemove', moveTrail);
    };
  }, []);

  return <div id="mouse-trail" />;
};

export default MouseTrail;
