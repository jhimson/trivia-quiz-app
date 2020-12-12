/* eslint-disable jsx-a11y/label-has-associated-control */
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Setup from './components/Setup';
import ExamCard from './components/ExamCard';

function App() {
  return (
    <Switch>
      <Route path="/" component={Setup} exact />
      <Route path="/exam" component={ExamCard} exact />
    </Switch>
  );
}

export default App;
