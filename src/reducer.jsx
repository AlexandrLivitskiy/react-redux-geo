var Map = require("immutable").Map;

var reducer = function(state = Map(), action) {
    switch (action.type) {
        case "SET_STATE":
            return state.merge(action.state);
        case "ZOOM":
            return state.update("map", (map) => map.merge(action.zoom));
        case "LOCATION":
            return state.update("map", (map) => map.merge(action.mapLocation));
        case "LOG_IN":
            return state.update("login", (login) => login = action.isLogin);
        case "SAVE_MARKERS":
            return state.update("savedMarkers", (savedMarkers) => savedMarkers = action.markers);
        case "SHOW_MARKERS":
            return state.update("showedMarkers", (showedMarkers) => showedMarkers = action.markers);
        case "DELETE_MARKER":
            return state.update("markers",
                (markers) => markers.filterNot(
                    (item) => item === action.marker
                )
            );
    }
    return state;
}
module.exports = reducer;
