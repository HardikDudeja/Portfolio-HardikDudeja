import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    dp_world,
    tcs,
    lbb,
    vdb,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Machine Learning Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Enginner",
      company_name: "DP WORLD",
      icon: dp_world,
      iconBg: "#383E56",
      date: "July 2023 -  Present",
      points: [
        "Developing and maintaining web applications using Angular and other related technologies.",
      ],
    },
    {
      title: "Data Analyst Intern",
      company_name: "Virtual Diamond Boutique",
      icon: vdb,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - June 2023",
      points: [
        "Utilized various data analysis techniques: Employed statistical methods, data mining, and machine learning algorithms to extract valuable insights from complex datasets.",
        "Data visualization: Created visually appealing and informative charts, graphs, and visualizations to effectively communicate findings to stakeholders.",
        "Collaborated with cross-functional teams: Worked closely with teams across different departments to understand their data needs and provide analytical support.",
        "Data-driven recommendations: Provided data-driven insights and recommendations to guide strategic planning and improve business processes.",
        "Data exploration: Conducted exploratory data analysis to identify patterns, anomalies, and potential areas for improvement.",
        "Real-time data analysis: Developed real-time data processing solutions to provide up-to-date insights for time-sensitive decision-making."
      ],
    },
    {
      title: "Research Intern",
      company_name: "TCS Research",
      icon: tcs,
      iconBg: "#383E56",
      date: "May 2022 - July 202",
      points: [
        "Technology landscape assessment: Conducted a comprehensive assessment of the evolving technology landscape, analyzing trends, and identifying disruptive innovations that could impact TCS's business and industry.",
        "Feasibility studies: Performed detailed feasibility studies on the identified emerging technologies to assess their practicality, cost-effectiveness, and potential implementation challenges.",
        "Proof of Concept (POC) development: Collaborated with the SPOT team to develop proof of concepts for selected technologies, demonstrating their viability and showcasing their potential value to TCS and its clients.",
        "Technology partnerships: Explored and evaluated potential technology partnerships with startups, vendors, and research institutions, fostering innovation and augmenting TCS's capabilities.",
        "Risk assessment: Assessed the risks associated with adopting new technologies, providing risk mitigation strategies and ensuring compliance with relevant regulatory frameworks."
      ],
    },
    {
      title: "Data Analyst Intern",
      company_name: "Little Black Book",
      icon: lbb,
      iconBg: "#E6DEDD",
      date: "May 2021 - July 2021",
      points: [
        "Collaborative filtering algorithms: Implemented collaborative filtering algorithms, such as user-based or item-based collaborative filtering, to generate accurate product recommendations based on user behavior and preferences.",
        "A/B testing: Conducted A/B tests to validate the effectiveness of the recommender system, comparing user engagement metrics between users with and without the recommender system.",
        "Performance optimization: Optimized the recommender system's performance to ensure fast and efficient processing, allowing for seamless integration within the app's user interface.",
        "Increased user retention: Not only did the recommender system boost user engagement, but it also positively impacted user retention, as users found value in the personalized product recommendations."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };