var to_be_run_on_server_response = function(weather_data){
  $('#container').append(weather_data.main.temp)
}

$.get('http://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=bd82977b86bf27fb59a04b61b657fb6f').success(to_be_run_on_server_response)