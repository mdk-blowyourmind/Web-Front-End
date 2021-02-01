$(function(){

    	var modal = $('#myModal');
        var img = $('.img');
        var modalImg = $(".modal-content");
        var captionText = $(".caption");
        
        $('.img').click(function(){
        	var pic = $(this).attr('src');
			$('#myModal').css({'display':'block'});
            modalImg.attr('src',pic);
            captionText.html(this.alt); 
        }) ;

        $(".close").click(function(){
        	$('#myModal').css({'display':'none'});
        });

        $(".modal").click(function(){
            $('#myModal').css({'display':'none'});
        });

    });