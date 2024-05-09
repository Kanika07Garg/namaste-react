const Contact = () => {
    return(
        <div className="contact">
            <h1 className="font-bold m-2 p-2 text-xl">Contact Us</h1>
            <div>
                <input className="border border-black m-2" type="text" placeholder="name"></input>
                <input className="border border-black m-2" type="text" placeholder="message"></input>
            </div>
            <button className="border border-black rounded bg-gray-400 m-2 p-2">Submit</button>
        </div>
    )
}

export default Contact;