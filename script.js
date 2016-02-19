	var CurrentAnswer;
	function Reply()
	{

	$('.reply').click(function(){
	
	var submitForm = $('#submitForm');
	
	if (!submitForm.is(':visible'))
	{
		$('#submitForm').stop().show().animate({bottom:'0px', opacity:1},300);
		CurrentAnswer=$(this);
	}
	});
	}
	$( document ).ready(function() {
		$('#add').click( function() {
			var Description = $('#description').val();

			if(Description == '') {
				return false;
			}
			if (CurrentAnswer!=undefined)
			{
			CurrentAnswer.parent().parent().append("<div class='block'><div class='inline'><img class='sample' src='sample.jpg' alt='Sample' /></div><div class='inline'>" + Description + "<br><button class='reply'>Reply</button></div></div>");
			}
			else
			{
			
			$('#messages').append("<div class='block'><div class='inline'><img class='sample' src='sample.jpg' alt='Sample' /></div><div class='inline'>" + Description + "<br><button class='reply'>Reply</button></div></div>");
			
			}
			Reply();
			$('#form')[0].reset();
			var messages = $('#messages').html();
			localStorage.setItem('messages', messages);
			$('#submitForm').stop().animate({bottom:'-170px', opacity:0},300,function(){$(this).hide()});
			return false;
		});
		if(localStorage.getItem('messages')) {
			$('#messages').html(localStorage.getItem('messages'));
				Reply();

		}
		else
		{
		
	$('#submitForm').css({bottom:'0px', opacity:1}).show();
		
		}

	});
