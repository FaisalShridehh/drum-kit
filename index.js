var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
	document
		.querySelectorAll(".drum")[i].addEventListener("click", function (event) {
			var buttonClicked = this.innerHTML;

			keyPress(buttonClicked);
			buttonAnimation(buttonClicked);
			//what to do when click detected
		});
}

document.addEventListener("keydown", function (event) {
	keyPress(event.key);
	buttonAnimation(event.key);
});

function keyPress(key) {
	switch (key) {
		case "w":
			var ding = new Audio("sounds/tom-1.mp3");
			ding.play();
			break;
		case "a":
			var ding = new Audio("sounds/tom-2.mp3");
			ding.play();
			break;
		case "s":
			var ding = new Audio("sounds/tom-3.mp3");
			ding.play();
			break;
		case "d":
			var ding = new Audio("sounds/tom-4.mp3");
			ding.play();
			break;
		case "j":
			var ding = new Audio("sounds/snare.mp3");
			ding.play();
			break;
		case "k":
			var ding = new Audio("sounds/crash.mp3");
			ding.play();
			break;
		case "l":
			var ding = new Audio("sounds/kick-bass.mp3");
			ding.play();
			break;
	}
}

function buttonAnimation(buttonKey) {
	var clickedBtn = document.querySelector("." + buttonKey);
	clickedBtn.classList.add("pressed");

	setTimeout(function () {
		clickedBtn.classList.remove("pressed");
	}, 100);
}