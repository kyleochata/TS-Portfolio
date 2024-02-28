import MongoLogo from '../assets/images/mongo.png'
import ExpressLogo from '../assets/images/resized/express.png'
import ReactLogo from '../assets/images/resized/React.svg'
import NodeLogo from '../assets/images/nodejs.png'
import MySqlLogo from '../assets/images/resized/mysql.png'
import TypescriptLogo from '../assets/images/resized/typescriptlogo.png'
import NextLogo from '../assets/images/resized/nextjs-icon.svg'
import D3Logo from '../assets/images/d3.png'
import ReduxLogo from '../assets/images/resized/reduxLogo.png'
import GraphqlLogo from '../assets/images/graphql.png'
import ApolloLogo from '../assets/images/apollo.png'
import SassLogo from '../assets/images/resized/SassLogo.svg'
import JestLogo from '../assets/images/resized/jest.svg'
import HandlebarsLogo from '../assets/images/resized/handlebarslogo.png'
import GithubLogo from '../assets/images/resized/githublogo.png'
import HerokuLogo from '../assets/images/heroku.png'
import TailWindlogo from '../assets/images/resized/tilwindlogo.png'
import Gitlogo from '../assets/images/git.png'
import BootstrapLogo from '../assets/images/resized/bootstraplogo.svg'
import Gologo from '../assets/images/resized/Gologo.svg'
import WillDoImg from '../assets/images/resized/willdopc.png'
export const techs = [
  {
    name: 'MongoDB',
    description:
      'General purpose, document-based, distributed database built for modern development.',
    image: MongoLogo,
  },
  {
    name: 'Express.js',
    description: 'Fast, minimalist web framework for Node.js.',
    image: ExpressLogo,
  },
  {
    name: 'React.js',
    description: 'A JavaScript library for building user interfaces.',
    image: ReactLogo,
  },
  {
    name: 'Node.js',
    description: 'A JavaScript runtime built on Chrome’s V8 JavaScript engine.',
    image: NodeLogo,
  },
]

export const colors = ['blue', 'black', 'red', 'yellow', 'green', 'purple']

export const allTechs = [
  {
    name: 'Typescript',
    image: TypescriptLogo,
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'MySql',
    image: MySqlLogo,
    link: 'https://www.mysql.com/',
  },
  {
    name: 'Next.js',
    image: NextLogo,
    link: 'https://nextjs.org/',
    color: 'black',
  },
  {
    name: 'D3.js',
    image: D3Logo,
    link: 'https://d3js.org/',
    color: 'D3',
  },
  {
    name: 'Redux',
    image: ReduxLogo,
    link: 'https://redux.js.org/',
    color: 'purple',
  },
  {
    name: 'GraphQL',
    image: GraphqlLogo,
    link: 'https://graphql.org/',
    color: 'pink',
  },
  {
    name: 'Jest',
    image: JestLogo,
    link: 'https://jestjs.io/',
    color: 'orange',
  },
  {
    name: 'Sass',
    image: SassLogo,
    link: 'https://sass-lang.com/',
    color: 'pink',
  },
  {
    name: 'Apollo',
    image: ApolloLogo,
    link: 'https://www.apollographql.com/docs/react/',
    color: 'black',
  },

  {
    name: 'Handlebars.js',
    image: HandlebarsLogo,
    link: 'https://handlebarsjs.com/',
    color: 'orange',
  },
  {
    name: 'GitHub',
    image: GithubLogo,
    link: 'https://github.com/',
    color: 'black',
  },

  {
    name: 'Git',
    image: Gitlogo,
    link: 'https://git-scm.com/',
    color: 'black',
  },
  {
    name: 'Heroku',
    image: HerokuLogo,
    link: 'https://www.heroku.com/',
    color: 'purple',
  },
  {
    name: 'Tailwind CSS',
    image: TailWindlogo,
    link: 'https://tailwindcss.com/',
    color: 'blue',
  },

  {
    name: 'Bootstrap',
    image: BootstrapLogo,
    link: 'https://getbootstrap.com/',
    color: 'purple',
  },
  {
    name: 'Go',
    image: Gologo,
    link: 'https://golang.org/',
    color: 'blue',
  },
  {
    name: 'MongoDB',
    image: MongoLogo,
    link: 'https://www.mongodb.com/',
    color: 'green',
  },
  {
    name: 'Express.js',
    image: ExpressLogo,
    link: 'https://expressjs.com/',
    color: 'black',
  },
  {
    name: 'React.js',
    image: ReactLogo,
    link: 'https://reactjs.org/',
    color: 'blue',
  },
  {
    name: 'Node.js',
    image: NodeLogo,
    link: 'https://nodejs.org/',
    color: 'green',
  },
]
import BbcImage from '../assets/images/resized/brainbalancecompanion.png'
import HelpDeskImage from '../assets/images/resized/helpdesk.png'
export const projects = [
  {
    title: 'Will-Do: Crush. Your. Goals.',
    tags: ['Mongo', 'Express', 'React', 'Node', 'D3'],
    image: WillDoImg,
    description:
      "Will-Do is a goal setting and tracking application that allows users to set, track, and visualize their goals. Users can create goals, set milestones, and track their progress. The application also provides a visualization of the user's progress/data using D3.js.",
    roles: 'Full Stack Developer, Lead Architect.',
    rolesDesc:
      "As the Lead Architect of this project, I was responsible for the overall structure and functionality of the application. This required close collaboration with the designers to understand the user's needs and the best way to implement them. Once the structure was in place, I was responsible for delegation of roles to the developers. Apart from the architecture, I was also responsible for both the front and back-end for implementation of the D3.js library.",
    teamSize: '4+',
    year: '2023',
    srcLink: 'https://github.com/kyleochata/Will-DO-Crush-your-goals',
  },
  {
    title: 'Brain Balance Companion',
    tags: ['HTML', 'CSS', 'JavaScript', 'Axios'],
    image: BbcImage,
    description:
      "A web application built for a client that is a subscriber to Brain Balance. The application allows the client to track their child's progress in a more user-friendly way. The application tracks the child's activities for the week as well as provides videos on Brain Balance's Youtube channel for reference.",
    roles: 'Front End Developer',
    rolesDesc:
      "My role as a front end developer was to develop the functionality of the user interface based off the client's needs. This required close collaboration with the client to understand their needs and the best way to implement them. I was also responsible for the implementation of the Axios library to make API calls to the google sheet that contained the child's activities for the duration of the program.",
    teamSize: '3',
    year: '2023',
    srcLink: 'https://github.com/kyleochata/Brain_Balance_Companion',
  },
  {
    title: 'I.T Help Desk',
    tags: ['Handlebars', 'MySQL', 'Express', 'Node', 'CSS'],
    image: HelpDeskImage,
    description:
      "A web application that allows users to submit and track their I.T. requests. A key feature is the ability of the I.T department to communicate with the user in real-time through the application. Views for this project vary depending on the user's role. Please see the README for more information.",
    roles: 'Lead Architect, Full Stack Developer',
    rolesDesc:
      "As the Lead Architect of this project, I was responsible for bringing the client's vision to life. This required close collaboration with the client to understand their needs and the best way to implement them. This required close coordination for the development team. Apart from the architecture, I was also responsible for contributing to the front and back-end development, with a focus on the front-end animations and functionality.",
    teamSize: '4',
    year: '2023',
    srcLink: 'https://github.com/kyleochata/Hammer-Help-Desk',
  },
]
