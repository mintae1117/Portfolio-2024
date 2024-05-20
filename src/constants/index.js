import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  snoopy,
  moonhair,
  crypto,
  pokemon,
  jinjoo,
  twitter,
  minflix,
  zoom,
} from "../assets";
import portfolio from "/public/vite.svg";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Github Link",
    icon: web,
    link: "https://github.com/mintae1117",
  },
  {
    title: "Instagram Link",
    icon: mobile,
    link: "https://www.instagram.com/min_tae1117/",
  },
  {
    title: "Nomadcoders Profile",
    icon: backend,
    link: "https://nomadcoders.co/users/mintaekim",
  },
  {
    title: "2024 My Profile",
    icon: creator,
    link: "https://portfolio-2024-psi-vert.vercel.app/",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  /*{
    name: "Redux Toolkit",
    icon: redux,
  },*/
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  /*{
    name: "MongoDB",
    icon: mongodb,
  },*/
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  /*{
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },*/
];

const experiences = [
  {
    title: "문헤어 웹사이트.",
    link: "https://moonhair.co.kr/",
    company_name: "Moonhair Website",
    icon: moonhair,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Dec 2023",
    points: [
      "지인이 운영중인 문헤어살롱 웹사이트 입니다.",
      "문헤어에 대해 간단하게 소개할 수 있는 사이트를 만들면 좋겠다며 제안하여 만들어봤습니다.",
      "처음으로 진행해본 프로젝트라 의미가 깊고 웹사이트가 기획되어 디자인, 개발, 배포, 최적화까지 전반적인 과정을 혼자 경험할 수 있었던 프로젝트입니다.",
      "using / Html, Scss, Css, Bootstrap, Javascript etc."
    ],
  },
  {
    title: "스누피 플래너.",
    link: "https://mintae1117.github.io/Javascript-Todo-App/",
    company_name: "Snoopy Todo App",
    icon: snoopy,
    iconBg: "#383E56",
    date: "December 2023",
    points: [
      "노마드코더 챌린지에서 진행한 Todo-App 입니다.",
      "바닐라 자바스크립트를 공부 하면서 진행한 코딩 챌린지에서 우수작품으로 뽑힌 첫 프로젝트라 적 어 보았습니다.",
      "Local storage의 활용법, Weather-Api 사용법, Vanilla-Javascript의 문법을 공부할 수 있었 던 좋은 경험이었습니다.",
      "디자인은 제가 스누피를 좋아해서 테마를 스누피로 잡고 만들어 봤습니다.",
      "using / Vanila Javascript, Css, Html etc."
    ],
  },
  {
    title: "크립토트래커 앱.",
    link: "https://mintae1117.github.io/Crypto-Tracker/",
    company_name: "Crypto Tracker App",
    icon: crypto,
    iconBg: "#383E56",
    date: "January 2024",
    points: [
      "간단한 ​Crypto-Tracker 앱 입니다.",
      "React를 공부 하면서 여러가지 hook들과 상태관리 방법(Recoil, redux 등), api 다루기(React- query) 등을 공부 하면서 진행한 프로젝트 입니다.",
      "Theme도 Dark-mode, Light-mode를 넣 어보면서 토글버튼까지 구현한 간단한 프로젝트였습니다.",
      "using / Typescript, Styled-components, React-query, React-router, Recoil etc."
    ],
  },
  {
    title: "포켓몬 게임.",
    link: "https://mt-kaboom-pokemon.netlify.app/",
    company_name: "Pokemon Game Using KaboomJs",
    icon: pokemon,
    iconBg: "#383E56",
    date: "Febuary 2024",
    points: [
      "포켓몬게임 made with KaboomJs library.",
      "KaboomJs로 옛날 느낌의 간단한 게임들을 만들수 있다 하여 궁금증이 생겨 만들어본 간단한 포켓 몬 게임 입니다.",
      "using / KaboomJs, Html, Css, Javascipt etc."
    ],
  },
  {
    title: "진주떡집.",
    link: "https://jinjood.com/",
    company_name: "Jinjoo Ricecake Website",
    icon: jinjoo,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "친구가 운영중인 진주떡집 웹사이트 입니다. 아직 개발중에 있습니다.",
      "지금은 제품 소개 정도가 끝이지만 추후에 로그인, 장바구니, 결제서비스 까지 개발할 생각입니다.",
      "여러가지 Javascript, Css, Html 요소들과 웹을 배포해서 도메인 연결을 한 후, 검색엔진에 올리 고 최적화 하는데까지 해야하는 것들을 경험할 수 있었던 프로젝트였습니다.",
      "using / Html, Css, Javascript, Bootsrtap etc."
    ],
  },
  {
    title: "트위터 클론코딩.",
    link: "https://twitter-clone-73087.firebaseapp.com/",
    company_name: "Twitter CLone App",
    icon: twitter,
    iconBg: "#E6DEDD",
    date: "March 2024 - April 2024",
    points: [
      "트위터 클론코딩 앱 입니다.",
      "개인적으로 많은 공을 들여 만든 프로젝트 입니다. 원본 트위터 사이트와 최대한 동일하게 구현하려 고 노력했습니다.",
      "Firebase의 여러 기능들과 React의 수많은 라이브러리들에 대해 또한번 공부할 수 있었던 좋은 경 험이었습니다.",
      "using / React.js, Typescript, Firebase ( auth, firestoredb, storage, hosting ), React- router-dom, Styled-Components, Emoji-picker-react etc."
    ],
  },
  {
    title: "민플릭스.",
    link: "https://minflix-master.vercel.app/",
    company_name: "Netflix Clone App",
    icon: minflix,
    iconBg: "#E6DEDD",
    date: "April 2024 - May 2024",
    points: [
      "넷플릭스 클론코딩 앱 입니다.",
      "Typescript로 제작한 ReactJs 앱이고, framer-motion과 styled-compionents로 디자인 했 습니다.",
      "react-router-dom, react-query, react-hook-form, recoil, react-type-animation 등 다양한 react 라이브러리들과 www.themoviedb.org/의 api를 사용하는 법 까지 공부할 수 있었 던 좋은 경험 이었습니다.",
      "노마드코더 리액트 마스터 클라스 코딩챌린지를 진행하며 만들었던 프로젝트 입니다."
    ],
  },
  {
    title: "화상채팅 앱.",
    link: "https://github.com/mintae1117/Websocket-Facetime-Final",
    company_name: "Zoom CLone WebRTC",
    icon: zoom,
    iconBg: "#383E56",
    date: "April 2024",
    points: [
      "WebRTC 와 Socket.io 를 공부 하면서 만들어본 실시간 화상채팅 웹 앱 입니다.",
      "NodeJs 와 WebRTC, ​Socket.io, Javascript, Pug를 써서 구현하였으며 Zoom을 모티브로 만 들었습니다."
    ],
  },
  {
    title: "포트폴리오 2024.",
    link: "https://portfolio-2024-psi-vert.vercel.app/",
    company_name: "Portfolio 2024",
    icon: portfolio,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "3D 기술에 관심이 생기면서 ThreeJs, React-Three-Fiber등을 공부하며 만들어본 포트폴리오 페이지 입니다.",
      "React, ThreeJs, React-Three-Fiber, TailwindCss, Framer-motion 등을 썼습니다."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
