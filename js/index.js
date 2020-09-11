var speed = 1000;
var idimage = 1;
var imagecount = 2;
var images = new Array();
images = ["Dom.bmp"];
images = ["807083.jpg"];

function nextimage ()
{
	if(++idimage > imagecount ) idimage = 1;
	document.background.url = images [idimage];
	setTimeout('nextimage()', speed);
}