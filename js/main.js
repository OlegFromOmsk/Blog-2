function vis(){
	var elements = document.querySelectorAll('.none');
	for (var i = 0; i < 4; i++) 
	{
		elements[i].classList.remove('none');
	}
	var elements = document.querySelectorAll('.none');
    if (elements.length == 0)
	{
		document.getElementById("butt").classList.add('none');
	}
	
	window.scrollTo(0, document.body.scrollHeight);
}

var arr = new Array();
function ReadText(names){
          $.ajax({
            url: "img/" + names + "/descr.txt",
            dataType: "text",
            async: true,
            success: function(msg){
            arr=msg.trim().match(/[^\r\n]+/g);
            
				$('.all_work').find('.productItem').each(function (index) {
					$(this).find('.highslide-caption').text(arr[index]);   
        		});
            }
        });  
}

$(document).ready(function(){
    $("nav a").click(function(){
        var Alt = $(this).attr("alt");
		/*$(this).classList.add('active');*/

 console.log('1');       
        var elements = document.querySelectorAll('.all_work .productItem');
        for (var q = 4; q < 12; q++)
        {
            elements[q].classList.add('none');
        }
		document.getElementById("butt").classList.remove('none');
console.log('2');
        var button = document.getElementById("butt");
        button.disabled = false;
        button.innerHTML='Посмотреть еще...';
console.log('3');
       $('.all_work').find('.productItem').each(function (index) {
            $(this).find('a').attr({ href: "img/" + Alt + "/p_" + (index + 1) + ".jpg"});
            $(this).find('img').attr({ src: "img/" + Alt + "/p_" + (index + 1) + "_s.jpg", alt: Alt});
console.log(arr[index]);
            $(this).find('.highslide-caption').text(arr[index]);   
        });
 console.log('5');
		ReadText(Alt);	
console.log('5');
    });
 });