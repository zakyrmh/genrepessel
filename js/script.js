// Tombol Navbar
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
  navMenu.classList.toggle('hidden');
});

// Countdown Date
var countDownDate = new Date("Jan 30, 2023 01:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("textCountdown").innerHTML = "Pendaftaran dalam :";
    document.getElementById("countdownDays").innerHTML = days;
    document.getElementById("countdownHours").innerHTML = hours;
    document.getElementById("countdownMinutes").innerHTML = minutes;
    document.getElementById("countdownSeconds").innerHTML = seconds;

    document.getElementById("linkDaftarOn1").style.display = "block";
    document.getElementById("linkDaftarOn2").style.display = "block";

    document.getElementById("linkDaftar1").style.display = "none";
    document.getElementById("linkDaftar2").style.display = "none";

    if (distance < 0) {
        clearInterval(x);

        var countDownDate1 = new Date("Feb 25, 2023 01:00:00").getTime();
        var y = setInterval(function () {
            var now1 = new Date().getTime();
            var distance1 = countDownDate1 - now1;
            var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
            var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
            var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
        
            document.getElementById("textCountdown").innerHTML = "Pendaftaran Berakhir dalam :";
            document.getElementById("countdownDays").innerHTML = days1;
            document.getElementById("countdownHours").innerHTML = hours1;
            document.getElementById("countdownMinutes").innerHTML = minutes1;
            document.getElementById("countdownSeconds").innerHTML = seconds1;

            document.getElementById("linkDaftarOn1").style.display = "none";
            document.getElementById("linkDaftarOn2").style.display = "none";

            document.getElementById("linkDaftar1").style.display = "block";
            document.getElementById("linkDaftar2").style.display = "inline-flex";
        
            if (distance1 < 0) {
                clearInterval(y);
        
                document.getElementById("cooldown").innerHTML = "Terima Kasih untuk 2023";

                document.getElementById("linkDaftarOn1").style.display = "block";
                document.getElementById("linkDaftarOn2").style.display = "block";
            
                document.getElementById("linkDaftar1").style.display = "none";
                document.getElementById("linkDaftar2").style.display = "none";
            }
        }, 1000);
    }
}, 1000);
