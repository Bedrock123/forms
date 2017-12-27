jQuery(document).ready(function($){
	// Triggers the float field per form item
	if( $('.floating-labels').length > 0 ) floatLabels();
	function floatLabels() {
		var inputFields = $('.floating-labels .c-label').next();
			inputFields.each(function(){
		
			var singleInput = $(this);
			$(singleInput.prev()).click(function(){
				$(singleInput).focus();
			});
			$(this).after( "<div class='error-box' />" );
			checkVal(singleInput);
			$(singleInput).focus(function() {
				singleInput.prev('.c-label').addClass('float')
				if (singleInput.val() != '') {
					// If a form field is focussed on then no text is entered, add error
					singleInput.next('.error-box').removeClass('error');
					singleInput.prev('.c-label').removeClass('label-error');
				}
			});
			$(window).keyup(function (e) {
				var code = (e.keyCode ? e.keyCode : e.which);
				if (code == 9 && $('#detect:focus').length) {
					inputField.prev('.c-label').addClass('float');
				}
			});
			$(singleInput).blur(function() {
				checkVal(singleInput);
				if (singleInput.val() == '') {
					singleInput.next('.error-box').addClass('error');
					singleInput.prev('.c-label').addClass('label-error');
				}
			});
			singleInput.on('change keyup', function(e){	
				var code = (e.keyCode ? e.keyCode : e.which);
				if (code != 9 && code != 16) {
					checkVal(singleInput);
				}			
			});
		});
	}
	function checkVal(inputField) {
		if(!$(inputField).is(":focus")) {
			( inputField.val() == '' ) ? inputField.prev('.c-label').removeClass('float') : inputField.prev('.c-label').addClass('float');
		} 
		( inputField.val() == '' ) ? console.log('') : inputField.next('.error-box').removeClass('error');
		( inputField.val() == '' ) ? console.log('') : inputField.prev('.c-label').removeClass('label-error');
	}
});