import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Stories from "./components/Stories";
import Flashcards from "./components/Flashcards";
import Quizzes from "./components/Quizzes";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import { PlayContextProvider } from "./contexts/PlayContext";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <PlayContextProvider>
          <NavBar />
          <Router>
            <div>
              <Switch>
                <Route path="/stories" component={Stories} />
                <Route path="/flashcards" component={Flashcards} />
                <Route path="/quizzes" component={Quizzes} />
              </Switch>
            </div>
            <Container
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "100vh" }}
            >
              <div className="w-100" style={{ maxWidth: "400px" }}>
                <AuthProvider>
                  <Switch>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <PrivateRoute
                      exact
                      path="/dashboard"
                      component={Dashboard}
                    />
                  </Switch>
                </AuthProvider>
              </div>
            </Container>
          </Router>
        </PlayContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
