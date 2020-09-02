import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import ackeeFood from '../assets/ackeeFood.png';

class Recipies extends Component {
    state = {
        width: window.innerWidth,
        name: "",
        duration: 0,
        id: "",
        score: 0,
        open: false,
    };

    //  componentDidMount() {
    //     const URL = 'https://cookbook.ack.ee/api/v1/recipes?limit=10&offset=0';

    //         fetch(URL, {mode: "no-cors",
    //         headers: {
    //             "Content-Type": "Content-Type:application/json",
    //         },
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //           this.setState({
    //             name: data.name,
    //             duration: data.duration,
    //             id: data.id,
    //             score: data.score,
    //             open: true,
    //           });
    //         })
        
    // }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render(){
        const { width, name, duration, id, score } = this.state;
        const isMobile = width <= 978;

        if(isMobile){
            return(
                <div className="recipies-container">
                    lalalalala
                </div>
            )}

        else{
            return(
                <div className="recipies-container">
                    <div className="recipies-container-title">
                        <h1>Recipies</h1>
                        <NavLink exact to="/new"><i class="fas fa-plus title-plus"></i></NavLink>
                    </div>
                    <div>
                        <img src={ackeeFood} alt="ackee Food"/>
                        <div>
                            <p>Chocolate nutella with orange</p>
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            <i class="far fa-clock"></i> 60 min
                        </div>
                    </div>
                    <div>
                        <img src={ackeeFood} alt="ackee Food"/>
                        <div>
                            <p>Pear in milk chocolate with coconut flakes</p>
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            <i class="far fa-clock"></i> 30 min
                        </div>
                    </div>
                    <div>
                        <img src={ackeeFood} alt="ackee Food"/> 
                        <div>
                            <p>Chocolate nutella with orange</p>
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            <i class="far fa-clock"></i> 60 min
                        </div>
                    </div>
                </div>
            )

        }
    }
 
}

export default Recipies;