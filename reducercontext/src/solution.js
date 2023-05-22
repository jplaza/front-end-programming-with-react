// Paso 1: Crear el contexto TaskContext.js
import { createContext } from 'react';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);


// Paso 2: Pon state y dispatch en el Context
import { TasksContext, TasksDispatchContext } from './TasksContext.js';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  // ...
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        ...
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

// Paso 3: Utiliza el contexto donde lo necesites

export default function TaskList() {
  const tasks = useContext(TasksContext);
  // ...

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);
  // ...
  return (
    // ...
    <button onClick={() => {
      setText('');
      dispatch({
        type: 'added',
        id: nextId++,
        text: text,
      });
    }}>Add</button>
  // ...

  // Un paso más allá
  export function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    return (
      <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
          {children}
        </TasksDispatchContext.Provider>
      </TasksContext.Provider>
    );
  }

  export function useTasks() {
    return useContext(TasksContext);
  }

  export function useTasksDispatch() {
    return useContext(TasksDispatchContext);
  }