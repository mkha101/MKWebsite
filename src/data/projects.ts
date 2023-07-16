export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Book Finder App",
    techs: ["NextJS"],
    link: "aibookfindeår.netlify.app",
  },
];

export default projects;
