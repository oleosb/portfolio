import timeToolsImg from "../imgs/timetools.png";
import questionsImg from "../imgs/questionsapi.png";
import notesImg from "../imgs/notesapp.png";
import liveUserImg from "../imgs/liveuserapi.png";
import passwordGenImg from "../imgs/passwordgenerator.png";
import randomChoiceImg from "../imgs/randomchoicepicker.png";
import tmbCalculator from "../imgs/tmb_calculator.png";
import shoppingList from "../imgs/shopping-list.png";
import questionsAPI from "../imgs/questions-api.png";
import notesReact from "../imgs/notes-react.png";
import movieApi from "../imgs/movie-api.png";
import nikelp from "../imgs/nikelp.png";
import gymWireframe from "../imgs/gym-wireframe.png";
import emailMarketingBFMS from "../imgs/email-marketing-bfms.png";
import interiorDesignWireframe from "../imgs/interior-design-wireframe.png";
import pomodoroTask from "../imgs/pomodorotask.png";
import dogs from "../imgs/dogs.png";
import card from "../imgs/cardgame.png";
import noteNaji from "../imgs/note-naji.png";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiReact,
  SiAdobe,
  SiFigma,
  SiWordpress,
  SiMongodb,
  SiNpm,
  SiNodedotjs,
} from "react-icons/si";

