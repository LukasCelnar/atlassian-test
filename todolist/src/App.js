import './App.scss';

import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TasksStatus from './components/TasksStatus';

const App = () => {

  return (
    <div className="App">
      <div className="App-wrapper">
        <TaskInput />
        <TasksStatus />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
