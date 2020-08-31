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
                    <form>
                        <label>Name of recipie<input type="text"></input></label>
                        <label>Description<input type="text"></input></label>
                        <p>Ingredients</p>
                        <label>Your ingredient<input type="text"></input></label>
                        <button><i class="fas fa-plus"></i> &nbsp; Add</button>
                        <label>Time<input type="number"></input></label>

                            
                    </form>
                   
                </div>
            )

        }
    }
 
}

export default Recipies;