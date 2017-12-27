jQuery(document).ready(function($){
	// Triggers the float field per form item
	if( $('.floating-labels').length > 0 ) floatLabels();
	function floatLabels() {
		var inputFields = $('.floating-labels .cd-label').next();
		inputFields.each(function(){
			var singleInput = $(this);
			checkVal(singleInput);
			$(singleInput).focus(function() {
				singleInput.prev('.cd-label').addClass('float')
				if (singleInput.val() != '') {
					// If a form field is focussed on then no text is entered, add error
					singleInput.next('.error-box').removeClass('error');
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
					singleInput.next('.error-box').addClass('error');
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
		( inputField.val() == '' ) ? console.log('') : inputField.next('.error-box').removeClass('error');
		( inputField.val() == '' ) ? console.log('') : inputField.prev('.cd-label').removeClass('label-error');
	}
	// Trigger Nice Select Menu On Focu
	function targetNiceSelect() {
		setTimeout(function () {
			$('.nice-select').focus(function() {
				$('.nice-select').trigger('click')
			});
			// If enter is pressed on form, deactive menu
			$(window).keyup(function (e) {
				var code = (e.keyCode ? e.keyCode : e.which);
				$('option').click(function() {
					$('body').trigger('click')
				});
				if(code==13 && $('.nice-select').is(":focus")) {
					$('body').trigger('click')
				}
			});
		}, 2000);
	}
	targetNiceSelect()

});