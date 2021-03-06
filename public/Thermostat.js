
function Thermostat(temperature = 20, powersave = true) {
  this.temperature = temperature;
  this.MINIMUM = 10;
  this.powersave = powersave;
  this.DEFAULT_TEMPERATURE = 20;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 25;
  this.LOW_ENERGY_USAGE_LIMIT = 18;

  this.setMaximum = function(){
  	if(this.powersave === true){
  		this.maximum = 25;
  	} else {
  		this.maximum = 32;
  	};
  };

  this.setMaximum();

  this.up = function(){
    this.setMaximum();
  	this.temperature += 1;
  	if (this.temperature > this.maximum){
      this.temperature = this.maximum
    };
  };

  this.down = function(){
    this.setMaximum();
    this.temperature -= 1;
    if (this.temperature < this.MINIMUM){
      this.temperature = this.MINIMUM
    };
  };

  this.reset = function() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  };

  this.energyUsage = function() {
  	if (this.temperature > this.MEDIUM_ENERGY_USAGE_LIMIT) {
  		return 'high-usage'
  	}else if (this.temperature > this.LOW_ENERGY_USAGE_LIMIT ) {
  		return 'medium-usage'
  	}else{
  		return 'low-usage'
  	}
  };

  this.modeSwitch = function(){
    if(this.powersave === true){
      this.powersave = false;
    }else{
      this.powersave = true;
    }
    this.setMaximum();
  };

};
