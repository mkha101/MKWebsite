type Social = {
  label: string;
  link: string;
};

type Presentation = {
  logo: string;
  mail: string;
  title: string;
  position: string;
  description: string;
  description2: string;

  socials: Social[];
};

const presentation: Presentation = {
  logo: "MK",
  mail: "k.muzamil1001@gmail.com",
  position: "Frontend Developer",
  title: "Muzamil Khan",
  description:
    "I specialize in web development. Being able to bring designs and ideas to life as well as making them accessible to everyone is what drives me everyday.",
  description2:
    "The pursuit of knowledge is a lifelong journey for me, as I am constantly driven to enhance my skills and make a greater impact in my future endeavors.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/muzamil-khan-008a33272/",
    },
  ],
};

export default presentation;
