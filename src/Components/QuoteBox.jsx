import { useEffect, useState } from "react";

// import '../style.css'
function QuoteBox(){
    const[quote,setQuote] = useState("Loading....");
    const[txtCategory,setTxtCategory] = useState("");
    const[category,setCategory] = useState("");

    const generate = async () => {
        let params = category == ""?`random`:`category/${category}`;
        let data = await fetch(`https://rizzapi.vercel.app/${params}`);
        // console.log(`https://rizzapi.vercel.app/${params}`);
        let response = await data.json();
        setQuote(response?.text ?? "Loading....");
        setTxtCategory(response?.category?? "");
    }

    useEffect(() =>{
        generate()
    },[]);

    return(
        <div className="wrapper">
            <div className="quote-box">
                <p id="txt">{quote}</p>
               <p id = "line">_______________________________________</p>
                <p id= "categories">category:-{txtCategory}</p>
                <button className="generate-button" onClick={generate}>Generate</button>
            </div>
        </div>
    )
}

export default QuoteBox;