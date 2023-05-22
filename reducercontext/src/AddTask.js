import { useState, useContext } from 'react';
import { DispatchContext } from './TasksContext';

let nextId = 3;

export default function AddTask() {
  const dispatch = useContext(DispatchContext)
  const [text, setText] = useState('');
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText('');
          dispatch({
            type: 'added',
            id: nextId++,
            text: text,
          })
        }}>
        Add
      </button>
    </>
  );
}
