function getDate(event){
    //event.preventDefault();  I didn't know that this is for when I want to submit something using a form
    let now= new Date();
    let year=now.getFullYear();
    let day=now.getDay();
    let date= now.getDate();
    let hour= now.getHours();
    let minutes=now.getMinutes();
    let month=now.getMonth();

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

    let dateTime= document.querySelector("#date-time");
    dateTime.innerHTML=`${day}, ${date} ${month} ${year}, ${hour}:${minutes}`
}

function getTemp(response){
    let temp=document.querySelector(".temperature");
    let temperature=Math.round(response.data.temperature.current);
    temp.innerHTML=temperature;
}


function getCity(event){
    event.preventDefault();
    let input= document.querySelector(".search-input");
    let city= document.querySelector("#city");
    city.innerHTML=input.value;
    
    //declaring our API URL
    let apiKey = "b2a5adcct04b33178913oc335f405433";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${input.value}&key=${apiKey}&units=metric`;
                                                                    //had to change it to the city that was passed in the search engine
    axios.get(apiUrl).then(getTemp); // calling getTemp here

    //calling getDate
    getDate();


}



let form=document.querySelector("form");
form.addEventListener("submit",getCity); // You can only call one function only on an Event listener
