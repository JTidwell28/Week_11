   
        function hname() {
            var name = prompt("What's your name?")
            alert(`Hello ${name}! WELCOME TO THE GAME 20! THE GOAL IS TO BEAT THE COMPUTER BY DRAWING CARDS THAT HAVE THE NUMBERS 1-10! YOU HAVE TO GET AS CLOSE TO 20 OR 20 TO WIN.  `)
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
                alert(`It's your turn! You drew ${numberpicker} `)
                var again = prompt(`Your total is ${score} Y to draw again N to stop drawing`)
                
            }while(again == "Y") 

            return score
        }



        function cpguess(numberpicker){

            var cscore = 0;
            do{
                var numberpicker = number()
                var cscore = cscore + numberpicker
                alert(`The computer drew ${numberpicker }`)
                alert(`The computer total score is ${cscore}`)
            }while (cscore <= 16)
            return cscore
        }

        function scenario(score , cscore){
            if((cscore > score) && (cscore <= 20)){
                alert(`The computer got ${cscore} and you got ${score}...sorry you lose =(`)
                cpscore++
            }else if ((score > cscore) && (score <= 20)){
                alert(`The computer got ${cscore} and you got ${score}...YOU WIN`)
                hmscore++
            }else if (score == cscore){
                alert(`ITS A TIE NO POINTS`)
            }else {
                alert("someone failed idk")
            }
        }
    
function everything(){
    do{
        scenario(humanguess(number()),cpguess(number()))
        var againagain = prompt(`DO YOU WANT TO PLAY AGIN "Y" FOR YES "N" FOR NO. I HATE THIS`)
    }while (againagain = "Y")
}

everything()