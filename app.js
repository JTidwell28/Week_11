function game(){
    hname()
    humanguess()
}
function hname() {
    var name = prompt("What's your name?")
    alert(`Hello ${name}!`)
    return hname
}
hname()

function number(){
    var numberpicker = Math.floor(Math.random() * 10) + 1  
    return numberpicker
}


function humanguess(numberpicker){
    var score = 0;
    do{
        var numberpicker = number()
        var score = score + numberpicker
        alert(`You drew ${score} `)
        var again = prompt(`Your total is ${score} Y to draw again N to stop drawing`)
        
    }while(again == "Y") 

    return score
}

humanguess()

funtion computerguess(){
    var cscore = 0;
    do{
        var numberpicker = number()
        var cscore = cscore + numberpicker
        alert(`The computer drew ${cscore}`)
    }while(cscore)
}
