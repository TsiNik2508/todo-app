# ToDo App

Это простое приложение для управления списком задач, разработанное с использованием TypeScript, React и React Hooks. Приложение позволяет добавлять задачи, отмечать их как выполненные и очищать списки задач.

## Запуск проекта

Для запуска проекта выполните следующие шаги:

1. Клонируйте репозиторий:
    ```sh
    git clone https://github.com/yourusername/todo-app.git
    ```
2. Перейдите в директорию проекта:
    ```sh
    cd todo-app
    ```
3. Установите зависимости:
    ```sh
    npm install
    ```
4. Запустите проект:
    ```sh
    npm start
    ```

## Основные возможности

- Добавление новой задачи
- Просмотр всех задач, активных задач и выполненных задач
- Пометка задачи как выполненной
- Очистка всех задач
- Очистка всех выполненных задач
- Сохранение задач в `localStorage` для сохранения данных при перезагрузке страницы

## Будущие доработки

### 1. Добавление классов и улучшение структуры CSS
- Реализовать подход БЭМ (Блок, Элемент, Модификатор) для структурирования CSS классов
- Переписать существующие стили с использованием БЭМ

### 2. Адаптивная верстка
- Сделать адаптивную верстку для мобильных устройств и планшетов
- Обеспечить корректное отображение на экранах различных размеров

### 3. Улучшение пользовательского интерфейса
- Добавить более сложные анимации и переходы
- Улучшить стиль и внешний вид кнопок и других элементов интерфейса

## Структура проекта

- `src/components`: Компоненты приложения
  - `AddTodo`: Компонент для добавления новой задачи
  - `TodoList`: Компонент для отображения списка задач
- `src/styles`: Стили приложения
  - `App.module.css`: Основные стили приложения
  - `AddTodo.module.css`: Стили компонента AddTodo
  - `TodoList.module.css`: Стили компонента TodoList
- `src/App.tsx`: Главный компонент приложения

## Контрибьютинг

Если вы хотите внести изменения или улучшения, пожалуйста, создайте пулреквест и опишите, какие изменения вы внесли и почему.
