var game = {
	number: 1,
	print: function() {
		console.log(game.number);
		game.number = 6;
		console.log(game.number)
	}
}
game.print