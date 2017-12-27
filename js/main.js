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
					singleInput.prev('.cd-label').removeClass('label-error');
				}
			});
			$(window).keyup(function (e) {
				var code = (e.keyCode ? e.keyCode : e.which);
				if (code == 9 && $('#detect:focus').length) {
					inputField.prev('.cd-label').addClass('float');
				}
			});
			$(singleInput).blur(function() {
				checkVal(singleInput);
				if (singleInput.val() == '') {
					singleInput.addClass('error');
					singleInput.prev('.cd-label').addClass('label-error');
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
			( inputField.val() == '' ) ? inputField.prev('.cd-label').removeClass('float') : inputField.prev('.cd-label').addClass('float');
		} 
		( inputField.val() == '' ) ? console.log('') : inputField.removeClass('error');
		( inputField.val() == '' ) ? console.log('') : inputField.prev('.cd-label').removeClass('label-error');
	}
	
});