function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var segundos = Math.floor((t / 1000) % 60);
    var minutos = Math.floor((t / 1000 / 60) % 60);
    var horas = Math.floor((t / (1000 * 60 * 60)) % 24);
    var días = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      /* 'días': días, */
      'horas': horas,
      'minutos': minutos,
      'segundos': segundos,
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    /* var daysSpan = clock.querySelector('.días'); */
    var hoursSpan = clock.querySelector('.horas');
    var minutesSpan = clock.querySelector('.minutos');
    var secondsSpan = clock.querySelector('.segundos');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      /* daysSpan.innerHTML = t.horas; */
      hoursSpan.innerHTML = ('0' + t.horas).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutos).slice(-2);
      secondsSpan.innerHTML = ('0' + t.segundos).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline = new Date(Date.parse(new Date()) + 12 * 1 * 20 * 60 * 1000);
  initializeClock('clockdiv', deadline);