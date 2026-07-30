function getWeather(response){
    let temp=document.querySelector(".temperature");
    let city= document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");
    let iconElement=document.querySelector("#weather-icon");
    let humidityElement=document.querySelector("#humidity");
    let windElement=document.querySelector("#wind-speed");
    let timeDateElement=document.querySelector("#date-time");
    let date=new Date(response.data.time * 1000) //Formating the date properly intstead of just getting a number
    
    
    let temperatureElement=Math.round(response.data.temperature.current);
    temp.innerHTML=temperatureElement;
    city.innerHTML=response.data.city;// I did this so that the city that is displayed is from the API rather then the one typed in on ths search input
    //Taking into consideration e.g instead of displaying jOhannEsburg which is from the search input, the app wll display Johannesburg(Title form)
    descriptionElement.innerHTML= response.data.condition.description;
    humidityElement.innerHTML=response.data.temperature.humidity;
    windElement.innerHTML=response.data.wind.speed;
    timeDateElement.innerHTML=formatDate(date); // returns a formatted date as in proper day and months and the 0 take into consideration for single value mins
    //iconElement.innerHTML=`<img src="${response.data.condition.icon_url}" alt="${response.data.condition.description}">`;
    //Had to change to
    iconElement.src = response.data.condition.icon_url;//only replacing the src link and not the image entirely cause <img> is a void element, it's not like div and span with open and closed tags
    iconElement.alt = response.data.condition.description;
    console.log(response.data.condition.icon_url);
}


function formatDate(date){ ///takes the date
    //event.preventDefault();  I didn't know that this is for when I want to submit something using a form
   
    let year=date.getFullYear();
    let day=date.getDay();
    let dayOfWeek= date.getDate();
    let hour= date.getHours();
    let minutes=date.getMinutes();
    let month=date.getMonth();

    let days=["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    let months=["Jan",
        "Feb",
        "March",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"

    ]

    day=days[day];
    month=months[month];

    
    return `${day}, ${dayOfWeek} ${month} ${year}, ${hour}:${minutes}`;
}

function searchCity(city){
    let apiKey = "b2a5adcct04b33178913oc335f405433";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(getWeather);
}


function getCity(event){
    event.preventDefault();
    let input= document.querySelector(".search-input");
    searchCity(input.value)

}

function displayForecast(){
    //Injecting the weather forecast n html via javascript
    let forecastElement=document.querySelector("#forecast");
    let days=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
    let forecastHTML="";
    days.forEach(function(day){ //Looping through the array for each day
    forecastHTML=
    forecastHTML + `<div class="weather-forecast-day">
                        <div class="weather-forecast-date"> ${day}</div> 
                        <div class="weather-forecast-icon"> ☀️</div>
                        <div class="weather_forecast-temp"> <strong>15°</strong> 19° </div>
                    </div>
                    `; ///CONCATENATE 
    });
    forecastElement.innerHTML=forecastHTML; 
    
}


let form=document.querySelector("form");
form.addEventListener("submit",getCity); // You can only call one function only on an Event listenerget
searchCity("Pretoria");//Default City when the app is reloaded
displayForecast();




