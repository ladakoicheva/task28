export default function TodoItem({ value }) {
  return <li className="todo-item">{value.text}</li>;
}
