//all the countries to be guessed
var countries = [
    "india",
    "america",
    "united kingdom",
    "australia",
    "new zealand",
    "china",
    "south korea",
    "italy"
]
//lives is going to be max 5
let lives = 5;

//generate a random country
function randomCountry() {
    country = countries[Math.floor(Math.random() * countries.length)]
}

randomCountry();
console.log(country)


//word status display
let wordStatus = new Array()

//initial wordstate
for(let i = 0; i < country.length; i++){
    if(country.charAt(i) == ' '){
        wordStatus[i] = '&nbsp;'
    }
    else{
        wordStatus[i] = '_'
    }
    
}

console.log(wordStatus)
document.getElementById("display").innerHTML = wordStatus.join(" ")


function check(){

    if(lives==1){
        document.getElementById("message").innerHTML = "All lives exhausted!"
        document.getElementById("checkbtn").disabled = true;
    }
    
    var currLetter = document.getElementById('letter').value
    console.log(currLetter)
    //wrong guess
    if(!country.includes(currLetter)){
        document.getElementById('lives').innerHTML = --lives;
        document.getElementById("message").innerHTML = "Wrong guess! Try again!"
        if(lives == 0){
            document.getElementById("message").innerHTML = "All lives exhausted! Refresh!"

        }

    }
    //correct guess
    else{
        for(let i = 0 ; i < country.length; i++){
            if(country.charAt(i) == currLetter){
                wordStatus[i] = currLetter
                console.log(wordStatus)
                document.getElementById("display").innerHTML = wordStatus.join(" ")
                document.getElementById("message").innerHTML = "Correct guess!"

            }
        }
    }
    document.getElementById('letter').value = ""
    let count = 0;//counter to check if all the letters are guessed
    for(let i = 0 ; i < country.length; i++){
        if(wordStatus[i] != '_'){
            count ++;
        }
        
    }
    if(count == country.length){
        document.getElementById("message").innerHTML = "Victory! You guessed the word correctly!"

    }
}
