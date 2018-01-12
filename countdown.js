//  a 0 prefix so numbers less than 10 also are printed with 2 digits e.g. "07"
function prefixZero(value) {
    if (value > 9) {
        return value;
    } else {
        return "0"+value;
    }
}

var x; // variable to hold setInterval

var countdownDate; // outer scope timestamp to keep time precise
function displayCountdown(expiration){
    countdownDate = expiration;
    x = setInterval(function() {

        // Find the distance between now an the count down date
        distance = countdownDate - new Date().getTime();

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);



        // Output the result in an element with id="countdown"
        // straight injection into HTML, since the function is only used once
        document.getElementById("countdown").innerHTML = prefixZero(days) + " : " + prefixZero(hours) + " : "
        + prefixZero(minutes) + " : " + prefixZero(seconds) + "";
    }, 1000);
}
