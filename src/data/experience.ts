export type Experience = {
  jobTitle: string;
  workPlace: string;
  workPlaceLink?: string;
  workCapacity: string;
  highlights: string[];
  dateRange: string;
  technologies: string[] | Record<string, string[]>;
};

const experience: Experience[] = [
  {
    jobTitle: "Technical Lead",
    workPlace: "IAG",
    workCapacity: "Full-time (Contract)",
    highlights: [
      "Technical design, solution architecture, dependent systems requirements handover",
      "Estimated feature size and advised on build sequencing",
      "Interfaced with Business Analysts, Delivery Leads, Product Owners, UX"
    ],
    dateRange: "Apr 2022–Current",
    technologies: [
      "React",
      "Micro-frontends",
      "TypeScript",
      "Node",
      "Lambda",
      "AWS",
      "New Relic"
    ]
  },
  {
    jobTitle: "Consultant Developer",
    workPlace: "EatwellApp",
    workCapacity: "Part-time (Contract)",
    highlights: [
      "Led and oversaw development of hybrid mobile app",
      "Scoped requirements and solution architecture",
      "Sprint management, peer-reviewed developer code, app store deployment"
    ],
    dateRange: "Jul 2021–Mar 2022 (8 mo)",
    technologies: [
      "React",
      "Recoil",
      "Styled-Components",
      "TypeScript",
      "Next.js",
      "Node/Express",
      "Capacitor",
      "XCode",
      "Android Studio",
      "Postgres SQL",
      "GCP"
    ]
  },
  {
    jobTitle: "Full-Stack Developer / Founder",
    workPlace: "Options Profit Calculator",
    workCapacity: "Varying",
    highlights: [
      "Developed single-page app stock-options calculator",
      "SEO and accessibility to rank #1 on google for short-tail keywords",
      "Supports 15,000+ users per day"
    ],
    dateRange: "2008-ongoing (14 yr)",
    technologies: {
      Beta: [
        "React",
        "Next.js",
        "TypeScript",
        "Node/Express",
        "SAAS/CSS Modules",
        "GCP",
        "VPS admin"
      ],
      Legacy: ["PHP", "jQuery 😑"]
    }
  },
  {
    jobTitle: "Technical Manager / Full-Stack Dev",
    workPlace: "Station Five",
    workCapacity: "Full-time",
    dateRange: "Jan 2018–Dec 2019 (2 yr)",
    highlights: [
      "Consulted with clients on business requirements and develop technical design",
      "Conducted developer recruitment and onboarding processes",
      "Led team of 5 devs, including agile ceremonies, PRs",
      "Introduced TypeScript, code auto-formatter, pre-commit hooks"
    ],
    technologies: [
      "React",
      "Node/Express",
      "TypeScript",
      "React Native",
      "Jira",
      "Vue.js",
      "Firebase",
      "Postgres SQL",
      "AWS"
    ]
  },
  {
    jobTitle: "Full-Stack Developer",
    workPlace: "National Gallery Victoria",
    workCapacity: "Part-time (contract)",
    dateRange: "Oct 2015–Dec 2017 (2 yr)",
    highlights: [
      "Developed Gallery Guide app for web and native using Ionic (Angular + Cordova)",
      "Integrated public WordPress site with external APIs for online catalogue",
      "Automated workflow by connecting in-gallery info-screens to exhibition data",
      "Reduced load time from 15+ secs to < 2 secs on booking pages",
      "Consulted on system architecture, deployment workflow, diagnosis of site performance issues"
    ],
    technologies: [
      "Ionic",
      "Angular.js",
      "Cordova",
      "React Native",
      "Wordpress",
      "JavaScript",
      "HTML",
      "CSS",
      "MySQL/MSSQL"
    ]
  },
  {
    jobTitle: "Web Developer",
    workPlace: "Australian College of Rural & Remote Medicine",
    workCapacity: "Part-time",
    dateRange: "2009–2015 (6 yrs)",
    highlights: [
      "Scoping, interaction design and build of invoice system; integrated with payment gateway and MYOB",
      "Collaboration with CSIRO to build and integrate video-conference scheduling system",
      "CSS UI library design and maintenance"
    ],
    technologies: ["Drupal", "REST APIs", "HTML", "JavaScript", "CSS"]
  },

  {
    jobTitle: "Web Developer",
    workPlace: "Bloomtools",
    workCapacity: "Full-time",
    workPlaceLink: "https://www.bloomtools.com/",
    dateRange: "2006–2008 (2 yrs)",
    highlights: [
      "Developed libraries for proprietary CMS and Email marketing platform",
      "Payment gateway integration for client projects"
    ],
    technologies: ["PHP", "MySQL", "JavaScript", "REST APIs", "PayPal APIs"]
  }
];

export default experience;
