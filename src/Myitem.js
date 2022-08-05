import React from "react";

class Item extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            click : 0 ,
            limit : 100 
        }
        }
    
    click = () => {
        this.setState({
            click : this.state.click +1  ,
            limit : this.state.limit +1
        }
        )
        
    }
    render(){
         return(
            <h1 onClick ={() => this.click()}>
                {this.state.click }Hello {this.state.limit}World {this.props.name}
            </h1>
        )
    }
}
export default Item;