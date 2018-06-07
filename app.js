
//Vision for app:

//turn app into a simple note taking app
	//search at the top like a nav bar
		//have search area be able to fill in letters when looking for key list (like auto complete)
	//left half
		// you type new notes and see most recent in deceding list
	//right half 
		// there is a list of the headers is bold 
		// and when clicked on pulls up the note associated with the header

		//advanced: the clicked header's notes move to the left




$(document).ready(function(){

	let dataStorage = [];
	
	
	$('.setData').on('click', function(){ 
		
		let data = {};
		let textFieldValue = $('.textField').val(); //key 
		let textAreaValue = $('.textArea').val();  //value

		function storeData(obj) {  //it doesnt reset data after each press but it does rest on page reload
			obj[textFieldValue] = textAreaValue; //setting key: value pair in obj
			if(textFieldValue === ''){
				alert ("Please fill in snippet name");
			} else if (textFieldValue !== ''){
				dataStorage.push(obj);
				localStorage.setItem("item", JSON.stringify(dataStorage));
				$('.displayRecent').text('Most Recent snippet --> ' + textFieldValue + ': ' + textAreaValue);
				// $('.displayAllArea').prepend(textFieldValue); //find way to make each key decend
			}
		}
		storeData(data);
		$('.textField').val(''); //resetting data field
		$('.textArea').val('');  //resetting data field
	});

	$('.searchData').on('click', function(){
		let searchInput = $('.searchField').val();
		if (searchInput.length === 0){ //make sure there is input data
			alert('Please enter a snippet name to search for')
		}
		let retrievedData = localStorage.getItem("item");
		let nameAndSnippet = JSON.parse(retrievedData);
		for (let i = 0; i < nameAndSnippet.length; i++){
			let nameOfSnippet = Object.keys(nameAndSnippet[i]) // this === textFieldValue
			if(nameOfSnippet.includes(searchInput)){ //use includes for search of keys
				for (var key in nameAndSnippet[i]){
					$('.displaySearch').text('Result of last search: ' + nameAndSnippet[i][key]);
				}
			} 
			// else if (!(nameOfSnippet.includes(searchInput))) {
			// 	alert("The snippet name you entered does not exist");
			// }
		}
	})

	$('.displayAll').on('click', function(){
		let retrievedData = localStorage.getItem("item"); //need to display keys next to values in a column
		let nameAndSnippet = JSON.parse(retrievedData);
		for (let i = 0; i < nameAndSnippet.length; i++){
			let nameOfSnippet = Object.keys(nameAndSnippet[i])
			for (var key in nameAndSnippet[i]){
				let snippet = nameAndSnippet[i][key] // this === textAreaValue
				$('.displayAllArea').append(nameOfSnippet + ': ' + snippet + ', ');
			}
			
		}
			
	});

});