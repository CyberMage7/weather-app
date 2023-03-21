const apikey = "3fad3cc27ae12179c359e1741a5dffdd";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
async function checkweather(city){
    const response= await fetch(apiurl + city + `&appid=${apikey}`);
    var data= await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Mdata.main.temp + "°C";
    document.querySelector(".humi").innerHTML=data.main.humidity + "%";
    document.querySelector(".windi").innerHTML=data.wind.speed + "Km/h";

}
searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})
checkweather(city); 