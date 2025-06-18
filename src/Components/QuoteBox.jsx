import { useEffect, useState } from "react";

// import '../style.css'

//----Data--availability--as of June 2025                         _____________
//Cheesy 9 pages * 20 per page ----------------------------------| total = 171 |----\       
//Clever 10 Pages * 20 per page ---------------------------------| total = 195 |-----\
//Complimentary 11 Pages * 20 per page --------------------------| total = 217 |----- |
// funny category has 9 pages * 20 per page ---------------------| total = 179 |------|
// romantic 11 pages till 10 * 20 per page, 11 th has 5 per page-| total = 205 |-----/
//Flirty 10 pages 9 pages * 20 per page + 1 * 3 per page --------| total = 183 |----/
//                                                                ------------------|



function QuoteBox({selectedCategory}){
    const[quote,setQuote] = useState("Loading....");
    const[txtCategory,setTxtCategory] = useState("");

    const getRandomRange = (n)=>{
        let min = 0,max = Math.floor(n);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const getRandomIndex = (s) =>{
        
        switch(s){
            case "Cheesy":
                return getRandomRange(171);
                break;
            case "Clever":
                return getRandomRange(195);
                break;
            case "Complimentary":
                return getRandomRange(217);
                break;
            case "Funny":
                return getRandomRange(179);
                break;
            case "Romantic":
                return getRandomRange(205);
                break;
            case "Flirty":
                return getRandomRange(183);
                break;
            default:
                return 0;
            
        }
    }


    const generate = async () => {
        let index = getRandomIndex(selectedCategory);
        let params = selectedCategory == ""?`random`:`category/${selectedCategory}?page=${index}&perPage=1`;
        let data = await fetch(`https://rizzapi.vercel.app/${params}`);
        console.log(`https://rizzapi.vercel.app/${params}`);
        console.log(selectedCategory);
        let response = await data.json();

        if(params == 'random'){
            setQuote(response?.text ?? "Loading....");
            setTxtCategory(response?.category?? "");
        }else{
            setQuote(response[0]?.text ?? "Loading....");
            setTxtCategory(response[0]?.category?? "");
        }
        

    }

    useEffect(() =>{
        generate();
    },[selectedCategory]);

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