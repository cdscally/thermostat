function Thermostat(temperature = 20) {
  this.temperature = temperature;
  this.minimum = 10;

  this.up = function(increment){
  	this.temperature += increment;
  };

  this.down = function(decrement){
    this.temperature -= decrement;
    if (this.temperature < this.minimum){
      this.temperature = this.minimum
    };
  };

};
