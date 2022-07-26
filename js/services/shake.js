// shake the wild pokemon when the player click on it
$(function() {
    $('.wildPokemon-box').click(function(ev){

		$('.wildPokemon-display').addClass('shake'); 
		setTimeout(function(){
 
		$('div').removeClass('shake'); 
		},50);
		 ev.preventDefault();
	 });
 });