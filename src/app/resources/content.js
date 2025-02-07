import { InlineCode, SmartLink } from "@/once-ui/components";
import Link from "next/link";

const person = {
  firstName: "Ana",
  lastName: "Gomes",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Product Designer",
  avatar: "/images/avatar.jpg",
  location: "America/Winnipeg", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Lorem Ipsum
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/anagomesdesign",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/anacsgomes/",
  },
  {
    name: "Medium",
    icon: "book",
    link: "https://medium.com/@anagomesdesign",
  },
  
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi, I'm Ana</>,
  subline: (
    <>
      I'm a Senior Product Designer with over 15 years of experience with design and tech.
      In my spare time, you will find me learning Front End with <InlineCode>React</InlineCode> or playing videogames.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ana is a senior Product Designer with 15+ years 
        of experience creating intuitive digital experiences. 
        She is proficient in leading design projects from start to finish, 
        managing design sprints and design systems. Passionate about ethical and inclusive design, her goal is 
        to use her skills to make a meaningful impact.
      </>
      
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SPUD",
        timeframe: "Jan 2024 - Present",
        role: "Lead Product Designer",
        achievements: [
          <>
            Led redesign of catalog page filtering system to enhance user experience and align with business goals.
          </>,
          <>
            Designed UX for new membership program to increase customer retention.
          </>,
          <>
            Optimized mobile experience for growing user base by improving navigation and product visualization.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Ubisoft",
        timeframe: "Nov 2022 - Dec 2023",
        role: "UI/UX Designer",
        achievements: [
          <>
            Revamped asset management workflows, reducing operation friction for production teams.
          </>,
          <>
            Optimized internal tools for asset and work management systems, streamlining workflows and improving team efficiency.
          </>,
          <>
            Collaborated with production teams to identify pain points and deliver tailored solutions, enhancing cross-team collaboration.
          </>
        ],
        images: [],
      },
      {
        company: "Shopify",
        timeframe: "Oct 2021 - Oct 2022",
        role: "Senior Product Designer",
        achievements: [
          <>
            Focused on embedding data-driven features into the product management area, improving merchant experience in Shopify’s admin area.
          </>,
          <>
            Designed one of the first iterations of Shopify's AI feature, enabling merchants to efficiently identify and manage product categories (product taxonomy).
          </>,
          <>
            Partnered with product and engineering teams to enhance store analytics, driving a rise in feature adoption.
          </>
        ],
        images: [],
      },

      {
        company: "SkipTheDishes",
        timeframe: "Dec 2018 - Oct 2021",
        role: "Lead Product Designer",
        achievements: [
          <>
            Led design efforts for the Courier Experience team, overseeing the courier app, portal, and chat—key tools supporting couriers within the Skip network.
          </>,
          <>
            Spearheaded the end-to-end design of internal tools, improving operational efficiency for customer service teams.
          </>,
          <>
            Provided mentorship to mid-level designers, fostering growth and team cohesion.
          </>,
          <>
            Collaborated with design leads in building the first Skip's design system.
          </>,
        ],
        images: [],
      },

      
    ],
  },


  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Federal University of Goiás - UFG",
        description: <>Bachelor's degree in Graphic Design (2012) </>,
      },
      {
        name: "Project Management Institute - PMI",
        description: <>Introductory Course on Project Management (2014)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [

      {
        title: "Core Skills",
        description: <>Visual Design / Prototyping / Design Systems / Interaction Design / 
        User & Market Research / Product Management / Design Process</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Tools",
        description: <>Figma / Miro / Adobe Creative Suite / Jira / GitHub / VS Code / AI</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Technical Skills",
        description: <>HTML / CSS / JavaScript / React</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Portfolio",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
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
