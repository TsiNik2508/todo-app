import React, { useState } from 'react';
import styles from './AddTodo.module.css';

// Интерфейс для пропсов компонента AddTodo
interface AddTodoProps {
  addTodo: (todo: { title: string }) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  // Обработчик отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      console.log('Submitting new todo:', title);
      addTodo({ title });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input 
        type="text" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Add Todo</button>
    </form>
  );
};

export default AddTodo;
