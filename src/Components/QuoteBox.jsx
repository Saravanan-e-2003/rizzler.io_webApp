import { useEffect, useState } from "react";

// import '../style.css'
function QuoteBox(){
    const[quote,setQuote] = useState("Loading....");

    const generate = async () => {
        let data = await fetch(`https://rizzapi.vercel.app/random`);
        let response = await data.json();
        setQuote(response?.text ?? "Loading....");
    }

    useEffect(() =>{
        generate()
    },[]);

    return(
        <div className="wrapper">
            <div className="quote-box">
                <p id="txt">{quote}</p>
                <button className="generate-button" onClick={generate}>Generate</button>
            </div>
        </div>
    )
}

export default QuoteBox;