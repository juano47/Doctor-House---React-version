import './App.css';
import { Link } from 'react-router-dom';
import Doctors from './pages/Doctors';
import './components/Doctor.css';
import { createContext } from 'react';

export const ThemeContext = createContext('light');

function App() {
  return (
    <div className='App'>
      <ThemeContext.Provider value='dark'>
        <h1>Hello to Doctor House React version</h1>
        <nav
          style={{
            borderBottom: 'solid 1px', paddingBottom: '1rem',
          }}
        >
          <Link to='/doctors'>Doctors</Link>
        </nav>
        <div className='test'>
          <Doctors size={4} loadMoreCard />
        </div>
      </ThemeContext.Provider>
    </div>);
}

export default App;
