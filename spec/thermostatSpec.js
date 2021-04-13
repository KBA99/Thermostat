'use strict'

describe('Thermostat', function(){
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
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

    // it('can have a maximum temperature of 32', function() {
    //   for (let i = 0; i < 13; i++) {
    //     thermostat.up();
    //   }
    //   expect(thermostat.getCurrentTemperature()).toEqual(32);
    // });

    describe('Power saving mode', function() {
      it('starts with power saving mode on', function() {
        expect(thermostat.isPowerSavingMode()).toBe(true);
      });

    });

  });

});