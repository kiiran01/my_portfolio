import { Project, Skill, Experience, Education, SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Sales Dashboard Analysis',
    description: 'Interactive dashboard visualizing key sales metrics and trends across regions, providing actionable insights for sales teams.',
    image: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'dashboard',
    tools: ['Tableau', 'SQL', 'Excel'],
    demoLink: '#',
    githubLink: '#',
    featured: true
  },
  {
    id: '2',
    title: 'Customer Segmentation Study',
    description: 'Applied K-means clustering to identify distinct customer segments, enabling personalized marketing strategies.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'machine-learning',
    tools: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib'],
    demoLink: '#',
    githubLink: '#',
    featured: true
  },
  {
    id: '3',
    title: 'Market Trend Analysis',
    description: 'Time series analysis of market trends using ARIMA models to forecast future market movements with 85% accuracy.',
    image: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'analysis',
    tools: ['R', 'Tidyverse', 'ggplot2', 'Prophet'],
    demoLink: '#',
    githubLink: '#',
    featured: true
  },
  {
    id: '4',
    title: 'Predictive Modeling Project',
    description: 'Developed a machine learning model to predict customer churn with 92% accuracy, helping reduce customer attrition by 15%.',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'machine-learning',
    tools: ['Python', 'TensorFlow', 'Keras', 'Pandas'],
    demoLink: '#',
    githubLink: '#',
    featured: true
  },
  {
    id: '5',
    title: 'Supply Chain Optimization',
    description: 'Analyzed supply chain data to identify bottlenecks and implemented optimization strategies that reduced costs by 12%.',
    image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'analysis',
    tools: ['Python', 'NetworkX', 'Gurobi', 'Excel'],
    demoLink: '#',
    githubLink: '#',
    featured: false
  },
  {
    id: '6',
    title: 'Financial Data Visualization',
    description: 'Created interactive visualizations of financial data to help stakeholders understand complex patterns and make data-driven decisions.',
    image: 'https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'data-visualization',
    tools: ['D3.js', 'JavaScript', 'HTML/CSS'],
    demoLink: '#',
    githubLink: '#',
    featured: false
  }
];

export const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'programming' },
  { name: 'R', level: 85, category: 'programming' },
  { name: 'JavaScript', level: 75, category: 'programming' },
  { name: 'SQL', level: 95, category: 'database' },
  { name: 'Tableau', level: 90, category: 'visualization' },
  { name: 'Power BI', level: 85, category: 'visualization' },
  { name: 'Excel', level: 95, category: 'tools' },
  { name: 'Machine Learning', level: 80, category: 'data-analysis' },
  { name: 'Statistical Analysis', level: 90, category: 'data-analysis' },
  { name: 'Data Cleaning', level: 95, category: 'data-analysis' },
  { name: 'Data Visualization', level: 90, category: 'visualization' },
  { name: 'PostgreSQL', level: 85, category: 'database' },
  { name: 'MongoDB', level: 70, category: 'database' },
  { name: 'Pandas', level: 95, category: 'tools' },
  { name: 'NumPy', level: 90, category: 'tools' },
  { name: 'scikit-learn', level: 85, category: 'tools' }
];

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Senior Data Analyst',
    company: 'TechVision Analytics',
    location: 'Kathmandu, Nepal',
    startDate: '2022-03',
    endDate: null,
    description: [
      'Lead a team of 5 data analysts in developing and maintaining interactive dashboards',
      'Reduced data processing time by 40% through implementation of optimized ETL processes',
      'Developed predictive models resulting in 15% increase in customer retention'
    ]
  },
  {
    id: '2',
    role: 'Data Analyst',
    company: 'DataDrive Solutions',
    location: 'Pokhara, Nepal',
    startDate: '2019-06',
    endDate: '2022-02',
    description: [
      'Analyzed customer behavior data to identify trends and patterns',
      'Created interactive dashboards using Tableau for executive leadership',
      'Collaborated with marketing team to optimize campaign performance'
    ]
  },
  {
    id: '3',
    role: 'Business Intelligence Intern',
    company: 'Insight Analytics',
    location: 'Lalitpur, Nepal',
    startDate: '2018-09',
    endDate: '2019-05',
    description: [
      'Assisted in development of SQL queries for data extraction and analysis',
      'Created automated reports for weekly business reviews',
      'Supported data cleaning and preparation efforts for analysis projects'
    ]
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Master of Science in Data Science',
    institution: 'Tribhuvan University',
    location: 'Kathmandu, Nepal',
    startDate: '2017',
    endDate: '2019',
    description: 'Focused on machine learning, statistical methods, and data visualization. Thesis on predictive modeling for customer behavior.'
  },
  {
    id: '2',
    degree: 'Bachelor of Science in Statistics',
    institution: 'Kathmandu University',
    location: 'Dhulikhel, Nepal',
    startDate: '2013',
    endDate: '2017',
    description: 'Minor in Computer Science. Research assistant in the Data Mining Lab.'
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/',
    icon: 'Linkedin'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/',
    icon: 'Github'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/',
    icon: 'Twitter'
  },
  {
    platform: 'Email',
    url: 'mailto:contact@kiran.com.np',
    icon: 'Mail'
  }
];

export const aboutMe = {
  name: 'Kiran',
  title: 'Data Scientist & Analyst',
  tagline: 'Transforming raw data into actionable insights',
  bio: `I'm a passionate data scientist with over 5 years of experience in transforming complex datasets into clear, actionable business insights. My expertise spans statistical analysis, machine learning, and data visualization.

I specialize in developing predictive models and creating interactive dashboards that help businesses make data-driven decisions. With a background in both statistics and computer science, I bridge the gap between technical analysis and business strategy.

When I'm not diving into datasets, you can find me contributing to open-source data science projects, mentoring aspiring data analysts, or exploring new visualization techniques.`
};