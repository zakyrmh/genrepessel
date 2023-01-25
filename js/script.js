var countDownDate = new Date("Feb 7, 2023 01:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("cooldown").innerHTML =
        days + " : " + hours + " : " + minutes + " : " + seconds;

    if (distance < 0) {
        clearInterval(x);

        document.getElementById("cooldown").innerHTML = "Silahkan Mendaftar";
    }
}, 1000);