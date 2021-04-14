'use strict'

describe('Thermostat', function(){
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('Energy usage indicator', function() {
    it('returns low-usage when temperature is under 18', function() {
      thermostat.temperature = 17;
      expect(thermostat.energyUsageBand()).toEqual("low-usage")
    });

    it('returns medium-usage when temperature is 18-25 (inclusive)', function() {
      thermostat.temperature = 21;
      expect(thermostat.energyUsageBand()).toEqual("medium-usage")
    });

    it('returns high-usage when temperature is over 25', function() {
      thermostat.powerSavingModeOff();
      thermostat.temperature = 26;
      expect(thermostat.energyUsageBand()).toEqual("high-usage")
    });
  });

  describe('Controlling the temperature', function() {
    it('can increase the temperature',function(){
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('can increase the temperature',function(){
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it('can have a minimum temperature of 10', function() {
      for (let i = 0; i < 11; i++) {
        thermostat.down();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

    it('can have a maximum temperature of 25', function() {
      for (let i = 0; i < 6; i++ ) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it('can have a maximum temperature of 32', function() {
      thermostat.powerSavingModeOff(); 
      for (let i = 0; i < 13; i++) {
         thermostat.up();
       }
       expect(thermostat.getCurrentTemperature()).toEqual(32);
     });

    describe('Power saving mode', function() {
      it('starts with power saving mode on', function() {
        expect(thermostat.isPowerSavingMode()).toBe(true);
      });

      it('can be turned off', function() {
        thermostat.powerSavingModeOff();
        expect(thermostat.powerSavingMode).toBe(false);
      });

      it('can be turned back on again', function() {
        thermostat.togglePowerSavingMode();
        thermostat.togglePowerSavingMode();
        expect(thermostat.powerSavingMode).toBe(true);
      });

    });

    describe('Reset button', function() {
      it('resets temperature to Default (currently 20)', function() {
        thermostat.up();
        thermostat.resetTemperature();
        expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
      });
    });
  });

});