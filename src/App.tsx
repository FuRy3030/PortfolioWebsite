import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import NavBar from './components/nav-bar/NavBar';
import LandingPage from './pages/landing-page/LandingPage';
import SkillsPage from './pages/skills-page/SkillsPage';
import ProjectPage from './pages/project-page/ProjectPage';
import SkillsStack from './components/skills-stack/SkillsStack';

interface Project {
  Name: string;
  Paragrahs: string[];
  Technologies: {
    FrontEnd: string[];
    BackEnd: string[] | null;
    Other: string[];
  };
  Images: string[];
  Video: string;
}

const Projects: Project[] = [
  {
    Name: 'Quarere',
    Paragrahs: [
      'Most of the people studying English do it, at least in some part, through reading while some of them treat reading as a primary source of the learning process. Moreover, nearly everyone opens Google and goes through popular articles that seem interesting. Quarere is the first version of a tool serving as a perfect addition when it comes to learning English this way. The process of how the application works is very simple.',
      'All the user needs is a custom, chosen piece of text. It could be anything: a short story from British Council, a technology-related article, or a chapter from a favorite book. Then the user can read the whole text in a comfortable interface that provides him with meanings, synonyms, antonyms, translations, examples, phonetics, and origins of the hovered words or phrases. After getting to the end of the story, all unknown words and phrases for the user can be transformed into learning materials forming a set, which allows for unlimited modification, including editing, adding, or deleting elements inside it. Finally, the user is able to revise new things by utilizing one of the learning modes, for instance, flashcards.',
      'On top of that, the application lets the learner use the embedded, significantly more detailed dictionary that contains even more meanings, translations, examples, and synonyms with plenty of sub-meanings accompanying them. In addition, it allows for the creation of the aforementioned learning materials directly from its elements. In other words, the user can choose which meanings, examples, synonyms, or translations he wants to use by simply clicking them.'
    ],
    Technologies: {
      FrontEnd: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AJAX', 'Bootstrap', 'DataTables', 'JSON'],
      BackEnd: ['C#', '.NET', 'ASP.NET', 'ASP.NET Web API', 'ASP.NET Web Forms', 'ADO.NET', 'Newtonsoft'],
      Other: ['SQL', 'Microsoft SQL Server', 'Visual Studio', 'Visual Studio Code', 'Postman']
    },
    Images: ['quarere', 'quarere 2', 'quarere 3', 'quarere 4'],
    Video: 'QuarereVideo'
  },
  {
    Name: 'IT.Quest',
    Paragrahs: [
      `IT.Quest primarily addresses the need for a system designed for examining students with specific features tailored for IT classes. It allows teachers to create single exercises of different types, combine them into problem sets, produce many assignments, pop quizzes, or tests restricted by time, review and grade users' answers, and export results to other media.`,
      'The application supports three types of exercises: normal, true / false, and programming. Moreover, their content can be formatted using an advanced text editor that allows for changes in font size, color, or style, usage of tables or images, and other features like writing code. Each exercise also includes a number of points, hashtags, and the type of answer.',
      `Problem sets could be reused many times for different assignments for several classes. The teacher can create as many sessions with distinct dates from one set as he wants. After the session finishes, each student's result is marked as not graded yet. The status of each educatee's work updates automatically when the teacher grades it. As a result, it shows the tutor which answers have to be graded, which are partially graded, and which are ready to go.`,
      'Additionally, the application allows for sending files, writing the code in the browser, or attaching it from the file. On top of that, it provides the teacher with an option to specify which programming language is required for a given exercise. Therefore, assignments involving databases or solving certain coding problems can be smoothly conducted through this system.'
    ],
    Technologies: {
      FrontEnd: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'AJAX', 'Bootstrap', 'DataTables', 'JSON', 'CodeMirror'],
      BackEnd: ['C#', '.NET Core', 'ASP.NET Core', 'ASP.NET Core MVC', 'Entity Framework Core', 'LinQ', 'Newtonsoft'],
      Other: ['SQL', 'Microsoft SQL Server', 'Visual Studio', 'Visual Studio Code', 'GitHub']
    },
    Images: ['it quest 2', 'it quest 3', 'it quest 4', 'it quest 5'],
    Video: 'ITQuest'
  },
  {
    Name: 'Codex',
    Paragrahs: [
      'tures and algorithms. It aims to describe them by the same categories, including the principle of operation, time and space complexity, pros and cons, scenarios and examples of usage, and sometimes even code snippets.',
      'Furthermore, Codex features a handy search bar that ensures fast and comfortable access to all of the sub-pages of the website - the user can instantly look for other elements. The application also includes helpful images in case of data structures and simple animations in case of algorithms.',
      'Moreover, Codex provides a convenient way of comparing the data structures within the aforementioned metrics and criteria. It allows for making a comparison of three structures at the same time. As a result, the user can quickly decide which option fits his task the most.'
    ],
    Technologies: {
      FrontEnd: ['HTML', 'CSS', 'JavaScript', 'React', 'React Bootstrap', 'React Router', 'React Redux'],
      BackEnd: null,
      Other: ['Visual Studio Code', 'GitHub']
    },
    Images: ['dsa', 'dsa 2', 'dsa 3', 'dsa 5'],
    Video: 'CodexVideo'
  }
]

