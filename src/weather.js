document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('#city-selector').addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.querySelector('#city').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a0fe58708e6d694a289790f09cf8e633&units=metric`

    fetch(url).then(response => {
      response.json().then(post => {
        // ...to here.
        let rendered = renderPost(post);
        document.getElementById("weatherapi").innerHTML = rendered;
      })
    })
  })

  function getPostData() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=London&appid=a0fe58708e6d694a289790f09cf8e633&units=metric").then(response => {
      response.json().then(post => {
        // ...to here.
        let rendered = renderPost(post);
        document.getElementById("weatherapi").innerHTML = rendered;
      })
    })
  }

  function renderPost(postData) {
    let cityHTML = `<h2>API city: ${postData.name}</h2>`
    let tempHTML = `<p>API temp: ${postData.main.temp}</p>`;
    return cityHTML + tempHTML;
  }

  getPostData();

});