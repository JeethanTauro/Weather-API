$(function() {
    $("#myForm").submit(function(e) {
        e.preventDefault();
        var city = $("#City").val();
        getWeather(city);
    });
});

function getWeather(city) {
    var apiKey = '6d12de8e81b3c3ef13819bd7bacc26af';
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(data) {
            $('.weather-place').text(data.name + ', ' + data.sys.country);
            $('.weather-temperature').text(data.main.temp + ' °C');
            $('.weather-min-temperature').text(data.main.temp_min + ' °C');
            $('.weather-max-temperature').text(data.main.temp_max + ' °C');
            $('.weather-description').text(data.weather[0].description);
            $('.weather-humidity').text(data.main.humidity + ' %');
            $('.weather-wind-speed').text(data.wind.speed + ' m/s');
            $('.weather-sunrise').text(new Date(data.sys.sunrise * 1000).toLocaleTimeString());
            $('.weather-sunset').text(new Date(data.sys.sunset * 1000).toLocaleTimeString());
            $('.weather-icon').attr('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
            $('.weather-wrapper').show();
        },
        error: function(error) {
            console.error('Error:', error);
            $('.weather-wrapper').hide();
        }
    });
}
