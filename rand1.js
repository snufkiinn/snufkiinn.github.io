var imageArray = [
"mywork/img_1.jpg",
"mywork/img_2.jpg",
"mywork/img_3.jpg",
"mywork/img_4.jpg",
"mywork/img_5.jpg",
"mywork/img_6.jpg"];

function getRandomImage() {
	var randomNumber = Math.floor(Math.random() * 6);
	document.canvas.src = imageArray [6];
}