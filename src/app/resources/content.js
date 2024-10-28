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
      I'm Rutam, a developer focused on crafting efficient
      <br /> and scalable web applications. Outside of work, I explore new
      technologies and contribute to open-source projects.
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

const work = {
  label: "Work",
  title: "My projects",
  description: `LLM and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
