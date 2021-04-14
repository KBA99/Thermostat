let thermostat = new Thermostat()

document.addEventListener('DOMContentLoaded', () => {
  // let temperature = document.querySelector('#temp').innerHTML("Hi")
  document.getElementById('temp').innerText = `${thermostat.temperature}°C`
  document.getElementById('psm-status').innerText = `${thermostat.powerSavingMode}`
  document.getElementById('energy-usage').innerText = `${thermostat.energyUsageBand()}`

  // Event listener to update temperature after clicking
  document.body.addEventListener('click', () => {
    document.getElementById('temp').innerText = `${thermostat.temperature}°C`;
    document.getElementById('psm-status').innerText = `${thermostat.powerSavingMode}`
    document.getElementById('energy-usage').innerText = `${thermostat.energyUsageBand()}`

    // Temperature Colour controller - Changing the Class
    document.querySelector('#temp').className = thermostat.energyUsageBand();
  })

  // Up button selector, to increase the temperature
  let upButton = document.querySelector('#up')
  upButton.addEventListener('click', () =>{
    thermostat.up();
  });

  // Down button selector, to decrease the temperature
  let downButton = document.querySelector('#down')
  downButton.addEventListener('click', () => {
    thermostat.down();
  })

  // Reset button selector, to reset the temperature to default
  let resetButton = document.querySelector('#reset')
  resetButton.addEventListener('click', () => {
    thermostat.resetTemperature();
  })

  // Toggle Power Saving Mode button selector, to Toggle the power saving mode
  let powerSavingModeButton = document.querySelector('#psm')
  powerSavingModeButton.addEventListener('click', () => {
    thermostat.togglePowerSavingMode();
  });


})
