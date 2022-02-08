var cartas_de_una_en_una	= false;
var contador_tirada			= 0;

const Cartas = [
	[0,"00.png"],
	[1,"01.png"],
	[2,"02.png"],
	[3,"03.png"],
	[4,"04.png"],
	[5,"05.png"],
	[6,"06.png"],
	[7,"07.png"],
	[8,"08.png"],
	[9,"09.png"],
	[10,"10.png"],
	[11,"11.png"],
	[12,"12.png"],
	[13,"13.png"],
	[14,"14.png"],
	[15,"15.png"],
	[16,"16.png"],
	[17,"17.png"],
	[18,"18.png"],
	[19,"19.png"],
	[20,"20.png"],
	[21,"21.png"]
];

$(document).ready(function()
{
	// Corrige comportamiento de body-background-fixed en IE
	if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
		$('body').on("mousewheel", function () {
			event.preventDefault(); 
			//scroll sin "smoothing"
			var wheelDelta = event.wheelDelta;
			var currentScrollPosition = window.pageYOffset;
			window.scrollTo(0, currentScrollPosition - wheelDelta);
		});
	}

	// Flecha volver arriba
	if ($('#back-to-top').length) {
		var scrollTrigger = 200, // px
		backToTop = function () {
			var scrollTop = $(window).scrollTop();
			if (scrollTop > scrollTrigger) {
				$('#back-to-top').addClass('show');
			} else {
				$('#back-to-top').removeClass('show');
			}
		};

		backToTop();

		$(window).on('scroll', function () {
			backToTop();
		});

		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 600);
		});
	}

	// Navegacion suave dentro de la pÃ¡gina
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();
		var target = this.hash;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop':  $target.offset().top //no need of parseInt here
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});

	// Para cartas de tirada
	$( ".tirada .carta").click(function() {
		$('.foco').removeClass('foco');

		if (contador_tirada == 2) {
			$('.baraja .carta').addClass('disabled');
		}

		if (!$(this).hasClass('girada')) {
			muestraTirada($(this).attr('id'));

			if (contador_tirada <= 2) {
				contador_tirada++;
			}
		}
	});

	// AÃ±ade imagen y alt en funciÃ³n de los nÃºmeros que encuentra en [randomCartas]
	function muestraTirada(i) {
		if (cartas_de_una_en_una){
			datos_carta(i);
		}else {
			for (var i = 0; i < randomCartas.length; i++) {
				datos_carta(i);
			}
		}
	}

	function datos_carta(i) {
		$('#'+i).attr("src", "img/cartas/" + Cartas[randomCartas[i]][1]).attr('alt', Cartas[randomCartas[i]][2]).attr('title', Cartas[randomCartas[i]][2]);
		$('#'+i).addClass('animated flipInY girada');
	}

	// Funcion para poner el foco en el campo del formulario que de fallo
	$('#modalFormAlert').on('hidden.bs.modal', function () {
		// Obtenemos el campo que ha provocado la alerta
		var field 	= $('#modalFieldError').val();
		console.log(field);
		$('#' + field).focus();
	});
});

// Funcion para mostrar Alert en modal
function modalAlertMsg(texto,field)
{
	$('#modalFieldError').val(field);
	$('#modalFormAlert').find('.modal-body .errorMsg').text(texto);
	$('#modalFormAlert').modal('toggle');
}

function confirmar(idForm)
{
	if($('#question').val() == 0)
	{
		modalAlertMsg('Elige la historia que quieras descubrir','question');
		return false;   
	}

	if($('#subquestion').val() == 0)
	{
		modalAlertMsg('IndÃ­came que te preocupa','subquestion');
		return false;   
	}

	if(idForm == 1)
	{
		if( !$('#0').hasClass('girada') || !$('#1').hasClass('girada') || !$('#2').hasClass('girada') || !$('#3').hasClass('girada') || !$('#4').hasClass('girada') )
		{
			modalAlertMsg('Haz click en las 5 cartas','s0');
			return false;
		}
	}

	if($('#name').val() == '')
	{
		modalAlertMsg('IndÃ­came tu nombre','name');
		return false;   
	}

	if($('#day').val() == 0 || $('#month').val() == 0 || $('#year').val() == 0)
	{
		modalAlertMsg('IndÃ­came tu fecha de nacimiento','day');
		return false;	
	}

	var fechaActual = new Date();
	var miFecha		= new Date();
	var edad		= 18;

	miFecha.setFullYear($('#year').val(), $('#month').val()-1, $('#day').val());
	fechaActual.setFullYear(fechaActual.getFullYear() - edad);

	if ((fechaActual - miFecha) < 0)
	{
		modalAlertMsg('Debes ser mayor de edad','year');
		return false;	
	}

	if($('#email').val() == '')
	{
		modalAlertMsg('IndÃ­came tu correo electrÃ³nico','email');
		return false;   
	}

	if(!$('#privacy').is(':checked'))        
	{
		modalAlertMsg('Debes aceptar las polÃ­ticas de  privacidad','privacy');
		return false; 
	}

	//console.log('dentro');
	$( "#form" ).submit();
}