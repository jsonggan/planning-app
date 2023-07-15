import React from 'react';
import '../styles/checkbox.css'; 
import TodoListComponent from '../components/todo-list';
import todoList from '../data/mock_data/todolist.json';

function Todo() {
  return (
    <div className="px-window-padding-small lg:px-window-padding-large pt-padding-heading1">
      <h1 className="text-3xl font-bold">
        Task
      </h1>
      <div className='pt-padding-component-medium'></div>
      {todoList['todolist'].map((title, index) => (
        <TodoListComponent key={index} title={title} index={index}/>
      ))}
    </div>
  );
}

export default Todo;
