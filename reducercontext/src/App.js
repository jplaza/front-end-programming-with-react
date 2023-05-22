import AddTask from './AddTask.js';
import TaskListFilter from './TaskListFilter.js';
import TaskList from './TaskList.js';
import TasksAppContext from './TasksContext.js';

export default function TaskApp() {
  return (
    <TasksAppContext>
      <h1>Prague itinerary</h1>
      <AddTask />
      <TaskListFilter />
      <TaskList />
    </TasksAppContext>
  );
}