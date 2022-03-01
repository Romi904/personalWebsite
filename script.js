alert('Are You Sure to Load Page ?');
function reload(){
    location.reload();
}
function contact(){
    confirm('Page Admin-Romijul Laskar\nEmail-contact@yahoo.com\nTel Ph:033 4587 9854\nAddress-Kolorah,Domjur,Howrah 711411');
}
function goBack() {
    window.history.back();
    // window.history.go(-1); return false;
}
//       ******************************* 
// images slider
// var i = 0; 			// Start Point
// var images = [];	// Images Array
// var time = 3000;	// Time Between Switch
	 
// // Image List
// images[0] = "http://lorempixel.com/400/200/animals";
// images[1] = "http://lorempixel.com/400/200/sports";
// images[2] = "http://lorempixel.com/400/200/food";
// images[3] = "http://lorempixel.com/400/200/people";

// // Change Image
// function changeImg(){
// 	document.slide.src = images[i];

// 	// Check If Index Is Under Max
// 	if(i < images.length - 1){
// 	  // Add 1 to Index
// 	  i++; 
// 	} else { 
// 		// Reset Back To O
// 		i = 0;
// 	}

// 	// Run function every x seconds
// 	setTimeout("changeImg()", time);
// }

// // Run function when page loads
// window.onload=changeImg;
//Html portion- <img name="slide" width="400" height="200" alt="images" />