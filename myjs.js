var hiddenElement = document.getElementById("vn");
var a = document.getElementById("a1");

function handleButtonClick() {
   hiddenElement.click({block: "center", behavior: "smooth"});
};
 
document.addEventListener('DOMContentLoaded', function() {
const list = document.getElementsByClassName('flip-card-btn');
[].forEach.call(list, function(e) {
  e.onclick = function() {
    document.getElementById(this.parentNode.parentNode.id).classList.toggle('do-flip');
   }
 });
});

document.addEventListener('DOMContentLoaded', function(){
	var button = document.getElementById('btn-right');
	button.onclick = function () {
		var pos = document.getElementById('pos')
		scrollAmount = 600;
		var slideTimer = setInterval (function(){
			pos.scrollLeft +=620;
			scrollAmount +=620;
			if(scrollAmount >= 620){
				window.clearInterval(slideTimer);
				}
			},20);
	};
	var left = document.getElementById('btn-left');
	left.onclick = function () {
		var pos = document.getElementById('pos');
		scrollAmount = 600;
		var slideTimer = setInterval(function(){
			pos.scrollLeft -=620;
			scrollAmount +=620;
			if(scrollAmount >= 620){
				window.clearInterval(slideTimer);
			}
		},20);
};
});
const { counterUp } = window.counterUp

const el = document.querySelector( '.counter' )

// Start counting, typically you need to call this when the 
// element becomes visible, or whenever you like.
counterUp( el, {
    duration: 5000,
    delay: 16,
} )