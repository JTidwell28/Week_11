function hname() {
    var name = prompt("What's your name?")
    alert(`Hello ${name}!`)
    return hname
}

function number(){
    var random = Math.floor(Math.random() * 10) + 1  
    return random
}

function humanguess(){
    do{        
        score = score + random     
        alert(`Your card was ${random}. Total ${score} `)
        if (score > 20){
            alert("Im sorry...you went over 20.")
            cpscore++
            break
        }
}

hname()
number()