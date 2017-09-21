

function vis(){
	var elements = document.querySelectorAll('.productItem-none');

	for (var i = 0; i < 4; i++) 
	{
		elements[i].classList.remove('productItem-none');
	}

	var elements = document.querySelectorAll('.productItem-none');
		
	if (elements.length == 0)
	{
		var button = document.getElementById("butt");
		button.disabled = true;
	}
}


$(function () {
    var location = window.location.href;
    var cur_url = '/' + location.split('/').pop();
 
    console.log(cur_url);
});
