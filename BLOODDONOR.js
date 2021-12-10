function blood(type,rh){
    if (type == "O-"){
        corrections = "Correct, you can donor your bloods";
    }else if (type[0] == rh[0] && type[type.length -1] == rh[rh.length - 1] ) {
        corrections = "Correct, you can donor your bloods";
    }else if (type[0] == rh[0] && type[type.length -1] =="-"){
        corrections = "Correct, you can donor your bloods";
    }else if (type[0] == "O" && type[type.length -1] == rh[rh.length - 1] ){
        corrections = "Correct, you can donor your bloods"; 
    }else{
        corrections = "You cant donor, he/she might not live";
    }
    if (rh[1] == 'B' || rh[1] == 'A'){
        if(type[0] == rh[1]){
            corrections = "Correct, you can donor your bloods"; 
        }
    }
    return corrections;
}
const prompt = require ('prompt-sync')();

var presence = prompt("What is your presence of antigen(A/B/NEITHER/BOTH) = ");
if (presence == "NEITHER"){
    presence = "O";
    }else if (presence == "BOTH"){
        presence = "AB";
    }else {
        presence = presence
    }

var rh_factor = prompt("What is your RH factor ( + or -) = ");   

let bloods = presence+rh_factor;

var needed = prompt("What type of blood is needed? = ")

let correction = blood(bloods,needed);
console.log(correction)