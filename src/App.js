import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = () => <div>Welcome to Studentify</div>;

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
