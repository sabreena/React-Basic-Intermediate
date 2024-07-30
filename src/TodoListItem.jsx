// Functional component with props

export function TodoListItem({ children, isComplete }) {
  return (
    <div>
      <label htmlFor={children}>
        <input id={children} type="checkbox" defaultChecked={isComplete} />
        {children}
      </label>
    </div>
  );
}
