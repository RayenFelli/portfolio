import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Section = ({ children, id }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Déclenche l'animation lorsque 10% de la section est visible
    triggerOnce: true, // Déclenche l'animation une seule fois
  });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Section;
