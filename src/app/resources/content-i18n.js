import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Rutam",
  lastName: "Bhagat",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "LLM Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // IANA time zone identifier for India
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about LLM's, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/RutamBhagat",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rutam-bhagat/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/rutamstwt",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:rutambhagat@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `Rutam Bhagat's Portfolio`,
  description: `Portfolio website showcasing my work as a Fullstack Developer and AI enthusiast`,
  headline: <>AI-powered solutions and fullstack development</>,
  subline: (
    <>
      I'm Rutam a GenAI Backend Developer focused on crafting efficient
      <br />& scalable AI solutions. I specialize in building AI Agents, RAG
      Systems, and optimizing LLMs through fine-tuning & quantization. Outside
      of work, I explore emerging AI technologies and contribute to open-source
      projects 🚀
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/rutam-bhagat-rutamstwt-uocefl",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Rutam is a developer interested in building AI-driven applications and
        scalable web solutions. His work spans fullstack development,
        interactive applications, and open-source contributions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Nordstone",
        timeframe: "2023 - Present",
        role: "Fullstack Developer",
        achievements: [
          <>
            Developed a high-performance e-commerce platform at Nordstone,
            resulting in improved customer engagement and increased conversion
            rates.
          </>,
          <>
            Created an AI-powered chatbot using LangChain, enhancing user
            interaction with the LangChain documentation through natural
            conversations.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Nordstone",
        timeframe: "2023 - Present",
        role: "Fullstack Developer",
        achievements: [
          <>
            Developed a high-performance e-commerce platform that optimized
            performance and security, resulting in increased customer
            engagement.
          </>,
          <>
            Created an AI-powered chatbot using LangChain, facilitating
            interactive learning and improving user experience significantly.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "SKNCOE",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Deeplearning AI",
        description: <>Studied AI, ML and LLM engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "LangChain",
        description: (
          <>
            Skilled in developing AI applications using LangChain and
            integrating various models.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next js",
        description: (
          <>
            Building scalable applications with Next js and integrating with
            various backend services.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about LLM's and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const genai = {
  label: "Gen AI",
  title: "My projects",
  description: `LLM and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /genai routes
};

const fullstack = {
  label: "Fullstack",
  title: "My fullstack projects",
  description: `Fullstack projects by ${person.name}`,
};

const createI18nContent = (t) => {
  return {
    person,
    social,
    newsletter,
    home,
    about,
    blog,
    genai,
    fullstack,
  };
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  genai,
  fullstack,
  createI18nContent,
};
