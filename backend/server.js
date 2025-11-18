const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const portfolioData = {
  personalInfo: {
    name: "Kseniia Lukanina",
    title: "Full-Stack Developer",
    email: "kseniia.lukanina@outlook.com",
    location: "Stockholm, Sweden",
    description: "Full-Stack Developer bringing ideas to life through creativity and code. Thanks for visiting — I'm really happy to have you here!"
  },
  skills: [
    { skill: "JavaScript", ratingPercentage: 90 },
    { skill: "React", ratingPercentage: 85 },
    { skill: "TypeScript", ratingPercentage: 80 },
    { skill: "Vue.js", ratingPercentage: 80 },
    { skill: "C#", ratingPercentage: 80 },
    { skill: "Node.js", ratingPercentage: 75 },
    { skill: "Express.js", ratingPercentage: 70 },
    { skill: "Tailwind CSS", ratingPercentage: 85 },
    { skill: "Bootstrap", ratingPercentage: 80 },
    { skill: "SASS/SCSS", ratingPercentage: 70 },
    { skill: "MongoDB", ratingPercentage: 60 },
    { skill: "SQLite", ratingPercentage: 80 }
  ],
  experience: [
    {
      company: "Stryda",
      position: "Frontend Developer",
      duration: "01/2023 – 07/2023",
      description: "As a frontend developer at Stryda, I was a vital part of a team that's building a platform for the company's business insight team. Our development stack consisted of React, TypeScript, Tailwind, and Figma. We aimed to design an intuitive user interface with a strong focus on usability and data visualisation that helped streamline the team's workflow and reduce their manual workload. We were committed to producing high-quality code, so I was responsible for writing efficient and scalable code, as well as conducting PR reviews on my colleagues' code."
    },
    {
      company: "Nilo Collaborations",
      position: "Frontend Developer",
      duration: "08/2022 – 12/2022",
      description: "At Nilo Collab, I have been engaged in ongoing JavaScript (React) development. This work has been quite extensive, with a significant portion dedicated to designing in Figma and implementing the design by writing code in Visual Studio Code."
    }
  ],
  education: [
    {
      institution: "ChasAcademy",
      degree: ".Net Developer",
      duration: "2024-2026"
    },
    {
      institution: "IT-Högskolan",
      degree: "JavaScript Developer",
      duration: "2021-2023"
    },
    {
      institution: "St. Petersburg State University of Telecommunications",
      degree: "Bachelor's Degree in International Relations and Affairs",
      duration: "2013-2017"
    }
  ],
  projects: [
    {
      title: "BattlePass Platform",
      description: "The Battle Pass page for the Stryda website, built with React, TypeScript, and Tailwind CSS.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveLink: "https://play.stryda.gg/home",
      image: "BattlePass.png"
    },
    {
      title: "Nilo Collaboration Platform",
      description: "At Nilo Collab, I work on continuous JavaScript (React) development and contribute to the visual side as well — designing and creating components and styles in Figma.",
      technologies: ["Figma", "React", "JavaScript"],
      liveLink: "https://www.nilocollab.com/",
      image: "Nilo.png"
    },
    {
      title: "CV Management API",
      description: "Architected and developed a robust REST API using ASP.NET Core for comprehensive CV data management. Implemented SQL Server database integration with Entity Framework, delivering full CRUD operations with optimized performance.",
      technologies: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework", "REST API"],
      image: "RestAPICV.png"
    }
  ],
  interests: [
    {
      title: "Dance & Movement",
      description: "Passionate dancer specializing in jazz funk, contemporary, and hip-hop styles. Dance serves as both creative expression and physical wellness, bringing balance and inspiration to my professional life."
    },
    {
      title: "Photography & Visual Arts",
      description: "I love capturing moments through my lens — photography isn't just a hobby, it's another way I tell stories. Every now and then, I step behind the camera for gigs and bring ideas to life through photos."
    }
  ]
};

app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.get('/api/portfolio/personal', (req, res) => {
  res.json(portfolioData.personalInfo);
});

app.get('/api/portfolio/skills', (req, res) => {
  res.json(portfolioData.skills);
});

app.get('/api/portfolio/experience', (req, res) => {
  res.json(portfolioData.experience);
});

app.get('/api/portfolio/education', (req, res) => {
  res.json(portfolioData.education);
});

app.get('/api/portfolio/projects', (req, res) => {
  res.json(portfolioData.projects);
});

app.get('/api/portfolio/interests', (req, res) => {
  res.json(portfolioData.interests);
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    console.log('Contact form submission:', { name, email, message });
    
    res.json({ success: true, message: 'Thank you for your message! I will get back to you soon.' });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ error: 'Failed to process contact form' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio API is running' });
});

const buildPath = path.join(__dirname, '../client/build');
app.use(express.static(buildPath));

app.get('*', (req, res) => {
  const indexPath = path.join(buildPath, 'index.html');
  const fs = require('fs');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).json({ 
      error: 'React app not built. In development, the React app runs on port 3000. For production, run npm run build in the client directory.' 
    });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});