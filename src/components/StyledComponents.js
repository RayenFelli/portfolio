import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  min-height: 100vh;
  color: #fff;
`;

export const Header = styled.header`
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  padding: 1rem;
  color: white;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 2px -2px gray;

  .logo {
    display: flex;
    align-items: center;
  }

  .logo img {
    width: 120px; /* Adjusted width for a larger logo */
    height: auto; /* Maintain aspect ratio */
    margin-right: 1rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  nav ul li {
    display: inline;
  }

  nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
    &:hover {
      color: #61dafb;
    }
  }
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 80px);
  padding: 2rem;
`;

export const NameSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding-right: 2rem;

  div {
    max-width: 500px;
  }

  h2 {
    font-size: 4rem;
    color: #f5f5f5;
    margin: 0;
    font-weight: 700;
    &:hover {
      color: #61dafb;
      transition: color 0.3s ease;
    }
  }

  h3 {
    font-size: 2rem;
    color: #bbb;
    margin: 0;
    font-weight: 600;
    &:hover {
      color: #61dafb;
      transition: color 0.3s ease;
    }
  }

  p {
    margin-top: 1rem;
    font-size: 1.2rem;
    line-height: 1.5;
    color: #ddd;
    font-weight: 400;
    &:hover {
      color: #61dafb;
      transition: color 0.3s ease;
    }
  }

  button {
    margin-top: 2rem;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
    background-color: #1e3d58; /* Navy blue */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #16324f; /* Darker navy blue */
    }
  }
`;

export const AnimationSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;

  .circle {
    position: absolute;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    background: rgba(34, 193, 195, 0.3); /* Blue/Green color with transparency */
    z-index: -1;
    transition: background 0.3s ease;
  }

  &:hover .circle {
    background: rgba(34, 193, 195, 0.5); /* Slightly darker blue/green */
  }

  canvas {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const Section = styled.section`
  padding: 2rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #f5f5f5;
    font-weight: 700;
    transition: transform 0.3s ease, color 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
      color: #61dafb;
    }
  }

  p {
    font-size: 1.2rem;
    color: #ddd;
    font-weight: 400;
  }
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem auto;
  max-width: 800px;
`;

export const ExperienceItem = styled.div`
  background: #333;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.5rem;
    color: #f5f5f5;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    color: #ddd;
    font-weight: 400;
  }

  span {
    color: gray;
    font-style: italic;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`;

export const ProjectCircle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: linear-gradient(135deg, #11998e, #38ef7d); /* Green gradient */
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #38ef7d, #11998e); /* Inverse green gradient */
  }

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
    animation: spin 5s linear infinite;

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  }

  p {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    color: white;
    font-family: 'Georgia, serif';
    text-align: center;
    font-weight: 600;
  }
`;

export const SkillsSection = styled.section`
  padding: 2rem;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2.5rem;
    color: #f5f5f5;
    margin-bottom: 1rem;
    font-weight: 700;
    transition: color 0.3s ease;
    
    &:hover {
      color: #61dafb;
    }
  }

  .skills-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .skills-container {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 0 auto;
    animation: rotate 20s linear infinite; /* Ensure this animation is applied to the container */
  }

  .skill-item {
    position: absolute;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .skill-item img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .skills-container .skill-item:nth-child(1) {
    top: 50%;
    left: 0%;
    transform: translate(-50%, -50%);
  }

  .skills-container .skill-item:nth-child(2) {
    top: 15%;
    left: 15%;
    transform: translate(-50%, -50%);
  }

  .skills-container .skill-item:nth-child(3) {
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .skills-container .skill-item:nth-child(4) {
    top: 15%;
    left: 85%;
    transform: translate(-50%, -50%);
  }

  .skills-container .skill-item:nth-child(5) {
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
  }

  .skills-container .skill-item:nth-child(6) {
    top: 85%;
    left: 85%;
    transform: translate(-50%, -50%);
  }

  .skills-container .skill-item:nth-child(7) {
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .skills-container .skill-item:nth-child(8) {
    top: 85%;
    left: 15%;
    transform: translate(-50%, -50%);
  }

  .skills-container .skill-item:nth-child(9) {
    top: 50%;
    left: 0%;
    transform: translate(-50%, -50%);
  }
`;

export const SkillName = styled.div`
  font-size: 2rem;
  color: #f5f5f5;
  text-align: center;
  width: 200px;
  margin-left: 2rem;
`;

export const ContactSection = styled.section`
  padding: 2rem;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #f5f5f5;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
  }

  .social-icons img {
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
  
`;
