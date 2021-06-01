import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import  "bootstrap/dist/css/bootstrap.min.css";
import TutorialList from './components/TutorialList';
import AddTutorial from './components/AddTutorial';
import Tutorial from './components/Tutorial';


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/" className="navbar-brand">
          Exemplo Bootstrap
        </a>{/* tag de link */}
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link> {/* tag de link de outra forma*/}
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={TutorialList} /> {/* cria uma rota (/ e /tuturial) para o componente TutorialList*/}
          <Route exact path="/add" component={AddTutorial} /> {/* cria uma rota para o componente */}
          <Route path="/tutorials/:id" component={Tutorial} /> {/* cria uma rota para o componente */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
