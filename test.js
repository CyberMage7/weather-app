let weather = {
    apiKey: "3fad3cc27ae12179c359e1741a5dffdd",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerHTML=name;
      document.querySelector(".temp").innerHTML=temp + "°C";
      document.querySelector(".humi").innerHTML=humidity + "%";
      document.querySelector(".windi").innerHTML=speed + "Km/h";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search input").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather();