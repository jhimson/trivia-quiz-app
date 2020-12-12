/* eslint-disable jsx-a11y/label-has-associated-control */
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Setup from './components/Setup';

function App() {
  return (
    <Switch>
      <Route path="/" component={Setup} />
    </Switch>
  );
}

export default App;
