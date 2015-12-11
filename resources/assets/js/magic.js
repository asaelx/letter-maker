 $(function(){
    /* Medium Editor */
    var editable = $('.editable');
    if(editable.length){

        var editor = new MediumEditor('.editable',{
            toolbar: {
                buttons: ['bold', 'italic', 'underline', 'quote']
            },
            placeholder: {
                text: 'Escribe algo...'
            }
        });

        editable.attr('contenteditable', true);
        editable.focus(function(el){
            $(this).addClass('focus');
        });
        editable.blur(function(el){
            $(this).removeClass('focus');
        });
    }


    var geocoder;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    }
    // Get the latitude and the longitude;
    function successFunction(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      codeLatLng(lat, lng);
    }

    function errorFunction() {
      alert("Geocoder failed");
    }

    function initialize() {
      geocoder = new google.maps.Geocoder();

    }

    function codeLatLng(lat, lng) {
      var latlng = new google.maps.LatLng(lat, lng);
      geocoder.geocode({latLng: latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[1]) {
            var arrAddress = results;
            console.log(results);
            $.each(arrAddress, function(i, address_component) {
              if (address_component.types[0] == "locality") {
                console.log("City: " + address_component.address_components[0].long_name);
                itemLocality = address_component.address_components[0].long_name;
              }
            });
          } else {
            alert("No results found");
          }
        } else {
          alert("Geocoder failed due to: " + status);
        }
      });
    }


});
