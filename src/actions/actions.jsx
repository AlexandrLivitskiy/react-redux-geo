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
let deleteMarker = function (marker) {
    return {
        type: "DELETE_MARKER",
        marker
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

module.exports = {login, saveMarkers, showMarkers, deleteMarker, zooming, location};
