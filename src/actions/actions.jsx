var login = function (isLogin) {
    return {
        type: "LOG_IN",
        isLogin
    }
};
var addMarker = function (marker) {
    return {
        type: "ADD_MARKER",
        marker
    }
};
var deleteMarker = function (marker) {
    return {
        type: "DELETE_MARKER",
        marker
    }
};

module.exports = {login, addMarker, deleteMarker};
