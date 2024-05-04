import UserClass from "./UserClass";
import User from "./User";
import React from "react";
import Grand from "./GrandClass";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor")
    }

    componentDidMount(){
        console.log("parent mounted")
    }
    render(){
        console.log("parent rendered")
        return(
            <div className="about">
                <h1>About</h1>
                <h3>This is about page</h3>
                {/* <User name={"Kanika From Function"}/> */}
                <UserClass/>
               
            </div>
        )
    }
}
// const About = () => {
//     return(
//         <div className="about">
//             <h1>About</h1>
//             <h3>This is about page</h3>
//             <User name={"Kanika From Function"}/>
//             <UserClass name={"Kanika from class"}/>
//         </div>
//     )
// };

export default About;