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


function getCity(event){
    event.preventDefault();
    let input= document.querySelector(".search-input");
    let city= document.querySelector("#city");
    city.innerHTML=input.value;

    //calling getDate
    getDate();

}



let form=document.querySelector("form");
form.addEventListener("submit",getCity); // You can only call one function only on an Event listener
