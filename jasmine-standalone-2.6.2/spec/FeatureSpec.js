describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it ("should start at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it ("should have increase the temperature with an Up function", function(){
  	thermostat.up(1)
  	expect(thermostat.temperature).toEqual(21);
  });
});
