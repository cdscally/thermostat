describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it ("should start at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it ("should increase the temperature with an Up function", function(){
  	thermostat.up(1)
  	expect(thermostat.temperature).toEqual(21);
  });

  it ("should decrease the temperature with a Down function", function(){
  	thermostat.down(1)
  	expect(thermostat.temperature).toEqual(19);
  });
});
