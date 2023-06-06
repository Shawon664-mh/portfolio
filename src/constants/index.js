import {
  mobile,
  backend,
  creator,
  web,
  ecommerce,
  sushiMan,
  gpt3,
  codeEditor
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Front-End Developer",
    icon: backend,
  },
  {
    title: "Wordpress Developer",
    icon: creator,
  },
];

const projects = [
  {
    name: "Ecommerce Website",
    description:
      "In my portfolio, I take pride in showcasing my expertise in developing a cutting-edge ecommerce website.Through meticulous attention to detail, I ensured seamless navigation, intuitive product categorization, and a secure checkout process. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://moazzem-ecommerce.netlify.app",
  },
  {
    name: "AI",
    description:
      "As an integral part of my portfolio, I take great pride in showcasing my expertise in designing captivating landing pages. With a keen eye for aesthetics and a deep understanding of user behavior, I create landing pages that effectively capture visitors' attention and drive conversions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gpt3,
    source_code_link: "https://moazzem-ai.netlify.app",
  },
  {
    name: "Code Editor",
    description:
      "In my portfolio, I am excited to showcase an intermediate-level code editor that I have developed to demonstrate my growing coding skills. While it may not have all the advanced features of professional-grade editors, this project highlights my ability to create functional and user-friendly tools for coding.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: codeEditor,
    source_code_link: "https://moazzem-code-editor.netlify.app",
  },
  {
    name: "SushiMan",
    description:
      "In my portfolio, I am delighted to present a captivating restaurant website that I have meticulously designed and developed. With a focus on showcasing the unique ambiance and offerings of the restaurant, I have crafted a visually stunning website that leaves a lasting impression on visitors.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sushiMan,
    source_code_link: "https://moazzem-sushiman.netlify.app",
  },
];

export { services, projects };