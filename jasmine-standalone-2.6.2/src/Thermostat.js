function Thermostat(temperature = 20) {
  this.temperature = temperature
  this.up = function(temperature){
  	this.temperature += 1;
  };
};
