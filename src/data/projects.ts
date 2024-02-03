export type Project = {
  title: string;
  techs: string[];
  description: string;
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "InfinityTrade (Currently Developing)",
    techs: [
      "NextJS",
      "Supabase/Postgres SQL",
      "Clerk Auth",
      "TypeScript",
      "Tailwind CSS",
    ],
    description:
      "Marketplace website where users can create their own accounts, make their own listings, view others listings, message other sellers or buyers, as well as purchase products and/or sell them.",
    link: "https://infinitytrade.vercel.app",
  },
  {
    title: "HealthFirst (Diabetes Tracker)",
    techs: [
      "NextJS",
      "Supabase/Postgres SQL",
      "Clerk Auth",
      "TypeScript",
      "Tailwind CSS",
    ],
    description:
      "Diabetes tracking web app that helps users log data as well as create personal fitness and meal plans that cater to their specific needs.",
    link: "https://infinitytrade.vercel.app",
  },
  {
    title: "Car Detailing",
    techs: ["AstroJS", "React", "TailwindCSS", "SendGrid", "Instagram API"],
    description:
      "Car Detailing website with a modern design and implmentation of Instagrams API to display posts and SendGrids API to allow users to contact/email the detailer.",
    link: "car-detailing-six.vercel.app",
  },

  {
    title: "Kicks Avenue",
    techs: ["ReactJS", "Stripe", "Redux", "MySQL", "Strapi"],
    description: "E-Commerce website for purchasing sneakers.",
    link: "kicksavenue.netlify.app",
  },

  {
    title: "Book Finder App",
    techs: ["Next.js", "Open Ai API", "Google Books API"],
    description:
      "Web app made for searching books and generating summaries using Ai.",
    link: "aibookfinder.netlify.app",
  },
  {
    title: "HalalNearMe",
    techs: ["Next.js", "Clerk Auth", "Yelp Fusion API"],
    description: "Search for halal food in your area using just your zipcode.",
    link: "halalnearme.netlify.app",
  },
];

export default projects;
