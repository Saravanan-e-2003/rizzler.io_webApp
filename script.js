let txt = document.getElementById("txt");
let url = "https://rizzapi.vercel.app/random"


generate()
function generate(){
    let k = async function(){
        let data = await fetch(url)
        let response = await data.json();
        console.log("API response -- ",response.text);
        dispTxt(response.text)
    }
    k()
}

function dispTxt(s){
    txt.innerHTML = s;
}