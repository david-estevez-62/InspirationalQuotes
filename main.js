$('.submit').on('click', function(){
	var quote = $('.quote1').val();
	var author = $('.author1').val();
	var barClone = ratingBar.clone();
	
	var quoteBox = $('<div class="quote"></div>')
	var button = $('<button class="delete"></button>')



	quoteBox.text("Quote: " + quote + " Author: " + author).prepend(button).prepend(barClone);

	$('body').append(quoteBox);

	$(".quote1").val('');
	$(".author1").val('');

})
var ratingBar = $("#rater");

$(document).on("mouseenter", ".br-widget a", function(){
	

	$(this).addClass('br-active');

})


$(document).on('click', '.delete', function(){
	$(this).parent().remove();

	
})

var clearAll = $('.clearAll').on('click',function(){
	$(".quote").remove();
})

