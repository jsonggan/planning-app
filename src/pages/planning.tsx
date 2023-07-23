import { useEffect } from 'react';
import '../styles/checkbox.css'; 
import TodoListComponent from '../components/todo-list';
import todoList from '../data/mock-data/todolist.json';
import Sidebar from '../components/sidebar';
import '../styles/sidebar.css';
import { usePagePadding } from './function/pagePadding';
import { CustomNavbar } from '../components/topnav';

// redux
import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { onSidebarChange } from '../redux/sidebar';
import { onMousePositionChange } from '../redux/mousePosition';

function Planning() {
  // redux
  const pagePadding = useSelector((state: RootState) => state.pagePadding.value);
  const sidebar = useSelector((state: RootState) => state.sidebar.value);
  const mousePositionX = useSelector((state: RootState) => state.mousePosition.x);
  const mousePositionY = useSelector((state: RootState) => state.mousePosition.y);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(onSidebarChange(!sidebar));
  };

  usePagePadding();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      dispatch(onMousePositionChange({ x: event.clientX, y: event.clientY }));
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  const pageContentStyle = {
    paddingLeft: `${pagePadding}rem`,
    paddingRight: `${pagePadding}rem`,
  };

  return (
    <div>
      <CustomNavbar />
      <div className={`page-container ${sidebar ? 'ml-80' : ''}`}>
        {/* <button onClick={toggleSidebar}>Toggle</button> */}
        {/* {sidebar && <Sidebar />} */}
        <div className='pt-padding-heading1' style={pageContentStyle}>
          <h1 className="text-3xl font-bold">
            Planning
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Planning;
