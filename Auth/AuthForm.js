import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [Loading, setLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const email=useRef(null);
  const pass=useRef(null);

  const handleAction=async()=>{
    setLoading(true);
    const enteredEmail=email.current.value;
    const enteredPass=email.current.value;
    if(!isLogin){
      const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBTSDcMIiQIhAgney8KSc7Iurf0R3PPKFI',{
        method: 'POST',
        body:JSON.stringify({
          email:enteredEmail,
          password:enteredPass,
          returnSecureToken:true
        }),
        headers: {
          "Content-Type": "application/json",
        }
      })
      if(!response.ok){
      const error=await response.json();
      alert(error.error.errors[0].message);
    }else{
      const data=await response.json();
      console.log(data);
    }
    setLoading(false);
    }
    else{
      setLoading(true);
      const response=await fetch('identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBTSDcMIiQIhAgney8KSc7Iurf0R3PPKFI',{
        method: 'POST',
        body:{
          email:enteredEmail,
          password:enteredPass,
          returnSecureToken:true
        },
        headers: {
          "Content-Type": "application/json",
        }
      })
      if(!response.ok)
    {
      alert(`${response.error.message}`);
    }
      const data=await response.json();
    setLoading(false);
    
    console.log(data);
  }
}

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form >
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' ref={email} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            ref={pass}
            required
          />
        </div>
        <div className={classes.actions}>
          {
           Loading ?(<span>Sending request....</span>):(<button onClick={handleAction}>{isLogin ? 'Login' : 'Sign Up'}</button>)
          }
        </div>
        <div className={classes.actions}>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;