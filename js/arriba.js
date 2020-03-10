$(document).ready(function(){
 	$('.ir-arriba').click(function(){
 		$('body,html').animate({
 			scrollTop: '0px'
 		},600);
 	})
 	$(window).scroll(function(){
 		if ( $(this).scrollTop()>0){
 			$('.ir-arriba').slideDown(300);
 		}else{
 			$('.ir-arriba').slideUp(300);
 		}
 	})
});
$(document).ready(function(){
 	$('.ir-arriba').click(function(){
 		$('body,html').animate({
 			scrollTop: '0px'
 		},600);
 	})
 	$(window).scroll(function(){
 		if ( $(this).scrollTop()>0){
 			$('.mensaje').slideDown(300);
 		}else{
 			$('.mensaje').slideUp(300);
 		}
 	})
});
$(document).ready(function(){
 	$('.servicios').click(function(){
 		$('body,html').animate({
 			scrollTop: '760px'
 		},600);
 	})
});
$(document).ready(function(){
 	$('.class').click(function(){
 		$('body,html').animate({
 			scrollTop: '1500px'
 		},600);
 	})
});
$(document).ready(function(){
 	$('.contacto').click(function(){
 		$('body,html').animate({
 			scrollTop: '50000px'
 		},4000);
 	})
});
$(document).ready(function(){
 	$('.section').click(function(){
 		$('body,html').animate({
 			scrollTop: '0px'
 		},2000);
 	})
});
$(document).ready(function(){
 	$('.mensaje').click(function(){
 		$('body,html').animate({
 			scrollTop: '0px'
 		},600);
 	})
 	$(window).scroll(function(){
 		if ( $(this).scrollTop()>0){
 			$('.mensaje').slideDown(300);
 		}else{
 			$('.mensaje').slideUp(300);
 		}
 	})
});
/*-------slider--------------*/