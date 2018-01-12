function prefixZero(value) {
    if (value > 9) {
        return value;
    } else {
        return "0"+value;
    }
}

var x;
var countdownDate;

function displayCountdown(expiration){
    countdownDate = expiration;
    x = setInterval(function() {

        // Get todays date and time
        //var now = new Date().getTime();

        // Find the distance between now an the count down date

        distance = countdownDate - new Date().getTime();

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);



        // Output the result in an element with id="countdown"
        document.getElementById("countdown").innerHTML = prefixZero(days) + " : " + prefixZero(hours) + " : "
        + prefixZero(minutes) + " : " + prefixZero(seconds) + "";
    }, 1000);
}
