/**
 * Created by User on 21.07.2017.
 */

document.addEventListener('DOMContentLoaded', function(){
    playing = setInterval(NextSlide,3000);
    slideshowControlButton.onclick = function () {
      ChangeSlideshowState();
    };
    nextSlideControlButton.onclick = function () {
        GetNextSlide();
    };
    prevSlideControlButton.onclick = function () {
        GetPrevSlide();
    }
});

var slides = document.querySelectorAll('.slider_container .slide');
var currentSlideNumber = 0;
var isPlaying = true;
var playing;
var slideshowControlButton = document.querySelector('#play_btn');
var nextSlideControlButton = document.querySelector('#next_btn');
var prevSlideControlButton = document.querySelector('#prev_btn');

function NextSlide(){
    slides[currentSlideNumber].className = 'slide';
    currentSlideNumber = (currentSlideNumber + 1) % slides.length;
    slides[currentSlideNumber].className += ' shown_slide';
}

function ChangeSlideshowState() {
    if (isPlaying === true)
    {
        PauseSlides();
    }
    else {
        PlaySlides();
    }
}

function PlaySlides() {
    isPlaying = true;
    playing = setInterval(NextSlide,3000);
    ChangeStateVisibility();
}

function PauseSlides() {
    isPlaying = false;
   clearInterval(playing);
    ChangeStateVisibility();
}

function GetNextSlide() {
    GoToSlide(currentSlideNumber + 1);
}

function GetPrevSlide () {
    GoToSlide(currentSlideNumber - 1);
};

function GoToSlide(slideNumber) {
    clearInterval(playing);
    isPlaying = false;
    ChangeStateVisibility();
    slides[currentSlideNumber].className = 'slide';
    currentSlideNumber = (slideNumber + slides.length) % slides.length;
    slides[currentSlideNumber].className += ' shown_slide';
}

/*Изменение отображения кнопки проигрывателя*/
function ChangeStateVisibility() {
    if (isPlaying === true)
    {
        var current_button = slideshowControlButton.querySelector('img');
        current_button.setAttribute('src','images/slider/pauseButton.png');
    }
    else
    {
        var current_button = slideshowControlButton.querySelector('img');
        current_button.setAttribute('src','images/slider/playButton.png');
    }
}