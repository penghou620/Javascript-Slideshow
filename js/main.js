var slideIndex = 0;

var slide1 = new Slide("first-ios-app.png","First iOS App","This is my first iOS App");
var slide2 = new Slide("multi-site.png","Multisite","Multisite Instruction");
var slide3 = new Slide("Drupal_theme_intro_2.png","Drupal Theme","Drupal Theme Introduction");

var slides = [slide1,slide2,slide3];
var slideImageContainer = document.getElementById("slideshow-image");
var slideTitleContainer = document.getElementById("slideshow-title");
var slideTitle = document.createElement('h2');
slideTitle.innerHTML = slides[slideIndex].title;
slideTitleContainer.appendChild(slideTitle);
var slideSubtitleContainer = document.getElementById("slideshow-subtitle");
slideImageContainer.style.backgroundImage = "url("+slides[0].imagesName+")";
var slideSubtitle = document.createElement('p');
slideSubtitle.innerHTML = slides[slideIndex].subTitle;
slideSubtitleContainer.appendChild(slideSubtitle);

var slideshowSlides = document.getElementById('slideshow-slides');
for (var i = 0; i <= slides.length - 1; i++) {
	var slide = document.createElement('div');
	slide.setAttribute('class','slide');
	slide.setAttribute('id','slide'+(i+1));
	slide.onmouseover = MouseoverClickSlide;
	slide.onmouseout = MouseleaveSlide;
	slideshowSlides.appendChild(slide);
};


slideIndex++;
function ChangeSlide(){
	if (slideIndex >= slides.length){
		slideIndex = 0;
	}
	slideImageContainer.style.backgroundImage = "url("+slides[slideIndex].imagesName+")";
	$('#slideshow-title h2').html(slides[slideIndex].title);
	$('#slideshow-subtitle p').html(slides[slideIndex].subTitle);
	slideIndex++;
}


var changeSlideHandler = setInterval(ChangeSlide,2000);
function MouseoverClickSlide(){
	clearInterval(changeSlideHandler);
}
function MouseleaveSlide(){
	changeSlideHandler = setInterval(ChangeSlide,2000);
}