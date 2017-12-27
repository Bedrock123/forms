jQuery(document).ready(function($){
	if( $('.floating-labels').length > 0 ) floatLabels();

	function floatLabels() {
		var inputFields = $('.floating-labels .cd-label').next();
		inputFields.each(function(){
			var singleInput = $(this);
			checkVal(singleInput);
			console.log(singleInput.is(":focus"))
			$(singleInput).focus(function() {
				singleInput.prev('.cd-label').addClass('float')
				if (singleInput.val() != '') {
					singleInput.removeClass('error');
				}
			});
			$(singleInput).blur(function() {
				checkVal(singleInput);
				if (singleInput.val() == '') {
					singleInput.addClass('error');
				}
			});
			singleInput.on('change keyup', function(){				
				checkVal(singleInput);

			});
		});
	}

	function checkVal(inputField) {
		
		( inputField.val() == '' ) ? inputField.prev('.cd-label').removeClass('float') : inputField.prev('.cd-label').addClass('float');
		( inputField.val() == '' ) ? console.log('ho') : inputField.removeClass('error');
	}
	
});