import React from "react";
import classes from './Home.module.css';

const Home = () =>{

    return (
        <div className={classes.container}>
              <h1 className="title is-1">This is the Home Page</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
            risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
            nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
            lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
            </p>
            <p> List of Todo</p>

            <div className={classes.row}>
                               
                <div className={classes.col_md_4}> 
                    <h3>Todo Title</h3>
                    <p>To add the link in the menu, use the  component by react-router-dom . The NavLink component provides a declarative way to navigate around the application. It is similar to the Link component, except it can apply an active style to the link if it is active.</p> 

                    <div className={classes.buttonControls}>
                        <div><button className={classes.deleteButton}>Delete</button> </div>
                        <div><button className={classes.editButton}>Edit</button></div>
                    </div>
                </div>
                <div className={classes.col_md_4}> 
                    <h3>Todo Title</h3>
                    <p>To add the link in the menu, use the  component by react-router-dom . The NavLink component provides a declarative way to navigate around the application. It is similar to the Link component, except it can apply an active style to the link if it is active.</p> 

                    <div className={classes.buttonControls}>
                        <div><button className={classes.deleteButton}>Delete</button> </div>
                        <div><button className={classes.editButton}>Edit</button></div>
                    </div>
                </div>
                <div className={classes.col_md_4}> 
                    <h3>Todo Title</h3>
                    <p>To add the link in the menu, use the  component by react-router-dom . The NavLink component provides a declarative way to navigate around the application. It is similar to the Link component, except it can apply an active style to the link if it is active.</p> 

                    <div className={classes.buttonControls}>
                        <div><button className={classes.deleteButton}>Delete</button> </div>
                        <div><button className={classes.editButton}>Edit</button></div>
                    </div>
                </div>

            </div>   
                                     
        </div>
    );
    
}

export default Home;