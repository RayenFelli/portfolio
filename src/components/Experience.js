import React from 'react';

const Experience = ({ title, description, dates }) => {
  return (
    <div className="experience">
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{dates}</span>
    </div>
  );
};

export default Experience;
