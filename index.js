let mins;
let secs;
    function setTime(){
        mins=parseInt(prompt("enter minutes"));
        secs=parseInt(prompt("enter seconds"));
        document.getElementById("displayTime").innerHTML=`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    function Start() {
        let totalTime = (mins*60)+secs;
        let currentTime = totalTime;
        const displayElement = document.getElementById("displayTime");

        const interval = setInterval(() => {
            currentTime--;

            if (currentTime >= 0) {
                const minutes = Math.floor(currentTime / 60);
                const seconds = currentTime % 60;
                const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                displayElement.innerHTML = formattedTime;
            } else {
                clearInterval(interval);
                document.getElementById("Sound").play();
                displayElement.innerHTML = "Time's up!";
            }
        }, 1000);
    }
    function Stop(){
        document.getElementById("Sound").pause();
    }