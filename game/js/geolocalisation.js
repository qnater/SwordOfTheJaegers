 var x = document.getElementById("demo");

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
           /* x.innerHTML = "Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude;*/
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            
            

            var mymap = L.map('map').setView([lat, lon], 13);

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox.streets'
            }).addTo(mymap);

            L.marker([lat, lon]).addTo(mymap)
                .bindPopup("<b>HES-SO</b><br />Welcome").openPopup();
        }

        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    x.innerHTML = "User denied the request for Geolocation."
                    break;
                case error.POSITION_UNAVAILABLE:
                    x.innerHTML = "Location information is unavailable."
                    break;
                case error.TIMEOUT:
                    x.innerHTML = "The request to get user location timed out."
                    break;
                case error.UNKNOWN_ERROR:
                    x.innerHTML = "An unknown error occurred."
                    break;
            }
        }
        
        //controle si suisse ou pas
        
         var geo=taoulesvaches(lat,lon);
        
        function taoulesvaches(lat,lon){
         var suisse= false;
         var msg="";
        
         if ((lat>=45.828465)&& (lat<=48.96667)){
             if ((lon>=5.971636)&&(lon<=10.492014)){
                 suisse=true;
             }
          }
            
           if (suisse)
               msg= "SUI";
            else
                msg="EXT";
        }
