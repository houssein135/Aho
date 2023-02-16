import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './images/logo.ico';
import './App.css';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Services from './pages/Services';
//import Realisations from './pages/Realisations';
import Contact from './pages/Contact';
import Payment from "./Payment";
import Completion from "./Completion";

function App() {
  
  const [isHamburgerActive, setHamburgerActive] = useState("hamburger");
  const [isMenuSidebarActive, setMenuSidebarActive] = useState("menu-sidebar");

  function handleToogle() {
    setHamburgerActive(prev => {
       return prev == "hamburger" ? "hamburger change" : "hamburger";
    })

    setMenuSidebarActive(prev => {
      return prev == "menu-sidebar" ? "menu-sidebar active" : "menu-sidebar";
    })
  }

  return (
      <div>
        <header>
          <Link className='logo' to='/'>
            <img src={logo} alt='logo'/>
          </Link>
          <div className={isHamburgerActive} onClick={handleToogle} >
            <span className='bar1'></span>
            <span className='bar2'></span>
            <span className='bar3'></span>
          </div>
          <div className={isMenuSidebarActive}>
            <nav>
              <ul id='menu-menu-principal' className='menu'>
                <li>
                  <Link onClick={handleToogle} to='/'>Accueil</Link>
                </li>
                <li>
                  <Link onClick={handleToogle} to='/a-propos'>À propos</Link>
                </li>
                {/* <li>
                  <Link onClick={handleToogle} to='/realisations'>Réalisations</Link>
                 </li> */}
                <li>
                  <Link onClick={handleToogle} to='/services'>Services</Link>
                </li>
                <li>
                  <Link onClick={handleToogle} to='/nous-joindre'>Nous joindre</Link>
                </li>
              </ul>
            </nav>
            <hr></hr>
            <a href='mailto:onmyways63@gmail.com' className='email'>onmyways63@gmail.com</a>
          </div>
        </header>

          <Routes>
            <Route path='/' element={ <Home /> } />

            <Route path='/a-propos' element={ <Apropos /> } />

            <Route path='/services' element={ <Services /> } />

            {/* <Route path='/realisations' element={ <Realisations /> } /> */}

            <Route path='/nous-joindre' element={ <Contact /> } />

            <Route path='/paiement' element={ <Payment /> } />

            <Route path="/completion" element={<Completion />} />
          </Routes>

        <footer>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
          <p>
            <a href='mailto:onmyways63@gmail.com'>onmyways63@gmail.com</a>
          </p>
          <p>&copy; {new Date().getFullYear()} AHO</p>
        </footer>
      </div>
  );
}

export default App;
