import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Second from './Second';

function App() {
  const [activeView, setActiveView] = useState("home");

  const handleNavClick = (view) => {
    setActiveView(view === activeView ? null : view);
  };

  return (
    <Router>
      <div className="bigbox flex-col gap-16">
        <Navbar activeView={activeView} onNavClick={handleNavClick} />
        <Routes>
          <Route
            path="/"
            element={activeView === 'home' ? <Tiles /> : null}
          />
          <Route
            path="/second"
            element={activeView === 'grid' ? <Second /> : null}
          />
        </Routes>
      </div>
    </Router>
  );
}

function Navbar({ activeView, onNavClick }) {
  const [navopen, isnavopen] = useState(false);
  const [op, isop] = useState(false);
  return (
    <div className='nav py-3'>
      <div className="flex justify-end items-center pe-3">
        <button
          className="sm:hidden"
          onClick={() => isnavopen(!navopen)}
        >
          <img src={navopen ? "cross.png" : "navigation-bar.png"} className='showimg w-6 h-6'></img>
        </button>
      </div>
      <div
        className={`${navopen ? "flex pe-6" : "hidden pe-12"
          } flex-col items-center sm:flex sm:flex-row sm:justify-end sm:gap-8`}
      >

        <Link
          to="/"
          onClick={() => onNavClick('home')}
          className={activeView === 'home' ? 'active' : ''}
        >
          Home
        </Link>
        <Link
          to="/second"
          onClick={() => onNavClick('grid')}
          className={activeView === 'grid' ? 'active' : ''}
        >
          Grid
        </Link>
        <a href="https://www.linkedin.com/in/abhijit-sahu-41b327322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
function Tiles() {
  return (
    <div className='tiles flex flex-wrap justify-center gap-8'>
      <div className='tile tile1 order-3 sm:order-1'></div>
      <div className='tile tile2  order-2 sm:order-2'></div>
      <Nine></Nine>
    </div>
  );
}

function Nine() {
  const [click, setClick] = useState([]);

  const handleBoxClick = (index) => {
    setClick((prev) => [...prev, index]);
  };

  const resetColorsInSequence = () => {
    const sequence = [...click];
    setClick([]);
    sequence.forEach((index, i) => {
      setTimeout(() => {
        document.getElementById(`box-${index}`).style.backgroundColor = "rgba(0,64,122,1)"; // Adjust color if needed
      }, i * 300);
    });
  };

  return (
    <div className="nine grid grid-cols-3 gap-4 p-8 order-1 sm:order-3">
      {[...Array(9)].map((_, index) => (
        <Box
          key={index}
          id={`box-${index}`}
          index={index}
          onClick={handleBoxClick}
          resetColors={index === 8 ? resetColorsInSequence : null}
          isLast={index === 8}
        />
      ))}
    </div>
  );
}

function Box({ id, index, onClick, resetColors, isLast }) {
  const [open, setOpen] = useState(isLast);

  const handleClick = () => {
    if (resetColors) {
      resetColors();
    } else {
      setOpen(true);
      onClick(index);
    }
  };

  return (
    <div
      id={id}
      className="box"
      style={{ backgroundColor: open ? "rgba(122,0,0,1)" : "rgba(0,64,122,1)" }}
      onClick={handleClick}
    ></div>
  );
}


export default App;
