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
            console.log(arr[8]);    
            }
        });  
}

$(document).ready(function(){
    $("nav a").click(function(){
        var Alt = $(this).attr("alt");
console.log('1');
          $.ajax({
            url: "img/" + Alt + "/descr.txt",
            dataType: "text",
            /*async: true,*/
            success: function(msg){
            arr=msg.trim().match(/[^\r\n]+/g);
            console.log(arr[8]);    
            }
        });  
 console.log('2');       
        var elements = document.querySelectorAll('.all_work .productItem');
        for (var q = 4; q < 12; q++)
        {
            elements[q].classList.add('productItem-none');
        }
console.log('3');
        var button = document.getElementById("butt");
        button.disabled = false;
        button.innerHTML='Посмотреть еще...';
console.log('4');
       $('.all_work').find('.productItem').each(function (index) {
            $(this).find('a').attr({ href: "img/" + Alt + "/p_" + (index + 1) + ".jpg"});
            $(this).find('img').attr({ src: "img/" + Alt + "/p_" + (index + 1) + "_s.jpg", alt: Alt});
            console.log(arr[index]);
            $(this).find('.highslide-caption').text(arr[index]);   
        });
 console.log('5');
    });
 });