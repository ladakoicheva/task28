import TodoItem from "./TodoItem";

export default function TodoList({ value }) {
  return (
    <div className="todo-wrap">
      <ul className="todo-list">
        {value.map((todo) => (
          <TodoItem value={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}
