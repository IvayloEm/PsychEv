Template.home.events({

    'submit form': function(event){

        event.preventDefault();
        console.log('heeyyyyy');

    var emoVal, phonesVal, timeVal, hypnoVal, bweVal;

    console.log('hi');
    var radios = document.getElementsByName('emo-state');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            emoVal = radios[i].value;
            console.log('heeyyyyy1');
            break;
        }
    }
    console.log(emoVal);

    radios = document.getElementsByName('headphones');

    for (i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            phonesVal = radios[i].value;
            console.log('heeyyyyy2');
            break;
        }
        else console.log('phones not checked');

    }

    radios = document.getElementsByName('time-available');

    for (i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            timeVal = radios[i].value;
            console.log('heeyyyyy3');
            break;
        }
    }

    radios = document.getElementsByName('trance-states');

    for (i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            hypnoVal = radios[i].value;
            console.log('heeyyyyy4');
            break;
        }
    }

    radios = document.getElementsByName('bwe-experienced');

    for (i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            bweVal = radios[i].value;
            console.log('heeyyyyy5');
            break;
        }
    }

    if (emoVal == 1) {
        if (timeVal == 10) {
            window.location = "http://localhost:3000/tracks/energizer";
        }
    }
        window.location = "http://localhost:3000/tracks/energizer";

    }

});

