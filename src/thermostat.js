'use strict'

class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMP_PSM = 25;
    this.MAXIMUM_TEMP_NO_PSM = 32;
    this.temperature = 20;
    this.powerSavingMode = true
  };

  getCurrentTemperature() {
    return this.temperature;
  };

  up() {
    if (this.isMaximumTemperature()) return;
    this.temperature ++;
  };

  down() {
    if (this.isMinimumTemperature()) return;
    this.temperature --;
  };

  isMinimumTemperature() {
    return (this.temperature <= this.MINIMUM_TEMPERATURE);
  }

  isMaximumTemperature() {
    if (this.powerSavingMode) {
      return this.temperature >= this.MAXIMUM_TEMP_PSM;
    } else {
      return this.temperature >= this.MAXIMUM_TEMP_NO_PSM;
    };
    // return (this.temperature >= this.MAXIMUM_TEMPERATURE);
  }

  isPowerSavingMode() {
    return this.powerSavingMode;
  }
}