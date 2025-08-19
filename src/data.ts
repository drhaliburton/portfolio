export { sidebar, summary, stack, education, experience };


type Project = {
  title: string;
  img: string;
  url: string;
  skills?: string;
  content: string;
}

export type ExperienceType = {
  title: string;
  org?: string;
  url: string;
  subtitle: string;
  content: string;
  projects?: Project[];
}
type Resume = {
  sidebar: {
    title: string;
    subtitle: string;
    email: string;
    github: string;
    linkedIn: string;
    preferredTechnologies: string[];
    strengths: string[];
  };
  summary: string;
  stack: {
    languages: string;
    tools: string;
    spoken: string;
  };
  education: ExperienceType[];
  experience: ExperienceType[];
};

const { sidebar, summary, stack, education, experience }: Resume = {
  sidebar: {
    title: "Rebecca Haliburton",
    subtitle: "Senior Full-Stack Developer",
    email: "haliburtonre@gmail.com",
    github: "https://github.com/drhaliburton",
    linkedIn: "https://ca.linkedin.com/in/rhaliburton",
    preferredTechnologies: ['React', 'Typescript', 'Node.js', 'Graphql/Apollo', 'Jest/Cypress'],
    strengths: [
      "Architecting lightweight and performant solutions", 
      "Working independently across the stack",
      "Refining requirements with product",
      "Refactoring legacy code for scale",
      "Implementing efficient engineering workflows",
    ],
  },
  summary: "Senior Software Developer with an obsession for clean code, product design, and simple scalable architecture. I am experienced as a full-stack engineer, with expertise in building efficient, well-tested applications, as well as refactoring legacy codebases for performance and readability. I'm looking to join a mission driven organization with passionate, fun people.",
  stack: {
    languages: "JavaScript (React, Typescript), GraphQL, Node.js, Python, Scala, SQL",
    tools: "AI tooling (Augment, Copilot, Claude), Playwright/Cypress, Jest/RTL, Pytest, Material UI, Storybook, Swagger, Docker, AWS, Sentry, CircleCI/Github Actions",
    spoken: "English, French, un poco de Español",
  },
  education: [
    {
      title: "Web Development Diploma",
      org: "Lighthouse Labs",
      url: "http://www.lighthouselabs.ca/",
      subtitle: "Graduated July 2017",
      content: "Received a diploma in Web Development through an immersive full-stack Web Development Bootcamp consisting of 500+ hours of mentor-assisted programming experience. The Bootcamp covered JavaScript, Ruby, Rails, React, SQL and much more through a project-based curriculum.",
      projects: [
        {
          title: "Local",
          img: "local.jpg",
          url: "https://github.com/drhaliburton/local",
          skills: "React, Express, Node, Postgres, SASS, Google APIs.",
          content: "A travel itinerary builder that allows you to plan your day based around tips from locals, drop recommendations into your itinerary and export them to Google maps and your calendar.",
        },
        {
          title: "Jungle",
          img: "jungle.png",
          url: "https://github.com/drhaliburton/jungle-rails",
          skills: "Rails, Ruby, Postgres, Stripe, Bootstrap.",
          content: "A mini e-commerce application where users can browse products, view/add reviews, add items to their card and checkout using Stripe.",
        },
        {
          title: "Chatty",
          img: "chatty.png",
          url: "https://github.com/drhaliburton/Chatty",
          skills: "React, Node, Webpack, Babel.",
          content: "A real-time chat app that allow users to send and receive messages/notifications, change their username and view the number of online users.",
        },
        {
          title: "Fetch",
          img: "fetch.jpg",
          url: "https://github.com/drhaliburton/Fetch/",
          skills: "Node, Express, Ajax, Postgres, jQuery, Bootstrap/Masonry.",
          content: "A Pinterest-style resource wall where users can create accounts, add/edit new cards and favourite/filter/search all added resources.",
        },
        {
          title: "Tweeter",
          img: "tweeter.png",
          url: "https://github.com/drhaliburton/tweetr",
          skills: "Node, Express, MongoDB, jQuery.",
          content: "A Twitter clone created to practice front-end styling and interactivity - users can add new tweets and view or favourite existing tweets.",
        },
      ],
    },
    {
      title: "Business Administration Diploma",
      org: "NSCC",
      url: "http://www.nscc.ca/",
      subtitle: "Graduated June 2013",
      content: "Received a diploma in Business Administration (marketing & management) and completed a six month work placement as a marketing assistant for Telus.",
    },
  ],
  experience: [
    {
      title: "Senior Software Engineer",
      org: 'Regrow Ag',
      url: 'https://regrow.ag',
      subtitle: "January 2024 - Present",
      content: "Regrow an agriculture resilience platform, where farmers can manage their practices and generate carbon credits from satelite monitored results. My role at Regrow has been replatforming the MRV (measure, report, verify) experience, rewriting the front-end codebase, implementing a graphql backend-for-frontend, and rewriting the backend endpoints to support a new performant user experience. In tandem, I maintained the legacy application, implementing full-slice features in the Typescript, React, GraphQL, Node.js, Python and Go services.",
    },
    {
      title: "Full-Stack Software Engineer",
      org: "Bench Accounting",
      url: "https://www.bench.co",
      subtitle: "September 2019 - Present",
      content: "Bench is an online bookkeeping and financial data processing service. I work closely with product to develop new features, improving and automating accounting workflows for both the internal & client-facing applications. This includes working across the stack, predominantly building with React (Typescript), GraphQL/Apollo, Node.js, and AWS services.",
    },
    {
      title: "Web Developer",
      org: "Starling Minds",
      url: "https://www.starlingminds.com/",
      subtitle: "June 2018 - June 2019",
      content: "I was responsible for replatforming an existing application into a mobile product using Vue.js and Cordova. I lead the design and implementation of the front-end, including the mobile-first UI design, automated testing, caching & service workers, build + deployment and code reviews for junior team members.",
    },
    {
      title: "Freelance Web Developer & Marketing Consultant",
      subtitle: "September 2017 - September 2019",
      url: "https://www.linkedin.com/in/rhaliburton/",
      content: "Worked with clients to help grow their businesses through marketing consulting, building web apps and desigining user expeirences to achieve their product growth goals. This includes web asset re-designs, building analytics tools, providing SEO + communications audits and general growth advice.",
      projects: [
        {
          title: "CMPNY",
          img: "cmpny.png",
          url: "https://www.cmpny.com/plans",
          content: "Adopted an existing codebase to re-design the pricing pages, updated branding to fit existing materials, provided SEO support and created a landing page using PHP to generate new leads.",
        },
        {
          title: "Tea Runners",
          img: "tearunners.jpg",
          url: "http://www.tearunners.com/",
          content: "Created a Analytics Dashboard from scratch using Vue.js, Node, MongoDB with hosting Heroku, which interacts with their e-commerce API to display upcoming expected shipments.",
        },
      ],
    },
    {
      title: "Web Development Mentor",
      org: "Lighthouse Labs",
      url: "http://www.lighthouselabs.ca/",
      subtitle: "May 2018 - February 2019",
      content: "Mentored the full-time Lighthouse Labs Web Development Bootcamp, instructing students in the fundamentals of full-stack web development. Assisted with the JavaScript, SQL and Ruby-based curriculum, providing pair-programming and debugging.",
    },
    {
      title: "Front-End Developer",
      org: "New District",
      url: "http://www.newdistrict.ca/",
      subtitle: "August 2017 - December 2017",
      content: "New District is a e-commerce platform focused on wine sales, subscriptions and delivery services across BC. During my 4 month internship, I was responsible for maintaining and enhancing the existing Angular app, using Jade and SASS with Foundation for styling and Jasmine/Protractor for testing.",
    },
    {
      title: "Marketing Manager",
      org: "Lighthouse Labs",
      url: "http://www.lighthouselabs.ca/",
      subtitle: "September 2015 - June 2017",
      content: "I was responsible for the creation and curation of content while implementing strategies for student recruitment. I worked with the development and branding teams to create features for the custom CRM and admissions portals, wrote content and copy, and implemented the digital marketing strategies for Facebook, AdWords, email campaigns and other social platforms.",
      projects: [
        {
          title: "Project Management",
          img: "website.jpg",
          url: "http://www.lighthouselabs.ca/blog",
          skills: "SEO, copywriting, digital campaigns, feature design.",
          content: "Managed the website and application process in conjunction with the Development and Design teams. This included copywriting/SEO and wireframing new features for the custom-built CMS to automate marketing workflow and better analyse applicant data.",
        },
        {
          title: "Online Coding Courses",
          img: "courses.png",
          url: "http://www.lighthouse-labs.thinkific.com/",
          skills: "Content creation, copywriting, digital marketing.",
          content: "Created online courses using curriculum from HTML, CSS, JavaScript and iOS development workshops, gaining over 1500 registrants within a month of launching with ~4% conversion rate.",
        },
        {
          title: "Events & Digital Marketing",
          img: "html500.jpg",
          url: "http://www.thehtml500.com/",
          skills: "Event marketing, social media management, digital campaigns.",
          content: "Was responsible for the promotion for countless tech-centric events, including workshops, meetups and hackathons. Most notably, I put in place a digital marketing strategy that resulted in over 7000 registrants for the HTML500.",
        },
      ],
    },
    // {
    //   title: "Marketing Coordinator",
    //   org: "Sackville Business Association",
    //   url: "http://www.sackvillebusiness.com/",
    //   subtitle: "September 2013 - September 2015",
    //   content: "The Sackville Business Association is a non-profit organization representing 300 small business within a Business Improvement District. I was responsible for promoting the area through community engagement with the district through events, digital marketing, member development and by writing monthly column in the local newspaper.",
    //   projects: [
    //     {
    //       title: "Sackville Snow Days",
    //       img: "snowdays.jpg",
    //       skills: "Branding, event promotion, social media.",
    //       url: "http://thechronicleherald.ca/bedfordsackvilleobserver/1428606-plans-for-sackville-snow-days-underway",
    //       content: "Created the branding and promotion for community events. Results from the digital marketing campaigns saw an over 1000% traffic increase to the SBA\"s website.",
    //     },
    //     {
    //       title: "Member Communications",
    //       img: "newsletter.png",
    //       url: "http://sackvillebusiness.com/newsletter/",
    //       skills: "Creative writing, design, community engagement.",
    //       content: "Designed and curated a monthly newsletter, contributed a monthly column to the Chronicle Herald and implemented social media promotion for the district.",
    //     },
    //   ],
    // },
    // {
    //   title: "Communications Coordinator",
    //   org: "Laing House",
    //   url: "http://www.lainghouse.org",
    //   subtitle: "September 2013 - September 2015",
    //   content: "Laing House is a non-profit organization that provides a non-clinical environment for people living with mental illness. My role involved raising funds for the continued support of members through donor communications. This included donor engagement campaigns, speech writing, promoting fundraising initiatives and creating impact through community outreach.",
    //   projects: [
    //     {
    //       title: "Fundraising Events",
    //       img: "fundraising.png",
    //       url: "http://www.lainghouse.org/category/newsroom/blog.html",
    //       skills: "Fundraising, event promotion.",
    //       content: "Created design material and lead the promotion for upcoming donor campaigns and fundraising events, including the Laing House Masquerade Ball which raised over $250000 for the Laing House Foundation.",
    //     },
    //     {
    //       title: "Donor Communications",
    //       img: "report.jpg",
    //       url: "http://www.lainghouse.org/newsroom/publications/community-reports.html",
    //       skills: "Donor communications, graphic design, fundraising.",
    //       content: "Designed fundraising content and donor outreach campaigns to tell impact stories, including the annual reports which highlighted donor impact on the organization and breakdown of financials.",
    //     },
    //   ],
    // },
    // {
    //   title: "Communications Committee (Volunteer)",
    //   org: "Ecology Action Centre",
    //   url: "https://ecologyaction.ca/",
    //   subtitle: "January 2015 - September 2015",
    //   content: "The Ecology Action Centre is a non-profit organization in Halifax, NS aimed around creating a more sustainable community. I assisted with creating a strategy for donor communications and designed branding materials.",
    // },
  ],
}