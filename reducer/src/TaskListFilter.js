
export default function TaskListFilter({onClearComplete, onClearAll}) {

  return (
    <div>
      <button onClick={(e) => onClearComplete()}>
        Clear completed
      </button>
      <button onClick={(e) => onClearAll()}>
        Clear all
      </button>
    </div>
  )
}