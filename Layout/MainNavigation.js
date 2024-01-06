import { Link } from 'react-router-dom';
import TokenContext from '../../store/tokenContext';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';

const MainNavigation = () => {
  const tok=useContext(TokenContext);
  const handleLogout=()=>{
    tok.handTok(null);
  }
  return (  
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
        {!tok.token &&<li>
            <Link to='/auth'>Login</Link>
          </li>}
          <li>
          {tok.token && <Link to='/profile'>Profile</Link>}
          </li>
          <li>
          {tok.token && <button onClick={handleLogout}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
