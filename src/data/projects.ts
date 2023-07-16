export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Book Finder App",
    techs: ["ReactJS (NextJS)"],
    link: "aibookfinder.netlify.app",
  },
];

export default projects;
