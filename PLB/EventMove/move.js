var button = document.querySelector('#button');
button.addEventListener('click', function()	{
	console.log('click');
	window.location = 'http://www.google.com'
});

button.addEventListener('mouseover', function() {
	console.log(button.offsetLeft);
	button.style.position = 'absolute';
	button.style.left = '400px';
});