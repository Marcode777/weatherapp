var temp ;
var loc  ;
var icon  ;
var humidity  ;
var wind  ;
var direction ;

function update(weather){

  temp.innerHTML = weather.temp;
  loc.innerHTML = weather.loc;
  humidity.innerHTML = weather.humidity;
  wind.innerHTML = weather.wind;
  direction.innerHTML = weather.direction;
  icon.src = "imgs/code/" + weather.icon + ".png";

}


window.onload = function(){
  temp = document.getElementById("temperature");
  loc = document.getElementById("location");
  icon = document.getElementById("icon");
  humidity = document.getElementById("humidity");
  wind = document.getElementById("wind");
  direction = document.getElementById("direction");

  var weather = {};
    weather.temp = 45;
    weather.wind = 3.5;
    weather.direction = "N";
    weather.humidity = 35;
    weather.loc = "Boston";
    weather.icon = 200;

  update(weather);
}