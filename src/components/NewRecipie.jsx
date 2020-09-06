import React, { Component } from "react";
import {NavLink} from "react-router-dom";
// import {NavLink} from "react-router-dom";
// import ackeeFood from '../assets/ackeeFood.png';

class Recipies extends Component {
    state = {
        width: window.innerWidth,
    };


    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render(){
        const isMobile = this.state.width <= 978;

        if(isMobile){
            return(
                <div className="recipies-container">
                    lalalalala
                </div>
            )}

        else{
            return(
                <div className="new-recipie-container">
                    <div className="new-recipe-title">
                        <NavLink exact to="/"><i class="fas fa-arrow-left"></i></NavLink>
                        <p>Add recipies</p>
                        <NavLink exact to="/new"><i class="fas fa-plus"></i></NavLink>
                        
                    </div>
                    <form className = "new-recipie-form">
                        <label className="new-recipie-form-label">Name of recipie <input className="form form-name" type="text"></input></label>
                        <label className="new-recipie-form-label">Description <input className="form form-description" type="text"></input></label>
                        <p>Ingredients </p>
                        <label className="new-recipie-form-label">Your ingredient <input className="form form-ingredients" type="text"></input></label>
                        <button className="new-recipie-form-btn"><i className="fas fa-plus"></i> &nbsp; Add</button>
                        <label className="new-recipie-form-label">Time<input className="form form-time" type="number"></input></label>    
                    </form>
                   
                </div>
            )

        }
    }
 
}

export default Recipies;