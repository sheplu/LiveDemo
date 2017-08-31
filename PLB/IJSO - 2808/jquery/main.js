$("input[value=css]").click(function() {
	$("p").css({
		'background-color': 'red',
		'color' : 'green'
	})
});

function rnd() {
	return Math.round(Math.random() * 255);
}

console.log(rnd());
console.log(rnd());
console.log(rnd());
console.log(rnd());
console.log(rnd());