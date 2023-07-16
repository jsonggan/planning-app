import React, { useState } from 'react';
import '../styles/checkbox.css'; 
import TodoListComponent from '../components/todo-list';
import todoList from '../data/mock_data/todolist.json';
import Sidebar from '../components/sidebar';
import '../styles/sidebar.css';

function Todo() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
 
  return (
    <div className={`page-container ${sidebarVisible ? 'sidebar-open' : ''}`}>
      <button onClick={toggleSidebar}>Toggle</button>
      {sidebarVisible && <Sidebar />}
      <div className="px-window-padding-small lg:px-window-padding-large pt-padding-heading1">
        <h1 className="text-3xl font-bold">
          Task
        </h1>
        <div className='pt-padding-component-medium'></div>
        {todoList['todolist'].map((title, index) => (
          <TodoListComponent key={index} title={title} index={index}/>
        ))}
      </div>
    </div>
  );
}

export default Todo;
