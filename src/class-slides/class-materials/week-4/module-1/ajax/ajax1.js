$.ajax({
  method: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=bd82977b86bf27fb59a04b61b657fb6f',
  success: function(weather_data){
    console.log(weather_data)
  }
})