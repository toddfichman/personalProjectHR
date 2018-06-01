$(document).ready(function(){
	let dataStorage = [];
	
	
	$('.setData').on('click', function(){
		
		let data = {};
		let textFieldValue = $('.textField').val(); //key 
		let textAreaValue = $('.textArea').val();  //value
		$('.display').text(textAreaValue);

		function storeData(obj) {
			obj[textFieldValue] = textAreaValue;
			if(textFieldValue === ''){
				alert ("Please fill in snippet name");
			} else if (textFieldValue !== ''){
				dataStorage.push(obj);
				localStorage.setItem("item", JSON.stringify(dataStorage));
			}
			
		}
		storeData(data);
		// localStorage.setItem('myFormTextData', textFieldValue);
		// localStorage.setItem('textAreaData', textAreaValue);
		$('.textField').val('');
		$('.textArea').val('');
	});

	$('.getData').on('click', function(){
		let retrievedData = localStorage.getItem('textAreaData');
		$('.display').text(retrievedData);
	})

	$('.displayAll').on('click', function(){
		// let f = JSON.parse('item');
		console.log('item');
		let retrievedData = localStorage.getItem('item');
		$('.display').text(retrievedData);
		// for (let i = 0; i < dataStorage.length; i++){
		// 	for (let key in dataStorage[i]){
		// 		let value = dataStorage[i][key];
		// 		// $('.display').text(value);
		// 		console.log(value);
		// 	}
		// }		
	});

});