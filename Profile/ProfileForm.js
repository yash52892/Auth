import classes from './ProfileForm.module.css';
import { useContext, useRef } from 'react';
import TokenContext from '../../store/tokenContext';
import {useHistory} from 'react-router-dom';

const ProfileForm = () => {

  const tok=useContext(TokenContext);
  const pass=useRef(null);
  const history=useHistory();
  console.log(tok);
  
  const handlePassChange=()=>{
    const newEnteredpass=pass.current.value;
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBTSDcMIiQIhAgney8KSc7Iurf0R3PPKFI',{
      method: "POST",
      body: JSON.stringify({
        idToken: tok.token,
        password: newEnteredpass,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res=>{
      history.replace('/'); 
    });
  }
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={pass}/>
      </div>
      <div className={classes.action}>
        <button onClick={handlePassChange}>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
