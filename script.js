window.onload = function(){
    //Variable's
    var buttonstart = document.getElementById('buttonstart');
    var buttonstop = document.getElementById('buttonstop');
    var buttonreset = document.getElementById('buttonreset');
    var appendsseconds = document.getElementById('timerseconds')
    var appendsmiliseconds = document.getElementById('timermiliseconds');
    var seconds = 00;
    var miliseconds = 00;
    var interval ;



    buttonstart.onclick = function(){
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    buttonstop.onclick = function(){
        clearInterval(interval);
    }

    buttonreset.onclick = function(){
        clearInterval(interval)
        miliseconds = "00"
        seconds = "00"
        appendsmiliseconds.innerHTML = miliseconds;
        appendsseconds.innerHTML = seconds;

    }

    function startTimer() {
        miliseconds++;

        if(miliseconds <= 9){
            appendsmiliseconds.innerHTML = "0" + miliseconds;
        }

        if(miliseconds > 9){
            appendsmiliseconds.innerHTML = miliseconds
        }

        if(miliseconds > 99){
            seconds++;
            appendsseconds.innerHTML = "0" + seconds;
            miliseconds = 0;
            appendsmiliseconds.innerHTML = "0" + 0
        }

        if(seconds > 9){
            appendsseconds.innerHTML = seconds;
        }





    }


}


