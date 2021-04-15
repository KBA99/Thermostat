
// Hardcodeded result of fetch request
let getPostData = () => {
  fetch("http://api.openweathermap.org/data/2.5/weather?q=London&appid=a0fe58708e6d694a289790f09cf8e633&units=metric").then(response => {
    response.json().then(json => {
      // We have the JSON!
      return json;
    });
  });
};
    
let renderPost = (postData) => {
  let postDataTemp = `${postData.main.temp}`
  return postDataTemp
}

let post = getPostData();
let rendered = renderPost(post);

console.log(rendered)