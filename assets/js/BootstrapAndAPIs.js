$(document).ready(function(){

  $('.navbar-form').on('submit', function(e) {
    e.preventDefault();
    console.log("Submit");
            // $.ajax({
            //     url: "http://api.wunderground.com/api/35c9d364b4732721/geolookup/conditions/q/IA/Cedar_Rapids.json",
            //     method: 'GET',
            //     dataType: "JSON",
            //     success: function(parsed_json) {
            //         var location = parsed_json['location']['city'];
            //         var temp_f = parsed_json['current_observation']['temp_f'];
            //         alert("Current temperature in " + location + " is: " + temp_f);
            //     }
            // });
        var myCity = $('.cityform').val();
        console.log(myCity);
        var myState = $('.stateform').val();
        console.log(myState);

            $.ajax({
                url: "http://api.wunderground.com/api/35c9d364b4732721/forecast/q/" + myState + "/" + myCity + "/" + ".json",
                method: 'GET',
                dataType: "JSON",
                success: function(json) {
                    // var location = parsed_json['location']['city'];
                    // var temp_f = parsed_json['current_observation']['temp_f'];
                    // $('.weatherdata').append("Current temperature in " + location + " is: " + temp_f);

                    var result = json['high'];
                    $('.weatherdata').append(json[2]);
                    console.log(json.forecast.simpleforecast.forecastday[0].conditions);
                    console.log(json);
                }
            });
        });

    console.log("Ready!");


    });
