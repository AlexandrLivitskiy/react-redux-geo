let login = function (isLogin) {
    return {
        type: "LOG_IN",
        isLogin
    }
};
let saveMarkers = function (markers) {
    return {
        type: "SAVE_MARKERS",
        markers: markers
    }
};
let showMarkers = function (markers) {
    return {
        type: "SHOW_MARKERS",
        markers: markers
    }
};
let zooming = function (value) {
    return {
        type: "ZOOM",
        zoom: {zoom: value}
    }
};
let location = function (value) {
    return {
        type: "LOCATION",
        mapLocation: {location: value}
    }
};
let pharmacies = function (pharmacies) {
    return {
        type: "PHARMACIES",
        pharmacies: pharmacies
    }
};
let gas = function (gas) {
    return {
        type: "GAS",
        gas: gas
    }
};
let schools = function (schools) {
    return {
        type: "SCHOOLS",
        schools: schools
    }
};
let restaurants = function (restaurants) {
    return {
        type: "RESTAURANTS",
        restaurants: restaurants
    }
};

module.exports = {login, saveMarkers, showMarkers, zooming, location, pharmacies, gas, schools, restaurants};
