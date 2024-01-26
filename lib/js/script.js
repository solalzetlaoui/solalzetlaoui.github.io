/*Tout ça c'est l'apparation en fade in sur scroll*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


/* ça c'est le bouton play/pause de la vidéo*/
document.getElementById('pause-button').addEventListener('click', function() {
    var showreel = document.getElementById('showreel');
    var buttonImage = this.querySelector('img');

    if (showreel.paused) {
        showreel.play();
        buttonImage.src = "lib/img/pause-button.png";
    } else {
        showreel.pause();
        buttonImage.src = "lib/img/play-button.png";
    }
});


/* ça c'est le bouton pour scroll en dessous du reel*/
document.getElementById('chevron').addEventListener('click', function() {
    var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    window.scrollTo({
        top: vh,
        behavior: 'smooth'
    });
});

$('#chevron').click(function() {
    var vh = $(window).height();
    $('html, body').animate({
        scrollTop: vh
    }, 700); // 2000 is the duration of the animation in milliseconds
});

/* ça c'est pour désactiver le reel au delà du viewport*/
window.addEventListener('scroll', function() {
    var showreel = document.getElementById('showreel');
    var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    if (window.scrollY > vh) {
        showreel.style.display = 'none';
    } else {
        showreel.style.display = 'block';
    }
});


/*Pour rendre les titres en gras*/
$(document).ready(function() {
    var page = window.location.href;
    $('.nav-link').each(function() {
        if (this.href === page) {
            $(this).addClass('active');
        }
    });
});