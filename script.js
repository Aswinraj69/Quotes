const Quote = document.getElementById("quote");
const Author = document.getElementById("author");

function getQuote(){
    fetch("http://quotes.stormconsultancy.co.uk/random.json")
    .then((res) => {
return res.json();
    })
    .then((data)=>{
        Quote.innerHTML = data.quote;
        Author.innerHTML = `${data.author}`
    });
}
getQuote();