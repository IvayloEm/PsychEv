function timer(limit) {
    console.log('timer says hi');
    var hoursLabel = document.getElementById("hours");
    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    setInterval(setTime(limit), 1000);
}
    function setTime(limit) {
        if (totalSeconds < limit) {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
        hoursLabel.innerHTML = pad(parseInt(totalSeconds / 3600));
    }
}

    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        }
        else {
            return valString;
        }
    }



Template.shamanic.onRendered( function() {
    var audio = new Audio('shamanic-beat.mp3');
    audio.play();
    timer(3600);
});

Template.adhdRelief.onRendered( function() {
    var audio = new Audio('adhd-relief.mp3');
    audio.play();
    timer(1800);
});

Template.creativeBoost.onRendered( function() {
    var audio = new Audio('creative-boost.mp3');
    audio.play();
    timer(1800);
});

Template.calmConfidence.onRendered( function() {
    var audio = new Audio('calm-confidence.mp3');
    audio.play();
    timer(2200);
});

Template.energizer.onRendered( function() {
    var audio = new Audio('energizer.mp3');
    audio.play();
    timer(720);
});