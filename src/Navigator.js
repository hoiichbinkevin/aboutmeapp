import { useState } from "react";
import "./styles/navigation.css"

function App() {
  
  const [isActive, setIsActive] = useState(false);
  
  const handleToggle = () => {
    setIsActive(!isActive);
  }

  return (
    <header>
     <nav className={`navbar ${isActive ? 'active' : ''}`}>
        <a href="/" className='nav-branding'>About Me</a>

        <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
        <span className={`black-line ${isActive ? 'active' : ''}`}></span>
            <li className='nav-item'>
              <a href="/" className='nav-link'>Home</a>
            </li>
            <li className='nav-item'>
              <a href="/music" className='nav-link'>Music</a>
            </li>
            <li className='nav-item'>
              <a href="/art" className='nav-link'>Art</a>
            </li>
        </ul>

          <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleToggle}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>

      </nav>
    </header>
  );
}

export default App;
