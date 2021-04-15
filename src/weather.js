
// Hardcodeded result of fetch request
let getPostData = () => {
  return {
      "coord":{
         "lon":-0.1257,
         "lat":51.5085
      },
      "weather":[
         {
            "id":500,
            "main":"Rain",
            "description":"light rain",
            "icon":"10d"
         }
      ],
      "base":"stations",
      "main":{
         "temp":9.27,
         "feels_like":6.43,
         "temp_min":8.33,
         "temp_max":10,
         "pressure":1033,
         "humidity":53
      },
      "visibility":10000,
      "wind":{
         "speed":5.66,
         "deg":70
      },
      "rain":{
         "1h":0.2
      },
      "clouds":{
         "all":99
      },
      "dt":1618493803,
      "sys":{
         "type":1,
         "id":1414,
         "country":"GB",
         "sunrise":1618463060,
         "sunset":1618512975
      },
      "timezone":3600,
      "id":2643743,
      "name":"London",
      "cod":200
  }
}
    
let renderPost = (postData) => {
  let postDataTemp = `${postData.main.temp}`
  return postDataTemp
}

let post = getPostData();
let rendered = renderPost(post);

console.log(rendered)