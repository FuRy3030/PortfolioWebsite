import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import NavBar from './components/nav-bar/NavBar';
import LandingPage from './pages/LandingPage';
import SkillsPage from './pages/SkillsPage';
import SkillsStack from './components/skills-stack/SkillsStack';

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
  const [ isIntersecting, setIsIntersecting ] = useState(true);

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
      </Routes>
    </React.Fragment>
  );
}

export default App;
