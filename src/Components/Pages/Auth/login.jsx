import React, { useState } from "react";

import classes from './login.module.css'

const Login = (props) => {

  const [email, setEmail] = useState("");

  const [ password, setPassword] = useState("");  

  const submitHandler = () => {

    console.log(email);

    console.log(password);

  };

    return (
        <div className={classes.container}>
    
        <div>
          <form>
            <fieldset>
                <div className={classes.formContainer}>

                 <h3> Welcome Admin</h3>
    
                  <p> Email</p>
    
                  <input type="email"  onChange={(e) => setEmail(e.target.value)} className={classes.formControl} />
    
                  <p> Password</p>
    
                  <input type="password"  onChange={(e) => setPassword(e.target.value)} className={classes.formControl} />
    
                  <button type="button" onClick={ submitHandler } className={classes.BtnAdd}>Login</button>
                </div>
    
            </fieldset>
          </form>
        </div>
       
      </div>
    );

}

export default Login;