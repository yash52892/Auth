import classes from './ProfileForm.module.css';
import { useContext, useRef } from 'react';
import TokenContext from '../../store/tokenContext';
import {useHistory} from 'react-router-dom';

const ProfileForm = () => {

  const history=useHistory();

  const tok=useContext(TokenContext);
  const pass=useRef(null);

  const handlePassChange=async (event)=>{
    event.preventDefault();
    const newEnteredpass=pass.current.value;
   let res= fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBTSDcMIiQIhAgney8KSc7Iurf0R3PPKFI',{
      method: "POST",
      body: JSON.stringify({
        idToken: tok.token,
        password: newEnteredpass,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json",
      }
    });
    let data=await JSON.stringify(res);
    console.log(data);
      history.replace('/'); 
  }
  return (
    <form className={classes.form} onSubmit={handlePassChange}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={pass}/>
      </div>
      <div className={classes.action}>
        <button type='submit'>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
