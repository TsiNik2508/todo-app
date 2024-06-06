import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';
import styles from './styles/App.module.css';

// Интерфейс для задачи
interface Todo {
  title: string;
}

const App: React.FC = () => {
  // Используем локальное хранилище для начального состояния
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  
  const [completedTodos, setCompletedTodos] = useState<Todo[]>(() => {
    const storedCompletedTodos = localStorage.getItem('completedTodos');
    return storedCompletedTodos ? JSON.parse(storedCompletedTodos) : [];
  });

  // Сохраняем задачи в локальное хранилище при изменении списка задач
  useEffect(() => {
    console.log('Todos:', todos);
    console.log('Completed Todos:', completedTodos);
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
  }, [todos, completedTodos]);

  // Добавляем новую задачу в начало списка
  const addTodo = (todo: Todo) => {
    console.log('Adding todo:', todo);
    setTodos([todo, ...todos]);
  };

  // Помечаем задачу как выполненную и переносим ее в список завершенных задач
  const completeTodo = (todo: Todo) => {
    console.log('Completing todo:', todo);
    setTodos(todos.filter(t => t !== todo));
    setCompletedTodos([...completedTodos, todo]);
  };

  // Очищаем все задачи
  const clearTodos = () => {
    console.log('Clearing all todos');
    setTodos([]);
  };

  // Очищаем все завершенные задачи
  const clearCompletedTodos = () => {
    console.log('Clearing all completed todos');
    setCompletedTodos([]);
  };

  return (
    <Router>
      <div className={styles.app}>
        <h1>ToDo App</h1>
        {/* Компонент для добавления новой задачи */}
        <AddTodo addTodo={addTodo} />
        <nav>
          {/* Навигационные ссылки */}
          <Link to="/">All</Link>
          <Link to="/active">Active</Link>
          <Link to="/completed">Completed</Link>
        </nav>
        <Routes>
          {/* Маршруты для различных видов списка задач */}
          <Route path="/" element={<>
            <TodoList todos={todos} completeTodo={completeTodo} />
            <TodoList todos={completedTodos} completed />
          </>} />
          <Route path="/active" element={<TodoList todos={todos} completeTodo={completeTodo} />} />
          <Route path="/completed" element={<TodoList todos={completedTodos} completed />} />
        </Routes>
        <div className={styles.buttons}>
          {/* Кнопки для очистки всех задач и завершенных задач */}
          <button onClick={clearTodos} className={styles.clearButton}>Clear All Todos</button>
          <button onClick={clearCompletedTodos} className={styles.clearButton}>Clear Completed Todos</button>
        </div>
      </div>
    </Router>
  );
};

export default App;
