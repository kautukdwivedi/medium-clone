import './App.css';
import React from 'react';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom'
import Blog from './pages/Blog'
import Search from './pages/Search'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header/>
        <Router>
          <Switch>
            <Route path="/" component={Search} exact/>
            <Route path="/blog" component={Blog} exact/>
            <Route path="/:id" component={Search} exact/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
