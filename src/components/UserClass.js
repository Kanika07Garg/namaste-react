import React from "react";
import Grand from "./GrandClass";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.name+"child constructor")

        this.state = {
            userInfo : {
                login:"",
                location:""
            }
           
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/kanika07garg");
        const json = await data.json()
        this.setState({
            userInfo: json,
        })
        console.log(json )
    }
    render(){
        console.log(this.props.name+"child rendered")
        return(
            <div className="user">
                <h1>test</h1>

                <h2>{this.state.userInfo.login}</h2>
                <img src={this.state.userInfo.avatar_url}></img>
                {/* <Grand name={"grand"}/> */}
            </div>
        )
    }

}

export default UserClass;