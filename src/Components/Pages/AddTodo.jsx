import React, { useState } from "react";

import classes from './AddTodo.module.css';



const InputDate = (props) => {

  return props.date.toLocaleTimeString();

}

const AddTodo = (props) => {

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const submitHandler = () => {

    console.log(title);

    console.log(description);

    // return (
    //     <h1>{title}</h1>
    // );
    
    };
  
  return (<div className={classes.container}>
    
    {/* {title?<h1>{title}</h1>:''} */}
  
      <form>

        <fieldset>

            <div className={classes.formContainer}>

              <h3> Please Add Todo</h3>

              <p> Enter Todo Title <InputDate date={new Date()}  /> </p>

              <input type="text" onChange={(e) => setTitle(e.target.value)} className={classes.formControl} />

              <p> Enter Todo Description</p>

              <input type="text" onChange={(e) => setDescription(e.target.value)} className={classes.formControl} />

              <button type="button" onClick={submitHandler} className={classes.BtnAdd}>Add Todo</button>
              
            </div>

        </fieldset>

      </form> 
  </div>);
};

export default AddTodo;