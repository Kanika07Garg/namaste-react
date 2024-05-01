import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer";
//react element
// React.createElement => Object => HTML element(render)

//const heading = React.createElement("h1",{id:"heading"}, "Namaste react")

const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);