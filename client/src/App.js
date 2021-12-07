import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Prompts from './pages/Prompts';
import Suggestions from './pages/Suggestions';
import Signup from './pages/Signup';
import Activity from './pages/Activity';
import Nav from './components/Nav';


function App() {
  return (
    <Router>
      <Nav />
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/prompts" component={Prompts} />
        <Route exact path="/suggestions" component={Suggestions} />
        <Route exact path="/suggestions/:id" component={Activity} />
      </div>
    </Router>

  );
}

export default App;
