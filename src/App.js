import './App.css';
import NavBar from './components/NavBar'
import Stories from './components/Stories'
import Flashcards from './components/Flashcards'
import Quizzes from './components/Quizzes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <div>
          <Switch>
            <Route path="/stories" component={Stories}>
              <Stories />
            </Route>
            <Route path="/flashcards" component={Flashcards}>
              <Flashcards />
            </Route>
            <Route path="/quizzes" component={Quizzes}>
              <Quizzes />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