export const projects = [
  {
    id: 18,
    title: "FullStack Todo App",
    gitHub: "https://github.com/oleosb/todo-app-reactts-nodejs",
    img: noteNaji,
    description: "App de tarefas.",
    tags: [
      "typescript",
      "npm",
      "nodejs",
      "todo",
      "notes",
      "html",
      "css",
      "javascript",
      "react",
      "js",
      "code",
      "codigo",
      "post",
      "mongodb",
      "mongoose",
      "api",
    ],
    tecs: [
      {
        img: <SiReact />,
        txt: "ReactJS",
      },
      {
        img: <SiNodedotjs />,
        txt: "Node.js",
      },
      {
        img: <SiNpm />,
        txt: "npm",
      },
      {
        img: <SiMongodb />,
        txt: "MongoDB",
      },
      {
        txt: "Mongoose",
      },
      {
        img: <SiJavascript />,
        txt: "JavaScript",
      },
      {
        img: <SiHtml5 />,
        txt: "HTML",
      },
      {
        img: <SiCss3 />,
        txt: "CSS",
      },

      {
        txt: "API",
      },
      {
        img: <SiGit />,
        txt: "Git",
      },
    ],
    category: "#F8D210",
  },
  {
    id: 17,
    title: "Card Game",
    gitHub: "https://github.com/oleosb/card-game",
    img: card,
    description: "Um jogo multiplayer de cartas.",
    tags: [
      "card",
      "cartas",
      "html",
      "css",
      "javascript",
      "react",
      "js",
      "code",
      "codigo",
      "foto",
      "post",
      "api",
    ],
    tecs: [
      {
        img: <SiReact />,
        txt: "ReactJS",
      },
      {
        img: <SiJavascript />,
        txt: "JavaScript",
      },
      {
        img: <SiHtml5 />,
        txt: "HTML",
      },
      {
        img: <SiCss3 />,
        txt: "CSS",
      },

      {
        txt: "API",
      },
      {
        img: <SiGit />,
        txt: "Git",
      },
      {
        img: <SiFigma />,
        txt: "Figma",
      },
    ],
    category: "#F8D210",
  },
  {
    id: 0,
    title: "Dogs (Instagram Clone)",
    gitHub: "https://github.com/oleosb/dogs-instagram-clone",
    img: dogs,
    description: "Um clone do Instagram para fotos de cães.",
    tags: [
      "instagram",
      "dogs",
      "html",
      "css",
      "javascript",
      "react",
      "js",
      "code",
      "codigo",
      "foto",
      "post",
      "api",
      "wordpress",
      "npm",
    ],
    tecs: [
      {
        img: <SiReact />,
        txt: "ReactJS",
      },
      {
        img: <SiJavascript />,
        txt: "JavaScript",
      },
      {
        img: <SiHtml5 />,
        txt: "HTML",
      },
      {
        img: <SiCss3 />,
        txt: "CSS",
      },

      {
        txt: "API",
      },
      {
        img: <SiWordpress />,
        txt: "Wordpress",
      },
      {
        img: <SiGit />,
        txt: "Git",
      },
      {
        img: <SiFigma />,
        txt: "Figma",
      },
    ],
    category: "#F8D210",
  },
  {
    id: 1,
    title: "Pomodoro Task",
    site: "https://oleosb.github.io/pomodoro-task",
    img: pomodoroTask,
    description: "Gerenciador de tempo e tarefas.",
    tags: [
      "pomodoro",
      "task",
      "html",
      "css",
      "javascript",
      "react",
      "js",
      "code",
      "codigo",
      "tempo",
      "tarefa",
      "gerenciador",
      "time",
      "npm",
    ],
    tecs: [
      {
        img: <SiReact />,
        txt: "ReactJS",
      },
      {
        img: <SiJavascript />,
        txt: "JavaScript",
      },
      {
        img: <SiHtml5 />,
        txt: "HTML",
      },
      {
        img: <SiCss3 />,
        txt: "CSS",
      },
      {
        img: <SiGit />,
        txt: "Git",
      },
      {
        img: <SiFigma />,
        txt: "Figma",
      },
    ],
    category: "#F8D210",
  },
  {
    id: 2,
    title: "Wireframe D. de Interiores",
    behance:
      "https://www.behance.net/gallery/153809055/interior-design-uiux-design",
    img: interiorDesignWireframe,
    description: "Wireframe para website de design de interiores.",
    tags: [
      "design",
      "figma",
      "adobe",
      "illustrator",
      "desenho",
      "ui",
      "ux",
      "interface",
      "user",
      "usuario",
    ],
    tecs: [
      {
        img: <SiFigma />,
        txt: "Figma",
      },
      {
        img: <SiAdobe />,
        txt: "Pacote Adobe",
      },
    ],
    category: "#C55FFC",
  },
  {
    id: 3,
    title: "Nike Landing Page",
    gitHub: "https://github.com/oleosb/nike-landing_page",
    site: "https://oleosb.github.io/nike-landing-page/",
    img: nikelp,
    description: "Landing Page do tênis Nike Metcon 8.",
    tags: [
      "nike",
      "landing",
      "page",
      "javascript",
      "css",
      "html",
      "cart",
      "store",
      "shoes",
      "paginadevendas",
      "carrinho",
      "loja",
      "code",
      "codigo",
    ],
    tecs: [
      {
        img: <SiJavascript />,
        txt: "JavaScript",
      },
      {
        img: <SiHtml5 />,
        txt: "HTML",
      },
      {
        img: <SiCss3 />,
        txt: "CSS",
      },
      {
        img: <SiFigma />,
        txt: "Figma",
      },
      {
        img: <SiAdobe />,
        txt: "Pacote Adobe",
      },
    ],
    category: "#F8D210",
  },
  {
    id: 4,
    title: "Calculadora de TMB",
    gitHub: "https://github.com/oleosb/calculadora_tmb-reactjs-",
    site: "https://oleosb.github.io/calculadora-tmb-reactjs",
    img: tmbCalculator,
    description:
      "Calcula a Taxa Metabólica Basal e IMC, informando o usuário quantas calorias podem ser ingeridas diariamente",
    tags: [
      "calculator",
      "calculadora",
      "html",
      "css",
      "javascript",
      "react",
      "js",
      "imc",
      "tmb",
      "taxa",
      "metabolica",
      "basal",
      "code",
      "codigo",
    ],
    tecs: [
      {
        img: <SiReact />,
        txt: "ReactJS",
      },
      {
        img: <SiJavascript />,
        txt: "JavaScript",
      },
      {
        img: <SiHtml5 />,
        txt: "HTML",
      },
      {
        img: <SiCss3 />,
        txt: "CSS",
      },
      {
        img: <SiFigma />,
        txt: "Figma",
      },
      {
        img: <SiAdobe />,
        txt: "Pacote Adobe",
      },
    ],
    category: "#F8D210",
  },
  {
    id: 5,
    title: "Lista de Compras",
    gitHub: "https://github.com/oleosb/shopping_list-reactjs",
    site: "https://oleosb.github.io/shopping-list-reactjs/",
    img: shoppingList,
    description:
      "Crie sua lista de compras. Adicione, remova e altere a quantidade dos itens.",
    tags: [
      "shopping",
      "list",
      "compras",
      "lista",
      "react",
      "js",
      "javascript",
      "html",
      "css",
      "code",
      "codigo",
    ],
    tecs: [
      {
        img: <SiReact />,
        txt: "ReactJS",
      },
      {
        img: <SiJavascript />,
        txt: "JavaScript",
      },
      {
        img: <SiHtml5 />,
        txt: "HTML",
      },
      {
        img: <SiCss3 />,
        txt: "CSS",
      },
      {
        img: <SiFigma />,
        txt: "Figma",
      },
    ],
    category: "#F8D210",
  },
  {
    id: 6,
    title: "Wireframe Academia",
    behance: "https://www.behance.net/gallery/153808403/gym-uiux-design",
    img: gymWireframe,
    description: "Wireframe para website de academia.",
    tags: [
      "design",
      "figma",
      "adobe",
      "illustrator",
      "desenho",
      "ui",
      "ux",
      "interface",
      "user",
      "usuario",
      "gym",
      "academia",
    ],
    tecs: [
      {
        img: <SiFigma />,
        txt: "Figma",
      },
      {
        img: <SiAdobe />,
        txt: "Pacote Adobe",
      },
    ],
    category: "#C55FFC",
  },
  {
    id: 7,
    title: "Email Marketing BFMS",
    behance: "https://www.behance.net/gallery/153809541/Email-Marketing-BFMS?",
    img: emailMarketingBFMS,
    description: "Design de email marketing para BFMS.",
    tags: [
      "design",
      "figma",
      "adobe",
      "illustrator",
      "desenho",
      "ui",
      "ux",
      "interface",
      "user",
      "usuario",
      "html",
      "css",
    ],
    tecs: [
      {
        img: <SiHtml5 />,
        txt: "HTML",
      },
      {
        img: <SiCss3 />,
        txt: "CSS",
      },
      {
        img: <SiFigma />,
        txt: "Figma",
      },
      {
        img: <SiAdobe />,
        txt: "Pacote Adobe",
      },
    ],
    category: "#C55FFC",
  },
  {
    id: 8,
    title: "Questions API",
    gitHub: "https://github.com/oleosb/questionApp_api-reactsjs-",
    site: "https://oleosb.github.io/question-api-reactjs/",
    img: questionsAPI,
    description:
      "Jogo de perguntas como filtro para quantidade de perguntas e categorias.",
    tags: [
      "javascript",
      "react",
      "js",
      "html",
      "css",
      "api",
      "quiz",
      "pergunta",
      "resposta",
      "code",
      "codigo",
    ],
    tecs: [
      {
        img: <SiJavascript />,
        txt: "JavaScript",
      },
      {
        img: <SiHtml5 />,
        txt: "HTML",
      },
      {
        img: <SiCss3 />,
        txt: "CSS",
      },
      {
        img: null,
        txt: "API",
      },
    ],
    category: "#F8D210",
  },
  {
    id: 9,
    title: "Notes App",
    gitHub: "https://github.com/oleosb/notesApp-reactjs-",
    img: notesReact,
    description:
      "Aplicativo Web de Anotações que permite o usuário a criar, editar e excluir notas. Todas as anotações são armazenadas no localStorage.",
    tags: [
      "javascript",
      "react",
      "js",
      "html",
      "css",
      "note",
      "nota",
      "list",
      "code",
      "codigo",
    ],
    tecs: [
      {
        img: <SiReact />,
        txt: "ReactJS",
      },
      {
        img: <SiJavascript />,
        txt: "JavaScript",
      },
      {
        img: <SiHtml5 />,
        txt: "HTML",
      },
      {
        img: <SiCss3 />,
        txt: "CSS",
      },
    ],
    category: "#F8D210",
  },
  {
    id: 10,
    title: "Movie App",
    gitHub: "https://github.com/oleosb/movieApp_tmdbApi-reactjs-",
    img: movieApi,
    description: "Aplicativo de filmes e séries desenvolvido com API do TMDB.",
    tags: [
      "javascript",
      "react",
      "js",
      "html",
      "css",
      "filme",
      "movie",
      "serie",
      "netflix",
      "api",
      "tmdb",
      "code",
      "codigo",
    ],
    tecs: [
      {
        img: <SiReact />,
        txt: "ReactJS",
      },
      {
        img: <SiJavascript />,
        txt: "JavaScript",
      },
      {
        img: <SiHtml5 />,
        txt: "HTML",
      },
      {
        img: <SiCss3 />,
        txt: "CSS",
      },
      {
        img: null,
        txt: "API",
      },
    ],
    category: "#F8D210",
  },
  {
    id: 11,
    title: "Time Tools",
    gitHub: "https://github.com/oleosb/sb-tools",
    img: timeToolsImg,
    description:
      "O SB Time Tools é um conjunto de ferramentas composto por cronômetro, timer, pomodoro e tabata como objetivo de ajudar o usuário a administrar o tempo para determinadas atividades.",
    tags: [
      "cronometro",
      "timer",
      "pomodoro",
      "tabata",
      "javascript",
      "js",
      "html",
      "css",
      "tempo",
      "cronometer",
      "countdown",
      "sb",
      "tools",
      "ferramentas",
      "code",
      "codigo",
    ],
    tecs: [
      {
        img: <SiJavascript />,
        txt: "JavaScript",
      },
      {
        img: <SiHtml5 />,
        txt: "HTML",
      },
      {
        img: <SiCss3 />,
        txt: "CSS",
      },
      {
        img: <SiFigma />,
        txt: "Figma",
      },
      {
        img: <SiGit />,
        txt: "Git",
      },
    ],
    category: "#F8D210",
  },
  {
    id: 12,
    title: "Live User Filter",
    gitHub: "https://github.com/oleosb/live-filter-api",
    img: liveUserImg,
    description:
      "O Live Filter permite pesquisar e filtrar pessoas por seu nome e/ou localização.",
    tags: [
      "javascript",
      "js",
      "html",
      "css",
      "filtro",
      "filter",
      "user",
      "usuario",
      "live",
      "online",
      "code",
      "codigo",
    ],
    tecs: [
      {
        img: <SiJavascript />,
        txt: "JavaScript",
      },
      {
        img: <SiHtml5 />,
        txt: "HTML",
      },
      {
        img: <SiCss3 />,
        txt: "CSS",
      },
      {
        img: <SiFigma />,
        txt: "Figma",
      },
      {
        img: null,
        txt: "API",
      },
      {
        img: <SiGit />,
        txt: "Git",
      },
    ],
    category: "#F8D210",
  },
  {
    id: 13,
    title: "Password Generator",
    gitHub: "https://github.com/oleosb/password-generator",
    img: passwordGenImg,
    description:
      "Gerador de senhas. Permite o usuário escolher a quantidade de caracteres e incluir letras maiúsculas, minúsculas, símbolos e números.",
    tags: [
      "javascript",
      "js",
      "html",
      "css",
      "senha",
      "password",
      "gerador",
      "generator",
      "code",
      "codigo",
    ],
    tecs: [
      {
        img: <SiJavascript />,
        txt: "JavaScript",
      },
      {
        img: <SiHtml5 />,
        txt: "HTML",
      },
      {
        img: <SiCss3 />,
        txt: "CSS",
      },
      {
        img: <SiFigma />,
        txt: "Figma",
      },
      {
        img: <SiGit />,
        txt: "Git",
      },
    ],
    category: "#F8D210",
  },
  {
    id: 14,
    title: "Random Choice Picker",
    gitHub: "https://github.com/oleosb/random-picker",
    img: randomChoiceImg,
    description: "Sorteio de opções inseridas pelo usuário.",
    tags: [
      "javascript",
      "js",
      "html",
      "css",
      "random",
      "choice",
      "picker",
      "aleatorio",
      "escolha",
      "aleatoria",
      "sorteio",
      "code",
      "codigo",
    ],
    tecs: [
      {
        img: <SiJavascript />,
        txt: "JavaScript",
      },
      {
        img: <SiHtml5 />,
        txt: "HTML",
      },
      {
        img: <SiCss3 />,
        txt: "CSS",
      },
      {
        img: <SiFigma />,
        txt: "Figma",
      },
      {
        img: <SiGit />,
        txt: "Git",
      },
    ],
    category: "#F8D210",
  },
  {
    id: 15,
    title: "Questions API",
    gitHub: "https://github.com/oleosb/questions-api",
    img: questionsImg,
    description:
      "Jogo de perguntas como filtro para quantidade de perguntas e categorias.",
    tags: [
      "javascript",
      "js",
      "html",
      "css",
      "api",
      "quiz",
      "pergunta",
      "resposta",
      "code",
      "codigo",
    ],
    tecs: [
      {
        img: <SiJavascript />,
        txt: "JavaScript",
      },
      {
        img: <SiHtml5 />,
        txt: "HTML",
      },
      {
        img: <SiCss3 />,
        txt: "CSS",
      },
      {
        img: <SiFigma />,
        txt: "Figma",
      },
      {
        img: <SiGit />,
        txt: "Git",
      },
    ],
    category: "#F8D210",
  },
  {
    id: 16,
    title: "Notes App",
    gitHub: "https://github.com/oleosb/notes-app",
    img: notesImg,
    description:
      "Aplicativo Web de Anotações que permite o usuário a criar, editar e excluir notas. Todas as anotações são armazenadas no localStorage.",
    tags: [
      "javascript",
      "js",
      "html",
      "css",
      "note",
      "nota",
      "list",
      "local",
      "storage",
      "code",
      "codigo",
    ],
    tecs: [
      {
        img: <SiJavascript />,
        txt: "JavaScript",
      },
      {
        img: <SiHtml5 />,
        txt: "HTML",
      },
      {
        img: <SiCss3 />,
        txt: "CSS",
      },
      {
        img: <SiFigma />,
        txt: "Figma",
      },
      {
        img: <SiGit />,
        txt: "Git",
      },
    ],
    category: "#F8D210",
  },
];
