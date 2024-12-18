let searchInput = document.getElementById("searchInput");
let city = document.getElementById("city");
let temperature = document.getElementById("temperature");
let description = document.getElementById("description");
let clouds = document.getElementById("clouds");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let form = document.getElementById("inputForm");
let main = document.querySelector('main')

form.addEventListener("submit", (event) => {        //event handeler
    event.preventDefault()
    if (searchInput.value != "") {
        searchWeather();
    }
})
let id = "5713576368d7d910197dfccf2efcfefa"
function searchWeather() {                          //searches for url and picks information 

    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + searchInput.value + ',&APPID=' + id + '&units=metric';

    fetch(url)
        .then(responsive => responsive.json())
        .then(data => {
            if (data.cod == 200) {
                city.querySelector("figcaption").innerText = data.name;
                city.querySelector("img").src = "https://flagsapi.com/" + data.sys.country + "/shiny/32.png"
                temperature.querySelector('img').src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png';
                temperature.querySelector('figcaption span').innerText = data.main.temp;
                description.innerText = data.weather[0].description;
                clouds.innerText = data.clouds.all;
                humidity.innerText = data.main.humidity;
                pressure.innerText = data.main.pressure;
            } else {
                main.classList.add('error')         //adds animation for bad input
                setTimeout(() => {
                    main.classList.remove('error')
                }, 250);
            }

            searchInput.value = '';                 //clears input
        })
}
function initApp() {                                //inniciate search when application loads
    searchInput.value = 'Praha';
    searchWeather();
}

initApp();