import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import FormPage from './components/FormPage';
import Home from './components/Home';
import Sucess from './components/Sucess';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/signup'>
            <FormPage />
          </Route>
          <Route path='/success'>
            <Sucess />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
