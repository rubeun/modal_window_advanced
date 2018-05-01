// Use jQuery to make the modal slide in when the user clicks an img in the gallery
// Make sure you update the src of the img element in the modal!

// Use jQuery to make the modal slide back out when the user clicks the img in the modal

// Feel free to reuse code from your modal_window exercise!


$('.gallery img').on('click', function(){
	$('body').append('<div class="background-overlay"></div>').addClass('open');
	$('.modal img').attr('src', $(this).attr('src'));
})

$('.modal img').on('click', function(){
	$('body').removeClass('open');
	$('.background-overlay').remove();
})