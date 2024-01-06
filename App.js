import { Switch, Route } from 'react-router-dom';
import TokenContext from './store/tokenContext';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useContext } from 'react';

function App() {
const tok=useContext(TokenContext);
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
       {!tok.isLoggedin && (
       <Route path='/auth'>
          <AuthPage />
        </Route>
        )}
        <Route path='/profile'>
        {tok.isLoggedin && <UserProfile />}
        {!tok.isLoggedin && <Redirect to='/auth'/>}
        </Route>
        <Route path='*'>
          <Redirect to='/'/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
