import React, { Component } from "react";

class Recipies extends Component {
    state = {
        width: window.innerWidth,
        name: "",
        duration: 0,
        id: "",
        score: 0,
        open: false,
    };

     componentDidMount() {
        const URL = 'https://cookbook.ack.ee/api/v1/recipes?limit=10&offset=0';

            fetch(URL, {mode: "no-cors"})
            .then(response => response.json())
            .then(data => {
              this.setState({
                name: data.name,
                duration: data.duration,
                id: data.id,
                score: data.score,
                open: true,
              });
            })
        
    }

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
                <div>
                    {name}
nanananna
                </div>
            )

        }
    }
 
}

export default Recipies;