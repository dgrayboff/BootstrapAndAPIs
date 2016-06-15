$(document).ready(function(){

  $('.navbar-form').on('submit', function(e) {
    e.preventDefault();
    console.log("Submit");
        var myCity = $('.cityform').val();
        console.log(myCity);
        var myState = $('.stateform').val();
        console.log(myState);

            $.ajax({
                url: "http://api.wunderground.com/api/35c9d364b4732721/forecast10day/q/" + myState + "/" + myCity + "/" + ".json",
                method: 'GET',
                dataType: "JSON",
                success: function(json) {

                    var forecastday = json.forecast.txt_forecast.forecastday

                    for (i = 0; i <forecastday.length; i++) {
                      if (json.forecast.txt_forecast.forecastday[i].title === "Saturday") {
                        $('.weatherdata1').append(json.forecast.txt_forecast.forecastday[i].title);
                        $('.weatherdata2').append(json.forecast.txt_forecast.forecastday[i].fcttext);

                        var a = json.forecast.txt_forecast.forecastday[i].fcttext;
                        if (a.toLowerCase().indexOf('sunny') != -1) {
                          $('.icon1').append('<img src="http://icons.wxug.com/i/c/i/clear.gif"/>');
                          $('.icon1').css('display', 'block');
                          console.log('Sunny');
                        }
                        if (a.toLowerCase().indexOf('partly') != -1) {
                          $('.icon1').append('<img src="http://icons.wxug.com/i/c/i/mostlysunny.gif"/>');
                          $('.icon1').css('display', 'block');
                          console.log('Partly');
                        }
                        if (a.toLowerCase().indexOf('thunderstorm') != -1) {
                          $('.icon1').append('<img src="http://icons.wxug.com/i/c/i/chancetstorms.gif"/>');
                          $('.icon1').css('display', 'block');
                          console.log('Thunderstorm');
                        }
                        if (a.toLowerCase().indexOf('rain') != -1) {
                          $('.icon1').append('<img src="http://icons.wxug.com/i/c/i/chancerain.gif"/>');
                          $('.icon1').css('display', 'block');
                          console.log('Rain');
                        }
                        if (a.toLowerCase().indexOf('clouds') != -1) {
                          $('.icon1').append('<img src="http://icons.wxug.com/i/c/i/cloudy.gif"/>');
                          $('.icon1').css('display', 'block');
                          console.log('Clouds');
                        }
                        else {
                          console.log("doesn't include");
                        }
                      }



                      if (json.forecast.txt_forecast.forecastday[i].title === "Sunday") {
                        $('.weatherdata3').append(json.forecast.txt_forecast.forecastday[i].title);
                        $('.weatherdata4').append(json.forecast.txt_forecast.forecastday[i].fcttext);

                        var b = json.forecast.txt_forecast.forecastday[i].fcttext;
                        if (b.toLowerCase().indexOf('sunny') != -1) {
                          $('.icon2').append('<img src="http://icons.wxug.com/i/c/i/clear.gif"/>');
                          $('.icon2').css('display', 'block');
                          console.log('Sunny');
                        }
                        if (b.toLowerCase().indexOf('partly') != -1) {
                          $('.icon2').append('<img src="http://icons.wxug.com/i/c/i/mostlysunny.gif"/>');
                          $('.icon2').css('display', 'block');
                          console.log('Partly');
                        }
                        if (b.toLowerCase().indexOf('thunderstorm') != -1) {
                          $('.icon2').append('<img src="http://icons.wxug.com/i/c/i/chancetstorms.gif"/>');
                          $('.icon2').css('display', 'block');
                          console.log('Thunderstorm');
                        }
                        if (b.toLowerCase().indexOf('rain') != -1) {
                          $('.icon2').append('<img src="http://icons.wxug.com/i/c/i/chancerain.gif"/>');
                          $('.icon2').css('display', 'block');
                          console.log('Rain');
                        }
                        if (b.toLowerCase().indexOf('clouds') != -1) {
                          $('.icon2').append('<img src="http://icons.wxug.com/i/c/i/cloudy.gif"/>');
                          $('.icon2').css('display', 'block');
                          console.log('Clouds');
                        }
                        else {
                          console.log("doesn't include2");
                        }


                      }


                    }

                    // $('.weatherdata1').append(json.forecast.txt_forecast.forecastday[2].title);
                    // $('.weatherdata2').append(json.forecast.txt_forecast.forecastday[2].fcttext);
                    // $('.weatherdata3').append(json.forecast.txt_forecast.forecastday[4].title);
                    // $('.weatherdata4').append(json.forecast.txt_forecast.forecastday[4].fcttext);
                    // $('.weatherdata1').append("Conditions: " + json.forecast.simpleforecast.forecastday[1].conditions);
                    // $('.weatherdata2').append("High: " + json.forecast.simpleforecast.forecastday[1].high.fahrenheit + " degrees");
                    console.log(json);
                }
            });
        });

    console.log("Ready!");


    });
