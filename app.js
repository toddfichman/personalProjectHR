$(document).ready(function(){
	$('.submitForm').on('click', function(){
		let textFieldValue = $('.textField').val();
		$('.debug').text(textFieldValue);

		localStorage.setItem('myFormTextData', textFieldValue);
	});

	// $('.textField').on('keyup', function(){
	// 	let textFieldValue = $('.textField').val();
	// 	$('.debug').text(textFieldValue);
	// });
});