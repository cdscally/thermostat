function getWeather(userLocation = 'london') {
  var appID = '51b30c9f5d21df49ba927e540e969059'
  var location = userLocation
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=' + appID, function(data) {
    var city = data['name'];
    var weatherHeadline = data['weather'][0]['main'];
    var weatherDescription = data['weather'][0]['description'];
    var temperature = data['main']['temp'];
    $('#city').text(city);
    $('#headline').text(weatherHeadline);
    $('#description').text(weatherDescription);
    $('#temp').text(temperature);
  });
};

$( document ).ready(function() {
  getWeather();


  function retrieve_temp(){
    $.get('http://localhost:9292/temperature', function(responseText) {
      return responseText;
    });
  };

  var inherited_temp;
  // var inherited_psm;

  function restore_temp() {
    for (i = 0; i < 1000000000; i++) {
    inherited_temp = retrieve_temp(); }
  };

  restore_temp()

  console.log(inherited_temp);

  // function restore_psm(input){
  //   var inherited_psm = input
  // };

  var thermostat = new Thermostat(20, true);


  $('#temperature').text(thermostat.temperature);
  initial_psm_state()

  function initial_psm_state() { if (thermostat.powersave === true) {
    $('#savingmode').text('Power saving mode is on');
    } else {
      $('#savingmode').text('Power saving mode is off');
    };
  };

  $('#temperature-up').on('click', function(){
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
    $.post('http://localhost:9292/temperature', { temperature: JSON.stringify(thermostat['temperature']) } );
  });

  $('#temperature-down').on('click', function(){
    thermostat.down();
    $('#temperature').text(thermostat.temperature);
    $.post('http://localhost:9292/temperature', { temperature: JSON.stringify(thermostat['temperature']) } );
  });

  $('#temperature-reset').on('click', function(){
    thermostat.reset();
    $('#temperature').text(thermostat.temperature);
    $.post('http://localhost:9292/temperature', { temperature: JSON.stringify(thermostat['temperature']) } );
  });

  $('#powersaving-switch').on('click', function(){
    thermostat.modeSwitch();
    if (thermostat.powersave === true) {
      $('#savingmode').text('Power saving mode is on')
    } else {
      $('#savingmode').text('Power saving mode is off')
    }
    $.post('http://localhost:9292/powersave', { powersave: JSON.stringify(thermostat['powersave']) } );
  });

  $('#energy-usage').on('click', function(){
    $('#energy').text('Energy usage: ' + thermostat.energyUsage())
  });

  $('select#city').change(function(){
    var selection = $(this).val();
    getWeather(selection)
  });

  $('#status').on('click', function() {
    alert(JSON.stringify(thermostat));
  });

});
