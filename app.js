function scorem(){
    scoreh = 0
    scorec = 0
    score = 0
}
function hname() {
    var name = prompt("What's your name?")
    alert(`Hello ${name}!`)
    return hname
}

function number(){
    var random = Math.floor(Math.random() * 10) + 1  
    return random
}

function humanguess(random){
    do{
        totalh = totalh + random
        var pickh = (`The number you drew was ${random}. Your total is${totalh} Would you like to pick again "y" for yes. "n" for no.`)
        
    }while(again == "Y") 
    return humanguess
}

hname()

humanguess()
