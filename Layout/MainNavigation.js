import { Link } from 'react-router-dom';
import TokenContext from '../../store/tokenContext';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import {useHistory} from 'react-router-dom';


const MainNavigation = () => {
  const tok=useContext(TokenContext);

  const history=useHistory();
  const handleLogout=()=>{
    tok.handleLogout();
    history.replace("/auth")
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
        {!tok.isLoggedin &&<li>
            <Link to='/auth'>Login</Link>
          </li>}
          <li>
          {tok.isLoggedin && <Link to='/profile'>Profile</Link>}
          </li>
          <li>
          {tok.isLoggedin && <button onClick={handleLogout}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
