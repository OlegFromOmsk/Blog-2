

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
        button.innerHTML='Конец';
	}
}


/*$(document).ready(function(){
    $(".header_nav a").click(function() {
		console.log($('.header_nav li a').attr(alt));
		$('.header_nav li').removeClass('active');
		$(this).parent('li').addClass('active');
    });
});*/

/*$(document).ready(function(){
    $("nav a").click(function(){
        var Alt = $(this).attr("alt");
        console.log(Alt);
    var aaa;
  $('.all_work a').each(function (index, value) {
  			console.log('Порядковый номер: ' + (index+1)+ ' ' +value);
/*		$(".all_work a").attr({ href: "img/" + Alt + "/p_" + (index + 1) + ".PNG"});
			$(".all_work img").attr({ src: "img/" + Alt + "/p_" + (index + 1) + "_s.PNG", alt: Alt});*/
 /*     return false;
		});
    });
 });*/

$(document).ready(function(){
    $("nav a").click(function(){
        var Alt = $(this).attr("alt");
        console.log(Alt);
    var aaa;
  $('.all_work').find('a').each(function (index) {
  			console.log('Порядковый номер: ' + (index+1));
      console.log($(this).parent('a'));
$(this).attr({ href: "img/" + Alt + "/p_" + (index + 1) + ".jpg"});
$(this).find('img').attr({ src: "img/" + Alt + "/p_" + (index + 1) + "_s.jpg", alt: Alt});

		});
    });
 });