interface AllSkills {
  Type: string;
  OrderList: {
    Name: string;
    CatchyPhrase: string;
    Rating: number;
  } [];
  Header: string;
  ShortDescription: string;
}

const Paths: string[] = [
  'front-end',
  'back-end',
  'other'
]

const AllMySkills: AllSkills[] = [
  {
    Type: 'Front End',
    OrderList: [
      {
          Name: 'HTML',
          CatchyPhrase: '<body> <span> Hi </span> </body>',
          Rating: 4.5
      },
      {
          Name: 'CSS',
          CatchyPhrase: 'color: white; border: 1px solid red;',
          Rating: 4.5
      },
      {
          Name: 'Bootstrap',
          CatchyPhrase: 'Container, row, column, modal, card',
          Rating: 4
      },
      {
          Name: 'Javascript',
          CatchyPhrase: 'const fnc = () => { return "Hello Word!" }',
          Rating: 5
      },
      {
          Name: 'jQuery',
          CatchyPhrase: '$( "button.continue" ).html( "Next Step..." )',
          Rating: 4
      },
      {
          Name: 'AJAX',
          CatchyPhrase: '$.ajax({ success: alert( "success!" ) })',
          Rating: 4
      },
      {
          Name: 'DataTables',
          CatchyPhrase: 'function () { $("#myTable").DataTable()',
          Rating: 2
      },
      {
          Name: 'CodeMirror',
          CatchyPhrase: 'let view = new EditorView ({...})',
          Rating: 1.5
      },
      {
          Name: 'JSON',
          CatchyPhrase: '{"name" : "John", "age" : 30, "car" : null}',
          Rating: 5
      },
      {
          Name: 'React',
          CatchyPhrase: 'root.render(<HelloMessage name="Adam" />)',
          Rating: 3
      },
      {
          Name: 'Material-UI',
          CatchyPhrase: 'Typography, Badge, Chip, Accordion, Card',
          Rating: 2
      },
      {
          Name: 'React Router',
          CatchyPhrase: '<Route path="/..." element={<... />}',
          Rating: 2
      },
      {
          Name: 'React Redux',
          CatchyPhrase: '<Provider store={store}>...</Provider>',
          Rating: 1
      },
      {
          Name: 'TypeScript',
          CatchyPhrase: 'interface CustomInterface {type: number}',
          Rating: 1
      },
    ],
    Header: 'Other personal kind of art',
    ShortDescription: 'Front-end has always been all about the user interface. In other words, all about convenience, transparency, and visual appeal. Though more analytical aspects innately came with ease, visually-related operations turned out to be harder to master. However, contrary to painting, I was always able to correct my mistakes, change the design, or try new, bizarre things. By practicing, I managed to overcome my shortcomings and even started enjoying designing the user interface using HTML, CSS, and others.'
  },
  {
    Type: 'Back End',
    OrderList: [
      {
        Name: 'C#',
        CatchyPhrase: 'public class Customer {public string...}',
        Rating: 4.5
      },
      {
        Name: '.NET',
        CatchyPhrase: 'public static void Main()',
        Rating: 4
      },
      {
        Name: '.NET Core',
        CatchyPhrase: 'private readonly UserManager<User>',
        Rating: 4
      },
      {
        Name: 'ASP.NET',
        CatchyPhrase: 'public partial class IndexModel : PageModel',
        Rating: 4
      },
      {
        Name: 'ASP.NET Web Forms',
        CatchyPhrase: 'using Microsoft AspNetCore.WebForms;',
        Rating: 2.5
      },
      {
        Name: 'ASP.NET Web API',
        CatchyPhrase: 'using Microsoft AspNetCore.WebAPI;',
        Rating: 4.5
      },
      {
        Name: 'ASP.NET MVC',
        CatchyPhrase: 'using Microsoft AspNetCore.Mvc;',
        Rating: 3.5
      },
      {
        Name: 'Newtonsoft',
        CatchyPhrase: 'string json = SerializeObject(obj)',
        Rating: 3.5
      },
      {
        Name: 'Entity Framework',
        CatchyPhrase: 'public class EntityContext : DbContext',
        Rating: 2
      },
      {
        Name: 'Entity Framework Core',
        CatchyPhrase: 'public class EntityContext : DbContext',
        Rating: 2
      },
      {
        Name: 'LinQ',
        CatchyPhrase: 'Array.Select(n => n).ToArray();',
        Rating: 2
      },
    ],
    Header: 'Place where all magic happens',
    ShortDescription: 'Back-end has always seemed more analytical and thus more approachable. However, during the development of my first full-stack project, I realized that the number of solutions was overwhelming. Single-page application, web API, model-view-controller, or razor pages - all required a different perspective. It took me a significant amount of time to sort out those distinctions and learn when to use which approach.'
  },
  {
    Type: 'Other',
    OrderList: [
      {
        Name: 'SQL',
        CatchyPhrase: 'SELECT column1, column2, ... FROM table',
        Rating: 4
      },
      {
        Name: 'Microsoft SQL Server',
        CatchyPhrase: 'Import table FROM ...',
        Rating: 3
      },
      {
        Name: 'Visual Studio',
        CatchyPhrase: 'C#, .NET, Deployment, Syntax',
        Rating: 5
      },
      {
        Name: 'Visual Studio Code',
        CatchyPhrase: 'Javascript, React, CSS, Syntax',
        Rating: 5
      },
      {
        Name: 'Postman',
        CatchyPhrase: 'Web API, HTTP response',
        Rating: 2.5
      },
      {
        Name: 'GitHub',
        CatchyPhrase: 'Repository, Code, GIT',
        Rating: 2
      }
    ],
    Header: 'Databases, IDEs, and other...',
    ShortDescription: 'Since the beginning databases, as well as other types of software, have seemed very intuitive. Moreover, they have always served as assistant tools. For instance, postman helped me in working on APIs and solving bugs associated with them.'
  }
]

function App() {
  const [ isIntersecting, setIsIntersecting ] = useState(false);

  const updateNavBarStyle = (isCurrentlyIntersecting: boolean) => {
    setIsIntersecting(isCurrentlyIntersecting);
  };

  return (
    <React.Fragment>
      <NavBar isLandingScreenVisible={isIntersecting} />
      <Routes>
        <Route path="/" element={<LandingPage updateNavBarStyle={updateNavBarStyle} />}>
          <Route path="home" element={<LandingPage updateNavBarStyle={updateNavBarStyle} />} />
        </Route>
        <Route path="skills" element={<SkillsPage />}>
          {AllMySkills.map((SkillsList: AllSkills, index: number) => {
            return <Route path={Paths[index]} key={index}
              element={<SkillsStack key={index} skills={SkillsList} />} 
            />
          })}
        </Route>
        <Route path="/projects/quarere" element={<ProjectPage id={0} project={Projects[0]} />} />
        <Route path="/projects/it-quest" element={<ProjectPage id={1} project={Projects[1]} />} />
        <Route path="/projects/codex" element={<ProjectPage id={2} project={Projects[2]} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
