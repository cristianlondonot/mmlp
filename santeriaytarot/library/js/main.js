 
    
    
var CountCards = $('.box_cards_back').find('.cntrl_js');
var maximoCartas = $(CountCards).hasClass('active1');
var cartasActivasContadas = document.getElementsByClassName('active1').length;
    
    
$(CountCards).click(function(){
    $(this).addClass('active1');
    $('.spc_cartas').addClass('spc_bottmm');
    var carta = $(this).find('.carta');
    var atras = $(this).find('.atrasC');
    $(carta).attr("src", "img/cartas/" + Cartas[randomCartas[cartasActivasContadas]][1]).attr('alt', Cartas[randomCartas[cartasActivasContadas]][2]).attr('title', Cartas[randomCartas[cartasActivasContadas]][2]);
    $(carta).addClass('girada');
    $(atras).css('opacity','0');
    console.log(cartasActivasContadas);
    cartasActivasContadas++;
});

$('.btn_see_commntss').click(function(){
    $(this).siblings('.spc_comentarios').slideToggle();
});

$('.clickable').click(function(){
    $(this).addClass('actvvv').siblings().removeClass('actvvv');
    $('#question').val($(this).data('id'));
});


/* Meme */

var memes = [
    'Hola',
    'Como estas?',
    'Cuentame tu historia',
    'Cual es tu pregunta?',
    'Que quieres saber',
    'Que esta haciendo tu pareja ahora',
];

var random = document.querySelector('#random');

random.innerHTML = memes[Math.floor(Math.random() * memes.length)];

/* Time */

var deviceTime = document.querySelector('.status-bar .time');
var messageTime = document.querySelectorAll('.message .time');

deviceTime.innerHTML = moment().format('h:mm');

setInterval(function() {
    deviceTime.innerHTML = moment().format('h:mm');
}, 1000);

for (var i = 0; i < messageTime.length; i++) {
    messageTime[i].innerHTML = moment().format('h:mm A');
}

/* Message */

var form = document.querySelector('.conversation-compose');
var conversation = document.querySelector('.conversation-container');

form.addEventListener('submit', newMessage);

function newMessage(e) {
    var input = e.target.input;

    if (input.value) {
        var message = buildMessage(input.value);
        conversation.appendChild(message);
        animateMessage(message);
    }

    input.value = '';
    conversation.scrollTop = conversation.scrollHeight;

    e.preventDefault();
}

function buildMessage(text) {
    var element = document.createElement('div');

    element.classList.add('message', 'sent');

    element.innerHTML = text +
        '<span class="metadata">' +
            '<span class="time">' + moment().format('h:mm A') + '</span>' +
            '<span class="tick tick-animation">' +
                '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#92a58c"/></svg>' +
                '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg>' +
            '</span>' +
        '</span>';

    return element;
}

function animateMessage(message) {
    setTimeout(function() {
        var tick = message.querySelector('.tick');
        tick.classList.remove('tick-animation');
    }, 500);
}




// Cookie functions from w3schools
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  var cookieAlert = document.querySelector(".cookiealert");
  var acceptCookies = document.querySelector(".acceptcookies");
  
  // If cant find the "acceptCookies" cookie , show message
  if (!getCookie("acceptCookies")) {
    cookieAlert.classList.add("show");
  }
  
  acceptCookies.addEventListener("click", function() {
    setCookie("acceptCookies", true, 1); // Create a 1 day cookie
    cookieAlert.classList.remove("show");
  });
