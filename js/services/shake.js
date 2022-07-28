// shake the wild pokemon when the player click on it
$(function() {
    $('.wildPokemon-box').click(function(ev){

		$('#wildPokemonImg').addClass('shake'); 
		setTimeout(function(){
 
		$('img').removeClass('shake'); 
		},50);
		 ev.preventDefault();
	 });
 });