import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Training from './pages/Training/Training';
import Settings from './pages/Settings/Settings';
import About from './pages/About/About';
import LogInPage from './pages/Login/LogInPage';
import NavBar from './components/Navbar/NavBar';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

const LoginContainer = () => (
  <div>
      <Route path="/login" component={LogInPage} exact />
  </div>
)

const DefaultContainer = () => (
    <div>
      <NavBar />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/settings" component={Settings} />
      <Route path="/about" component={About} />
      <Route path="/training" component={Training} />
    </div>
 )

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/(login)" component={LoginContainer}/>
        <ProtectedRoute component={DefaultContainer}/>
      </Switch>
    </div>
  );
}

export default App;
