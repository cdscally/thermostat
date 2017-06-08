


$( document ).ready(function() {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=51b30c9f5d21df49ba927e540e969059', function(data) {
    var city = data['name'];
    var weatherHeadline = data['weather'][0]['main'];
    var weatherDescription = data['weather'][0]['description'];
    var temperature = data['main']['temp'];
    $('#city').text(city);
    $('#headline').text(weatherHeadline);
    $('#description').text(weatherDescription);
    $('#temp').text(temperature);
  });

  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);
  $('#savingmode').text('Power saving mode is on')

  $('#temperature-up').on('click', function(){
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature-down').on('click', function(){
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
  });

  $('#temperature-reset').on('click', function(){
    thermostat.reset();
    $('#temperature').text(thermostat.temperature);
  });

  $('#powersaving-switch').on('click', function(){
    thermostat.modeSwitch();
    if (thermostat.powersave === true) {
      $('#savingmode').text('Power saving mode is on')
    } else {
      $('#savingmode').text('Power saving mode is off')
    }
  });

  $('#energy-usage').on('click', function(){
    $('#energy').text('Energy usage: ' + thermostat.energyUsage())
  });

  // $.ajax({
  //   url:'api.openweathermap.org/data/2.5/weather?q=London,uk&appid=51b30c9f5d21df49ba927e540e969059',
  //   type:'get'
  // })

});
