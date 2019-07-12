var Map = require("immutable").Map;

var reducer = function(state = Map(), action) {
    switch (action.type) {
        case "SET_STATE":
            return state.merge(action.state);
        case "LOG_IN":
            return state.update("login", (login) => login = action.login);
        case "ADD_MARKER":
            return state.update("markers", (markers) => markers.push(action.marker));
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
