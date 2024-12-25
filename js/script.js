const apiKey = "935b8badc1ff4cd22e21847ef1585de1"; // Replace with your OpenWeatherMap API key

document.getElementById("searchBtn").addEventListener("click", function() {
  const city = document.getElementById("cityInput").value;
  if (city) {
    fetchWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});

async function fetchWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("City not found.");
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWeather(data) {
  const cityName = data.name;
  const temperature = data.main.temp;
  const description = data.weather[0].description;

  document.getElementById("cityName").textContent = cityName;
  document.getElementById("temperature").textContent = `Temperature: ${temperature}°C`;
  document.getElementById("description").textContent = `Condition: ${description}`;
}
