

const lines = document.querySelector(".lines");

export function winnerCheck(arr, winBool, sign, i, j) {
    //Check column win
    if (arr[i][j] == arr[0][j] && arr[i][j] == arr[1][j] && arr[i][j] == arr[2][j]) {
        const line = document.querySelector(`.v${j}`);
        lines.style.zIndex = "2";
        line.style.visibility = "visible";
        window.setTimeout(function() {
            line.style.height = "100%";
        }, 100); 
        winBool = true;
        console.log("win " + sign);
    }   

    //Check row win
    if (arr[i][j] == arr[i][0] && arr[i][j] == arr[i][1] && arr[i][j] == arr[i][2]) {
        const line = document.querySelector(`.h${i}`);
        lines.style.zIndex = "2";
        line.style.visibility = "visible";
        window.setTimeout(function() {
            line.style.width = "100%";
        }, 100); 
        winBool = true;
        console.log("win " + sign);
    }

    //Check diagonal win
    if (arr[i][j] == arr[0][0] && arr[i][j] == arr[1][1] && arr[i][j] == arr[2][2]) {
        const line = document.querySelector(`.d0 span`);
        lines.style.zIndex = "2";
        line.style.visibility = "visible";
        window.setTimeout(function() {
            line.style.width = "100%";
        }, 100); 
        winBool = true;
        console.log("win " + sign);
    }

    //Check oposite diagonal win
    if (arr[i][j] == arr[0][2] && arr[i][j] == arr[1][1] && arr[i][j] == arr[2][0]) {
        const line = document.querySelector(`.d1 span`);
        lines.style.zIndex = "2";
        line.style.visibility = "visible";
        window.setTimeout(function() {
            line.style.width = "100%";
        }, 100); 
        winBool = true;
        console.log("win " + sign);
    }

    if (winBool) {
        window.setTimeout(function() {
            window.addEventListener("click", function(){
                location.reload();
            });
        }, 2000);

        document.querySelector('.winner').innerHTML = "WINNER IS " + sign;
        return winBool;
    }

}