$(document).ready(function(){
    const API_KEY = '74cc06d1f9746e036575a255fb4c34fc';
    var searchCity = '';
    $('#userBtn').on('click', appendCity);
    const d = new Date();
    var dd = d.getDate();
    var mm = d.getMonth()+1;
    var yyyy = d.getFullYear();
    let output =
    (mm<10 ? '0' : '') + mm + '/' +
    (dd<10 ? '0' : '') + dd + '/' + yyyy
    var monthy = (mm<10 ? '0' : '') + mm
    var dayy = (dd<10 ? '0' : '') + dd
    console.log(monthy);
    console.log(dayy);
    $('#Hider').hide();

    var storedSearches = localStorage.getItem('Searches');
    var pulledSearches = JSON.parse(storedSearches);



    var recentSearches = [];
    


    function cityWeather(clicked) {
        // const API_KEY = '74cc06d1f9746e036575a255fb4c34fc';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${clicked},Unitedstates&appid=${API_KEY}&units=imperial`;
    
        $.ajax({
          url,
          method: 'GET'
        }).then(response => {


            weatherImg = response.weather[0].icon
            let lat = response.coord.lat
            let lon = response.coord.lon

        $('#cloudy').attr('src', "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png")
          $('#currentCity').text(searchCity);
          $('#currentTemp').text(`Temp: ${response.main.temp}`);
          $('#currentHumidity').text(`Humidity: ${response.main.humidity}`);
          $('#currentWind').text(`Wind Speed: ${response.wind.speed}`);
     
            uVIndex(lat, lon)
        //   cityForecast(clicked);
        });

    }

    function uVIndex(lat, lon) {
        let API_KEYs = '2ce355258826ac3c5b0c467e43a3dcbf'
        const urlot = `https://api.openweathermap.org/data/2.5/uvi?appid=${API_KEYs}&lat=${lat}&lon=${lon}`;
        $.ajax({
            urlot,
            method:"GET"
        }).then(response => {
            console.log(response)
        })
    }
    function cityForecast(clicked) {

        const fiveDays = 5;
        // const API_KEY = '74cc06d1f9746e036575a255fb4c34fc';
        const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${clicked}&cnt=${fiveDays}&appid=${API_KEY}&units=imperial`

        $.ajax({
            url,
            method: 'GET'
        }).then(response => {
            day0 = new Date(d.getTime() + (1000 * 60 * 60 * 24));
            var dd0 = day0.getDate();
            var mm0 = day0.getMonth()+1;
            var yyyy0 = day0.getFullYear();
            let output0 =
            (mm0<10 ? '0' : '') + mm0 + '/' +
            (dd0<10 ? '0' : '') + dd0 + '/' + yyyy0

            day1 = new Date(d.getTime() + (1000 * 60 * 60 * 48));
            var dd1 = day1.getDate();
            var mm1 = day1.getMonth()+1;
            var yyyy1 = day1.getFullYear();
            let output1 =
            (mm1<10 ? '0' : '') + mm1 + '/' +
            (dd1<10 ? '0' : '') + dd1 + '/' + yyyy1

            day2 = new Date(d.getTime() + (1000 * 60 * 60 * 72));
            var dd2 = day2.getDate();
            var mm2 = day2.getMonth()+1;
            var yyyy2 = day2.getFullYear();
            let output2 =
            (mm2<10 ? '0' : '') + mm2 + '/' +
            (dd2<10 ? '0' : '') + dd2 + '/' + yyyy2

            day3 = new Date(d.getTime() + (1000 * 60 * 60 * 96));
            var dd3 = day3.getDate();
            var mm3 = day3.getMonth()+1;
            var yyyy3 = day3.getFullYear();
            let output3 =
            (mm3<10 ? '0' : '') + mm3 + '/' +
            (dd3<10 ? '0' : '') + dd3 + '/' + yyyy3

            day4 = new Date(d.getTime() + (1000 * 60 * 60 * 120));
            var dd4 = day4.getDate();
            var mm4 = day4.getMonth()+1;
            var yyyy4 = day4.getFullYear();
            let output4 =
            (mm4<10 ? '0' : '') + mm4 + '/' +
            (dd4<10 ? '0' : '') + dd4 + '/' + yyyy4
            console.log(response)
            console.log(response.list[0].weather[0].icon)
            console.log(response.list[1].weather[0].icon)
            console.log(response.list[2].weather[0].icon)
            console.log(response.list[3].weather[0].icon)
            console.log(response.list[4].weather[0].icon)
            $('#icon0').attr('src', "https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png")
            $('#icon1').attr('src', "https://openweathermap.org/img/w/" + response.list[1].weather[0].icon + ".png")
            $('#icon2').attr('src', "https://openweathermap.org/img/w/" + response.list[2].weather[0].icon + ".png")
            $('#icon3').attr('src', "https://openweathermap.org/img/w/" + response.list[3].weather[0].icon + ".png")
            $('#icon4').attr('src', "https://openweathermap.org/img/w/" + response.list[4].weather[0].icon + ".png")
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

            $('#dater0').text(output0)
            $('#dater1').text(output1)
            $('#dater2').text(output2)
            $('#dater3').text(output3)
            $('#dater4').text(output4)

            $('#currentCity').text(clicked + ": " + output);
            for (i=0; i < 5; i++){
                // $(`#dater${i}`).text(monthy + "/" + dayy + "/" + yyyy)
                if (response.list[i].temp.day > 80){
                    $(`#day${i}`).attr('class', 'bg-danger')
                } else if (response.list[i].temp.day < 80) {
                    $(`#day${i}`).attr('class', 'bg-primary')
                }
            }
            // newForecast(clicked)
        })
    }



    function appendCity() {
        searchCity = $('#citySearchValue').val();
        var newBtn = $('<button>').attr('value', searchCity).attr('class', 'btn btn-primary').text(searchCity);
        $('#savedCities').prepend(newBtn);
        recentSearches.push(searchCity)



        
        recentString = JSON.stringify(recentSearches);
        localStorage.setItem('Searches', recentString);
 

        newBtn.on('click', function(){
            citySelecter = $(this).attr('value')
            onClick(citySelecter);

        });
        cityWeather(searchCity);
        cityForecast(searchCity);
        reveal();
    }
 function onClick(arr){
           
            console.log(arr);
             cityWeather(arr);
             cityForecast(arr);
            //  newForecast(arr)
            //  uVIndex();
            reveal();


    }

    function reveal(){
        $('#Hider').show();


    }
    if(pulledSearches) {
        for(i=0; i<pulledSearches.length; i++){
            onClick(pulledSearches[i])
            console.log(pulledSearches[i])
            var newBtn = $('<button>').attr('value', `${pulledSearches[i]}`).attr('class', 'btn btn-primary').text(pulledSearches[i])
            $('#savedCities').prepend(newBtn)
            $(newBtn).on('click', function(){
                citySelected = $(this).attr('value')
                onClick(citySelected)
            });

        }
    }


})