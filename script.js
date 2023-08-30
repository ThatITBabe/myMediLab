


$(document).ready(function () {

    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});



$(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        900: {
            items: 2
        }
    }
});




var lightbox = GLightbox();
lightbox.on('open', (target) => {
    console.log('lightbox opened');
});
var lightboxDescription = GLightbox({
    selector: '.glightbox2'
});
var lightboxVideo = GLightbox({
    selector: '.glightbox3'
});
lightboxVideo.on('slide_changed', ({ prev, current }) => {
    console.log('Prev slide', prev);
    console.log('Current slide', current);

    const { slideIndex, slideNode, slideConfig, player } = current;

    if (player) {
        if (!player.ready) {
            // If player is not ready
            player.on('ready', (event) => {
                // Do something when video is ready
            });
        }

        player.on('play', (event) => {
            console.log('Started play');
        });

        player.on('volumechange', (event) => {
            console.log('Volume change');
        });

        player.on('ended', (event) => {
            console.log('Video ended');
        });
    }
});

var lightboxInlineIframe = GLightbox({
    selector: '.glightbox4'
});




const backToTopButton = document.getElementById("back-to-top");
const content = document.getElementById("content");

backToTopButton.addEventListener("click", () => {
  content.scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

