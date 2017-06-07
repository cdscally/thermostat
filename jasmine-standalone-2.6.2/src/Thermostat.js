function Thermostat(temperature = 20) {
  this.temperature = temperature

  this.up = function(increment){
  	this.temperature += increment;
  };

  this.down = function(decrement){
  	this.temperature -= decrement;
  };
  
};
