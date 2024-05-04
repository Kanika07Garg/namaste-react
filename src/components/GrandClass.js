import React from "react";

class Grand extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.name+"child constructor")

        this.state = {
            count:0
        }
    }
    componentDidMount(){
        console.log(this.props.name+"child mounted")
    }
    render(){
        console.log(this.props.name+"child rendered")
        return(
            <div className="user">
                <h1>Count: {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState ({
                        count: this.state.count + 1
                    })
                }}>Count</button>
                <h2>{this.props.name}</h2>
            </div>
        )
    }

}

export default Grand;