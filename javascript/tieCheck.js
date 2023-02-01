export function tieCheck (fieldCounter, winBool) {
    if (fieldCounter === 9 && !winBool) {
        document.querySelector('.winner').innerHTML = "IT'S A TIE" 
        window.setTimeout(function() {
            window.addEventListener("click", function(){
                location.reload();
            });
        }, 2000);
    }
}