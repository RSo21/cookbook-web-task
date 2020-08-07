import React, { Component } from "react";
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
                <div>
                   new recipie
                </div>
            )

        }
    }
 
}

export default Recipies;