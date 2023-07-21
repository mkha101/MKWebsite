export type Project = {
  title: string;
  techs: string[];
  description: string;
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
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
