/*
Filename: weather.js
Written : October,2021
Author  : Badrit Bin Imran
Description: This is the javascript file that contains all api calls and functions for updating
the UI.
*/ 

//Variables are declared here
const key ="yourkeyhere";
const details = document.querySelector('.details');
const form = document.querySelector('form');
const body = document.querySelector('body');
const card = document.querySelector('.card');
const intro =  document.querySelector('.intro');

/*
Name      : getWeather
Type      : async
Parameters: String city (Name of city queried by user)
Return    : JSON 
Description: This function returns the JSON object after calling the weather API.
the UI.
*/ 
const getWeather = async(city) =>{
    const query = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`; 
    const response = await fetch(query);
    const data = await response.json();
    console.log(data);
    return data;
}

/*
Name      : updateCard
Parameters: data (JSON object containing data about specific location)
Return    : void 
Description: This function updates the UI with data obtained from the weather API.
the UI.
*/ 
const updateCard = (data) =>{
    details.innerHTML = 
    `<h5 class="my-3">${data.location.name} , ${data.location.country}</h5>
    <div class="display-6 my-4">
        <span>${data.current.temp_c}</span>
        <span>&deg; C</span>
    </div>
    <div class="display-6 my-4">
        <span>${data.current.condition.text}</span>
    </div>
    <div class="display-6 my-4">
     <span>Humidity</span>
     <span>${data.current.humidity} %</span>
    </div>`;
    intro.style.backgroundColor = "transparent";
    if(data.current.is_day!=1) body.style.backgroundImage = "url('assets/night.png')";
    else body.style.backgroundImage = "url('assets/day.jpg')";
}

/*
Event Listener for the user query form
Description: The event listener fetches api data after the user submits a location name.
After that, the UI is updated with the newly obtained data
the UI.
*/ 
form.addEventListener('submit', e => {
    e.preventDefault();
    const city = form.city.value.trim();
    form.reset();
    getWeather(city).then(data => updateCard(data))
    .catch(data => {
        details.innerHTML = 
    `<h1>Sorry No Location Found With This name</h1>`;
    });;
});
