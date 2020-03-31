$(document).ready(function(){
    var searchCity = '';
    $('#userBtn').on('click', appendCity);
    const d = new Date();

    const dd = d.getDate();
    const mm = d.getMonth()+1;
    const yyyy = d.getFullYear();
    // let totaldays = new Date(yyyy, mm, 0).getDate()
    let output =
    (mm<10 ? '0' : '') + mm + '/' +
    (dd<10 ? '0' : '') + dd + '/' + yyyy


    function cityWeather(clicked) {
        const API_KEY = '74cc06d1f9746e036575a255fb4c34fc';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${clicked},Unitedstates&appid=${API_KEY}&units=imperial`;
    
        $.ajax({
          url,
          method: 'GET'
        }).then(response => {
          console.log(response);
          console.log(response.main.temp)
          console.log(response.main.humidity)
          console.log(response.wind.speed)
          $('#currentCity').text(searchCity);
          $('#currentTemp').text(response.main.temp);
          $('#currentHumidity').text(response.main.humidity);
          $('#currentWind').text(response.wind.speed);
     
    
    
        });

    }
    function cityForecast(clicked) {

        const fiveDays = 5;
        const API_KEY = '74cc06d1f9746e036575a255fb4c34fc';
        const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${clicked}&cnt=${fiveDays}&appid=${API_KEY}&units=imperial`

        $.ajax({
            url,
            method: 'GET'
        }).then(response => {
            console.log(response);
 
            $('#temp0').text("Temp:" + response.list[0].temp.day)
            $('#temp1').text("Temp:" + response.list[1].temp.day)
            $('#temp2').text("Temp:" + response.list[2].temp.day)
            $('#temp3').text("Temp:" + response.list[3].temp.day)
            $('#temp4').text("Temp:" + response.list[4].temp.day)

            $('#humidity0').text("Humid:" + response.list[0].humidity + "%")
            $('#humidity1').text("Humid:" + response.list[1].humidity + "%")
            $('#humidity2').text("Humid:" + response.list[2].humidity + "%")
            $('#humidity3').text("Humid:" + response.list[3].humidity + "%")
            $('#humidity4').text("Humid:" + response.list[4].humidity + "%")

            $('#currentCity').text(clicked + ": " + output);

        })
    }



    function appendCity() {
        searchCity = $('#citySearchValue').val();
        console.log(searchCity);
        const newBtn = $('<button>').attr('value', searchCity).attr('class', 'btn btn-primary').text(searchCity);
        $('#savedCities').prepend(newBtn);
        newBtn.on('click', function(){
            if($(this).is('button')){
               citySelected = $(this).attr('value')
               console.log(citySelected)
                cityWeather(citySelected);
                cityForecast(citySelected);
            }
        })
        cityWeather(searchCity);
        cityForecast(searchCity);
    }


})