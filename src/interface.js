let thermostat = new Thermostat()

document.addEventListener('DOMContentLoaded', function(event) {
  // let temperature = document.querySelector('#temp').innerHTML("Hi")
  document.getElementById('display').innerHTML = `<p>${thermostat.temperature}</p>`


  document.querySelector('#psm-status')
  document.querySelector('#energy-usage')

  document.querySelector('#up')
  document.querySelector('#down')
  document.querySelector('#reset')
  document.querySelector('#psm')

})
