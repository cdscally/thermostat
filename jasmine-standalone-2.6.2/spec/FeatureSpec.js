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

  it ('should have a minimum temperature of 10', function() {
    thermostat.down(11)
    expect(thermostat.temperature).toEqual(10);
  });

  it ("should start in power saving mode", function() {
    expect(thermostat.powersave).toEqual(true);
  });

  it ("should have a maximum temperature of 25 when in powersaving mode", function(){
  	thermostat.up(6)
  	expect(thermostat.temperature).toEqual(25);
  });

  it("should have a maximum temperature of 32 when not in powersaving mode", function(){
  	thermostat.modeSwitch();
  	thermostat.up(30);
  	expect(thermostat.temperature).toEqual(32)
  });

  it("should have a feature to reset the temperature to 20", function(){
    thermostat.up(4);
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it ("should return its current energy usage ", function(){
  	expect(thermostat.energyUsage()).toEqual('medium-usage')
  	thermostat.modeSwitch();
  	thermostat.up(6);
  	expect(thermostat.energyUsage()).toEqual('high-usage')
  	thermostat.down(10);
  	expect(thermostat.energyUsage()).toEqual('low-usage')
  });
});
