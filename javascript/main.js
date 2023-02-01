import * as placePosition from "./placePosition.js";
import * as winnerCheck from "./winnerCheck.js";
import * as tieCheck from "./tieCheck.js";

const fields = document.querySelectorAll('.field');
let arr =  [ [0,0,0],[0,0,0],[0,0,0] ];
let sign = "X"; 
let i,j;
let signBool = true;
let fieldCounter = 0;
let winBool = false;

fields.forEach(field => 
    field.addEventListener("click", function() {
        (signBool) ? sign="X" : sign="O";

        const iLocation = field.className[7];
        const jLocation = field.className[8];

        i = parseInt(iLocation);
        j = parseInt(jLocation);

        if (arr[i][j]===0) {
            placePosition.placePosition(arr,i,j,sign);
            signBool = !signBool;
            field.innerHTML = sign;
            fieldCounter++;
        }

        winnerCheck.winnerCheck(arr, winBool, sign, i, j);        
        (winnerCheck.winnerCheck(arr, winBool, sign, i, j)) ? winBool=true : console.log("no win");

        tieCheck.tieCheck(fieldCounter, winBool);
        
    }

    
));