import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginPage/LoginForm';
import { ProfilePage } from "./components/ProfilePage/ProfilePage";
import './App.css';

function App() {
  const state = useSelector(state => state.auth);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/profile">
            <ProfilePage login={state.login} />
          </Route>
          <Route path="/">
            <h1>Вход</h1>
            <LoginForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
