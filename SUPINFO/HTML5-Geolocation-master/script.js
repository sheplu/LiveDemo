var locateForm       = document.querySelector('form#locate');
var resultContainer  = document.querySelector('#result');
var address          = "Not found";

// XHR init
var xhr         = null;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    // code for IE6, IE5
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
} else {
    alert('Perhaps your browser does not support XMLHttpRequest?');
}

var getGMapsUrl = function(lat, lng) {
    return 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+ lat +','+ lng +'&sensor=false';
};

var updateCurrentAddress = function(lat, lng) {
    xhr.open('GET', getGMapsUrl(lat, lng));
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { // success
            var result  = JSON.parse(xhr.responseText);
            address = result.results[0].formatted_address;

            resultContainer.innerHTML = ""; // clear the result
            var paragraph = document.createElement("p");
            paragraph.textContent = address;
            resultContainer.appendChild(paragraph);
        }
    };
};

var updateLocation = function(position) {
    updateCurrentAddress(position.coords.latitude, position.coords.longitude);
};

var handleError = function(error) {
    console.log(error);
};

var locate = function (event) {
    event.preventDefault();

    var geolocation = navigator.geolocation;
    var watchId     = geolocation.watchPosition(updateLocation, handleError);
};

locateForm.addEventListener('submit', locate);