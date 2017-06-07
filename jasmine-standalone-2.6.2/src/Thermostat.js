function Thermostat(temperature = 20, powersave = true) {
  this.temperature = temperature;
  this.minimum = 10;
  this.powersave = powersave;
  this.maximum = 25;

  this.up = function(increment){
  	this.temperature += increment;
  	if (this.temperature > this.maximum){
      this.temperature = this.maximum
    };
  };

  this.down = function(decrement){
    this.temperature -= decrement;
    if (this.temperature < this.minimum){
      this.temperature = this.minimum
    };
  };

  this.modeSwitch = function(){
  	if(this.powersave === true){
  		this.powersave = false;
  		this.maximum = 32;
  	}else{
  		this.powersave = true;
  		this.maximum = 25;
  	}
  };
};

