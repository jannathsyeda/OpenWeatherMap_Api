const api = {
  key: "0b31a13e61be7677ecaff48653cb1225",
  base: "https://api.openweathermap.org/data/2.5/weather",
};

document.getElementById("submit").addEventListener("click", function () {
  var searchInputValue = document.getElementById("search-action").value;
  // console.log(searchInputValue);
  // const apiKey='0b31a13e61be7677ecaff48653cb1225';
  fetch(`${api.base}?q=${searchInputValue}&units=metric&appid=${api.key}`)
    .then((response) => response.json())
    .then((data) => {
      // const d=data;
      console.log(data);
      // const weatherArrayObj=data.main;
      document.getElementById("Temperature").innerText = data.main.temp;
      document.getElementById("city").innerText = data.name;
      const iconStatus = data.weather[0].icon;
      document.getElementById(
        "WeatherIconStatus"
      ).src = `http://openweathermap.org/img/wn/${iconStatus}@2x.png`;
      document.getElementById("status").innerText = data.weather[0].main;
      document.getElementById("feels").innerText = data.main.feels_like;
    })

    .catch((error) => alert("City not found"));
});
