$(document).ready(function(){
	$('.submitForm').on('click', function(){
		let textFieldValue = $('.textField').val();
		console.log(textFieldValue);
		$('.debug').text(textFieldValue);
	})
});