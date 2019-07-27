var Map = require("immutable").Map;

var reducer = function(state = Map(), action) {
    switch (action.type) {
        case "SET_STATE":
            return state.merge(action.state);
        case "ZOOM":
            return state.update("map", (map) => map.merge(action.zoom));
        case "LOCATION":
            return state.update("map", (map) => map.merge(action.mapLocation));
        case "GEO":
            return state.update("map", (map) => map.merge(action.mapGeo));
        case "LOG_IN":
            return state.update("login", (login) => login = action.isLogin);
        case "SAVE_MARKERS":
            return state.update("savedMarkers", (savedMarkers) => savedMarkers = action.markers);
        case "SHOW_MARKERS":
            return state.update("showedMarkers", (showedMarkers) => showedMarkers = action.markers);
        case "PHARMACIES":
            return state.update("pharmacies", (pharmacies) => pharmacies = action.pharmacies);
        case "GAS":
            return state.update("gas", (gas) => gas = action.gas);
        case "SCHOOLS":
            return state.update("schools", (schools) => schools = action.schools);
        case "RESTAURANTS":
            return state.update("restaurants", (restaurants) => restaurants = action.restaurants);
    }
    return state;
}
module.exports = reducer;
