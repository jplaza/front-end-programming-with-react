# Tarea 2

Se desea implementar una página web que permita reordenar los elementos mediante arrastrar y soltar (drag and drop). Para ello deberán hacer uso de hooks y eventos a partir del siguiente código base:

**App.js**

```javascript
import React, { useState, useRef } from 'react';
import './App.css';
 
const App = () => {
  
  let dragItem = useRef();
  let dragOverItem = useRef();
  const [list, setList] = useState(['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6']);
 
  const dragStart = (e, position) => {

  };
 
  const dragEnter = (e, position) => {

  };
 
  const drop = (e) => {

  };
 
  return (
    <>
    {
    list &amp;&amp;
    list.map((item, index) => (
      <div style={{backgroundColor:'lightblue', margin:'20px 25%', textAlign:'center', fontSize:'40px'}}
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        key={index}
        draggable> 
          {item}
      </div>
      ))}
    </>
  );
};
export default App;
```

**Nota:** Sólo deberá modificar las funciones "dragStart", "dragEnter" y "drop". 