/* <div id="parent">
    <div id="child">
        <span>Hi I am here</span>
    </div>
</div> */

    const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"Child"},
    [React.createElement("span",{},"Hi I am here!"),React.createElement("span",{},"Hi I am  second here!")]
)
)

    const heading = React.createElement("h1",{id:"heading" },"Hello World from React!");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent)
