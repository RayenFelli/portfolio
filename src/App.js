import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Container, Header, Main, NameSection, AnimationSection, Section, ProjectsContainer, ProjectCircle, SkillsSection, SkillName, ContactSection } from './components/StyledComponents';
import Model from './components/Model';
import MouseTrail from './components/MouseTrail'; // Import MouseTrail

const skills = [
  { name: 'Angular', logo: '/images/angular.png' },
  { name: 'JavaScript', logo: '/images/js.png' },
  { name: 'Python', logo: '/images/python.png' },
  { name: 'Blender', logo: '/images/blender.png' },
  { name: 'HTML', logo: '/images/html.png' },
  { name: 'CSS', logo: '/images/css.png' },
  { name: 'C++', logo: '/images/c++.png' },
  { name: 'Java', logo: '/images/java.png' },
  { name: 'SQL', logo: '/images/sql.png' },
];

const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/Felli.rayen.1', icon: '/images/facebook.png' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/felli-rayen-94b98b254/', icon: '/images/link.png' },
  { name: 'GitHub', url: 'https://github.com/RayenFelli', icon: '/images/gith.png' },
];

const App = () => {
  const [selectedSkill, setSelectedSkill] = useState('');

  return (
    <Container>
      <MouseTrail /> {/* Add MouseTrail */}
      <Header>
        <div className="logo">
          <img src="/images/Rayen.png" alt="Logo" />
          <h1>Mon Portfolio</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#skills">Skills & Tools</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </Header>
      <Main>
        <NameSection>
          <div>
            <motion.h2 whileHover={{ scale: 1.1 }}>Rayen Felli</motion.h2>
            <motion.h3 whileHover={{ scale: 1.1 }}>Software Fantasist</motion.h3>
            <motion.p whileHover={{ scale: 1.05 }}>
            I am a computer science student with a passion for software development.
               I have varied experiences in several areas of IT, including web development
               and 3D animations. My goal is to create innovative and effective solutions.  
            </motion.p>
            <button onClick={() => window.open('/cv.pdf', '_blank')}>
              Voir Mon CV
            </button>
          </div>
        </NameSection>
        <AnimationSection>
          <div className="circle" />
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Model />
          </Canvas>
        </AnimationSection>
      </Main>
      <Section id="projects">
        <motion.h2 whileHover={{ scale: 1.1 }}>Projets</motion.h2>
        <ProjectsContainer>
          <ProjectCircle>
            <img src="/images/rr.png" alt="Fast Food App" />
            <p>Création d'une application<br></br>de fast food</p>
          </ProjectCircle>
          <ProjectCircle>
            <img src="/images/projet2.png" alt="E-commerce Site" />
            <p>Création d'un site de<br></br>vente en ligne</p>
          </ProjectCircle>
          <ProjectCircle>
            <img src="/images/tdd.png" alt="3D Animation" />
            <p>Création d'une<br></br>animation en 3D</p>
          </ProjectCircle>
        </ProjectsContainer>
      </Section>
      <SkillsSection id="skills">
        <motion.h2 whileHover={{ color: '#61dafb' }}>Skills & Tools</motion.h2><br></br>
        <div className="skills-wrapper">
          <div className="skills-container rotate">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item"
                onMouseEnter={() => setSelectedSkill(skill.name)}
                onMouseLeave={() => setSelectedSkill('')}
              >
                <img src={skill.logo} alt={skill.name} />
              </div>
            ))}
          </div>
          <SkillName>
            {selectedSkill}
          </SkillName>
        </div>
      </SkillsSection>
      <ContactSection id="contact">
        <h2>Contact</h2>
        <div className="social-icons">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
              <img src={social.icon} alt={social.name} />
            </a>
          ))}
        </div>
      </ContactSection>
    </Container>
  );
};

export default App;
