function checkMood(score) {
    if (score > 7){
        mood = "ex1"
        console.log(mood)
        return(mood)
        $("body").css("background-color", "yellow")
    }

    else if (4 < score && score < 7) {
        mood = "ex2"
        console.log(mood)
        return(mood)
    } 
    
    else {
        mood = "ex3"
        console.log(mood)
        return(mood)
    }

};

function showMood() {
    let randomScore = Math.floor(Math.random() * 10) + 1;
    let moodResult = checkMood(randomScore);

    if (moodResult == "ex1"){
        $("#mood-display").html(
            "Score: " + randomScore + "<br>Your mood is: <b>" + moodResult + "</b>"
         );
    }

    else if(moodResult == "ex2"){
        $("#mood-display").html(
            "Score: " + randomScore + "<br>Your mood is: <b>" + moodResult + "</b>"
         );
    }

    else{
        $("#mood-display").html(
            "Score: " + randomScore + "<br>Your mood is: <b>" + moodResult + "</b>"
         );
    }
};

$("#mood-button").click(function () {
    showMood();
});