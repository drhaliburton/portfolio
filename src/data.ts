export {sidebar, summary, stack, education, experience, projects};

type Project = {
  title: string;
  img: string;
  url: string;
  skills?: string;
  content: string;
};

export type ExperienceType = {
  title: string;
  org?: string;
  url: string;
  subtitle: string;
  content: string;
  projects?: Project[];
};

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
  projects: ExperienceType[];
};

const {sidebar, summary, stack, education, experience, projects}: Resume = {
  sidebar: {
    title: 'Rebecca Haliburton',
    subtitle: 'Senior Full-Stack Developer',
    email: 'haliburtonre@gmail.com',
    github: 'https://github.com/drhaliburton',
    linkedIn: 'https://ca.linkedin.com/in/rhaliburton',
    preferredTechnologies: ['Typescript', 'Node.js', 'Python', 'React', 'Graphql' ],
    strengths: [
      'Architecting lightweight, performant, and extensible solutions',
      'Working independently across the stack',
      'Refactoring legacy code for scale',
      'Raising unit and e2e testing standards',
      'Refining requirements with the product team',
    ],
  },
  summary:
   'Senior Software Developer with an obsession for clean code, product design, and simple scalable architecture. I thrive working independently across the stack, from design to implementation, building performant, accessible, and well-tested applications. Looking to join a mission driven organization with passionate, fun people.',    stack: {
    languages: 'JavaScript (React, TypeScript), GraphQL, Node.js, Python, Go, Scala, SQL (MySQL, Postgres)',
    tools:
      'AI tooling (Claude), Playwright, Jest/RTL, Vitest, Apollo/GraphQL Codegen, Storybook, Material UI (DataGrid), Chart.js, FastAPI, Firebase, Docker, AWS, Sentry',
    spoken: 'English, French, basic Spanish',
  },
  education: [
    {
      title: 'Web Development Diploma',
      org: 'Lighthouse Labs',
      url: 'http://www.lighthouselabs.ca/',
      subtitle: 'Graduated July 2017',
      content:
        'Received a diploma in Web Development through an immersive full-stack Web Development Bootcamp consisting of 500+ hours of mentor-assisted programming experience. The Bootcamp covered JavaScript, Ruby, Rails, React, SQL and much more through a project-based curriculum.',
      projects: [
        {
          title: 'Local',
          img: 'local.jpg',
          url: 'https://github.com/drhaliburton/local',
          skills: 'React, Express, Node, Postgres, SASS, Google APIs.',
          content:
            'A travel itinerary builder that allows you to plan your day based around tips from locals, drop recommendations into your itinerary and export them to Google maps and your calendar.',
        },
        {
          title: 'Jungle',
          img: 'jungle.png',
          url: 'https://github.com/drhaliburton/jungle-rails',
          skills: 'Rails, Ruby, Postgres, Stripe, Bootstrap.',
          content:
            'A mini e-commerce application where users can browse products, view/add reviews, add items to their card and checkout using Stripe.',
        },
        {
          title: 'Chatty',
          img: 'chatty.png',
          url: 'https://github.com/drhaliburton/Chatty',
          skills: 'React, Node, Webpack, Babel.',
          content:
            'A real-time chat app that allows users to send and receive messages/notifications, change their username and view the number of online users.',
        },
        {
          title: 'Fetch',
          img: 'fetch.jpg',
          url: 'https://github.com/drhaliburton/Fetch/',
          skills: 'Node, Express, Ajax, Postgres, jQuery, Bootstrap/Masonry.',
          content:
            'A Pinterest-style resource wall where users can create accounts, add/edit new cards and favourite/filter/search all added resources.',
        },
        {
          title: 'Tweeter',
          img: 'tweeter.png',
          url: 'https://github.com/drhaliburton/tweetr',
          skills: 'Node, Express, MongoDB, jQuery.',
          content:
            'A Twitter clone created to practice front-end styling and interactivity - users can add new tweets and view or favourite existing tweets.',
        },
      ],
    },
    {
      title: 'Business Administration Diploma',
      org: 'NSCC',
      url: 'http://www.nscc.ca/',
      subtitle: 'Graduated June 2013',
      content:
        'Received a diploma in Business Administration (marketing & management) and completed a six month work placement as a marketing assistant for Telus.',
    },
  ],
  experience: [
    {
      title: 'Senior Full-Stack Software Engineer',
      org: 'Regrow Ag',
      url: 'https://regrow.ag',
      subtitle: 'March 2023 - Present',
      content:
        'Regrow is an agriculture resilience platform, where farmers can manage their practices and generate carbon credits from satellite monitored results. I drove the architecture for a full re-platform of the MRV data-entry product; leading design of the React/TypeScript frontend, adding a new Node/GraphQL backend-for-frontend, and rebuilding the supporting Python backend. I was also responsible for building out the internal design system, used across the MRV product suite, alongside adding new full-slice features across the Typescript, React, GraphQL, Node.js, Python and Go services.',
    },
    {
      title: 'Full-Stack Software Engineer',
      org: 'Bench Accounting',
      url: 'https://www.bench.co',
      subtitle: 'September 2019 - March 2023',
      content:
        'Bench is an online bookkeeping and financial data processing service. I worked closely with the product team across the stack, improving and automating accounting workflows for both the internal & client-facing applications, predominantly building with React (Typescript), GraphQL/Apollo, Node.js, and AWS services.',
    },
    {
      title: 'Web Developer',
      org: 'Starling Minds',
      url: 'https://www.starlingminds.com/',
      subtitle: 'June 2018 - June 2019',
      content:
        'Starling minds is a mobile cognitive behavioural therapy tool. I led the design and implementation of the front-end, re-platforming the existing application into a mobile product using Vue.js and Cordova — including mobile-first UI design, automated testing, caching/service workers, build and deployment, and code review for junior engineers on the team.',
    },
    {
      title: 'Freelance Web Developer & Marketing Consultant',
      subtitle: 'September 2017 - September 2019',
      url: 'https://www.linkedin.com/in/rhaliburton/',
      content:
        'Built web apps and analytics tools for small-business clients, combining full-stack development with marketing/growth consulting — including a from-scratch analytics dashboard (Vue.js/Node/MongoDB) for Tea Runners, web asset redesigns, and SEO/communications audits.',
    },
    {
      title: 'Web Development Mentor',
      org: 'Lighthouse Labs',
      url: 'http://www.lighthouselabs.ca/',
      subtitle: 'May 2018 - February 2019',
      content:
        'Mentored full-time bootcamp students in full-stack fundamentals (JavaScript, SQL, Ruby) through pair-programming and debugging sessions.',
    },
    {
      title: 'Front-End Developer',
      org: 'New District',
      url: 'http://www.newdistrict.ca/',
      subtitle: 'August 2017 - December 2017',
      content:
        '4-month internship maintaining and enhancing an Angular e-commerce app (wine sales/subscriptions/delivery) for New District, using Jade/SASS and Jasmine/Protractor for testing.',
    },
    {
      title: 'Marketing Manager',
      org: 'Lighthouse Labs',
      url: 'http://www.lighthouselabs.ca/',
      subtitle: 'September 2015 - June 2017',
      content:
        'Led content and recruitment marketing for the bootcamp, partnering with the dev/design teams to build features for the custom CRM/admissions portal and running digital campaigns (Facebook, AdWords, email) that drove student enrollment.',
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
  projects: [
    {
      title: 'Soft Sheets',
      url: 'https://softsheets.ca',
      subtitle: '2026 - Present',
      content:
        'Soft Sheets is an automated lineup and roster manager for slo-pitch softball coaches to generate fair field-position assignments. The algorithm balances player preferences, gender-minimum requirements, and bench rotation, plus a separate batting-order optimizer sequencing hitters by power and speed. Soft sheets also includes score-sheet tracking with automatic per-game and season stat roll-ups.',
    },
  ]
};
