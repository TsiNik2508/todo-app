import React from 'react';
import styles from './TodoList.module.css';

// Интерфейс для задачи
interface Todo {
  title: string;
}

// Интерфейс для пропсов компонента TodoList
interface TodoListProps {
  todos: Todo[];
  completeTodo?: (todo: Todo) => void;
  completed?: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ todos, completeTodo, completed }) => {
  console.log('Rendering TodoList. Todos:', todos, 'Completed:', completed);
  
  return (
    <ul className={styles.list}>
      {todos.map((todo, index) => (
        <li key={index} className={`${styles.item} ${completed ? styles.completed : ''}`}>
          <span className={styles.todoItem} title={todo.title}>
            {todo.title}
          </span>
          {!completed && completeTodo && (
            // Кнопка для пометки задачи как выполненной
            <button onClick={() => completeTodo(todo)} className={styles.button}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
