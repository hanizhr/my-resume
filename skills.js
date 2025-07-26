import React from 'react';

const Skills = () => {
  const skills = {
    "Frontend": ["HTML", "CSS", "JavaScript", "React", "jQuery"],
    "Backend": ["Node.js", "Express.js"],
    "Mobile Development": ["Flutter"],
    "Programming Languages": ["Python"],
    "Databases": ["SQL", "PostgreSQL"],
    "Version Control & DevOps": ["GitHub", "GitLab"],
    "API & Integration": ["REST API"],
    "Blockchain & Web3": ["Web3", "NFTs", "ACP"]
  };

  return (
    <div className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-list">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <ul>
              {items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
