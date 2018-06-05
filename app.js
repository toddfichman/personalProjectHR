$(document).ready(function(){
	let dataStorage = [];
	
	
	$('.setData').on('click', function(){
		
		let data = {};
		let textFieldValue = $('.textField').val(); //key 
		let textAreaValue = $('.textArea').val();  //value

		function storeData(obj) {
			obj[textFieldValue] = textAreaValue;
			if(textFieldValue === ''){
				alert ("Please fill in snippet name");
			} else if (textFieldValue !== ''){
				dataStorage.push(obj);
				localStorage.setItem("item", JSON.stringify(dataStorage));
				$('.displayRecent').text('Most Recent snippet --> ' + textFieldValue + ': ' + textAreaValue);
			}
		}
		storeData(data);
		$('.textField').val('');
		$('.textArea').val('');
	});

	$('.searchData').on('click', function(){
		let searchInput = $('.searchField').val();
		if (searchInput.length === 0){
			alert('Please a snippet name to search for')
		}
		let retrievedData = localStorage.getItem("item");
		let nameAndSnippet = JSON.parse(retrievedData);
		for (let i = 0; i < nameAndSnippet.length; i++){
			let nameOfSnippet = Object.keys(nameAndSnippet[i]) // this === textFieldValue
			// console.log(nameOfSnippet);
			if(nameOfSnippet.includes(searchInput)){ //use includes for search of keys
				for (var key in nameAndSnippet[i]){
					$('.displaySearch').text('Snippet of last search: ' + nameAndSnippet[i][key]);
				}
			} 
			// else if (!(nameOfSnippet.includes(searchInput))) {
			// 	alert("The snippet name you entered does not exist");
			// }
		}
	})

	$('.displayAll').on('click', function(){
		let retrievedData = localStorage.getItem("item");
		let nameAndSnippet = JSON.parse(retrievedData);
		for (let i = 0; i < nameAndSnippet.length; i++){
			for (var key in nameAndSnippet[i]){
				let snippet = nameAndSnippet[i][key]
				$('.displayAllArea').text(snippet);
				console.log(snippet) // this === textAreaValue
			}
			
		}
		
		$('.displayAllArea').text(retrievedData);		
	});

});