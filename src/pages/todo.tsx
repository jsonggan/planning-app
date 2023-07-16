import React, { useEffect } from 'react';
import '../styles/checkbox.css'; 
import TodoListComponent from '../components/todo-list';
import todoList from '../data/mock-data/todolist.json';
import Sidebar from '../components/sidebar';
import '../styles/sidebar.css';
import pagePaddingConfig from '../data/style.json';

// redux
import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { onPaddingChange } from '../redux/page-padding';
import { onSideBarChange } from '../redux/side-bar';

function Todo() {
  // redux
  const pagePadding = useSelector((state: RootState) => state.pagePadding.value)
  const sideBar = useSelector((state: RootState) => state.sideBar.value)
  const dispatch = useDispatch()

  const toggleSidebar = () => {
    dispatch(onSideBarChange(sideBar));
  };

  useEffect(() => {
    // using linear regression to calculate page padding
    const calculatePagePadding = () => {
      const minPadding = pagePaddingConfig['pagePadding']['minPadding'];
      const vwWhenMinPadding = pagePaddingConfig['pagePadding']['vwWhenMinPadding'];
      const parameter = pagePaddingConfig['pagePadding']['parameter'];
      const vw = window.innerWidth;

      var padding;
      if (vw < vwWhenMinPadding){
        padding = minPadding;
      } 
      else {
        padding = (((vw-vwWhenMinPadding)*(parameter - minPadding)) / (1000 - vwWhenMinPadding)) + minPadding
      }
      dispatch(onPaddingChange(padding));
    };

    calculatePagePadding();
    window.addEventListener('resize', calculatePagePadding);
    return () => {
      window.removeEventListener('resize', calculatePagePadding);
    };
  }, []);

  const pageContentStyle = {
    paddingLeft: `${pagePadding}rem`,
    paddingRight: `${pagePadding}rem`,
  };

  return (
    <div className={`page-container ${sideBar ? 'ml-80' : ''}`}>
      <button onClick={toggleSidebar}>Toggle</button>
      {sideBar && <Sidebar />}
      <div className='pt-padding-heading1' style={pageContentStyle}>
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
