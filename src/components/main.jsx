import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';
var actions = require("../actions/actions.jsx");
var connect = require("react-redux").connect;

class Main extends React.Component {
    render() {
        navigator.geolocation.getCurrentPosition((pos) => this.props.geo([pos.coords.latitude, pos.coords.longitude]));
        let pharmacies = [[46.4770, 30.7382], [46.4716, 30.7365]];
        let gas = [[46.4736, 30.7058], [46.4931, 30.7135]];
        let schools = [[46.4796, 30.7356], [46.4807, 30.7400]];
        let restaurants = [[46.4848, 30.7357], [46.4821, 30.7413]];
        let markers = [];
        this.props.showedMarkers.map(item => markers.push(item));
        return (
            <div onWheel = {(e) => this.props.zooming(this.props.map.get("zoom") - e.deltaY/100)}>
                <br></br>
                <Map
                    center={this.props.map.get("location").toArray()}
                    zoom={this.props.map.get("zoom")}
                    width={600}
                    height={400}
                    onBoundsChanged={e => this.props.location(e.center)}
                    onClick={e => {
                        markers.push(e.latLng);
                        this.props.showMarkers(markers);
                    }}
                >
                    <Marker anchor={this.props.map.get("geo").toArray()}/>
                    {this.props.showedMarkers.map(item => <Marker key={item} anchor={item} onClick={e => {
                        markers = markers.filter(i => i.toString() !== e.anchor.toString());
                        this.props.showMarkers(markers);
                    }}/>)}
                    {this.props.pharmacy.map(item => <Overlay anchor={item} offset={[16, 16]}>
                        <img src='../../img/pharmacy.png' width={32} height={32} alt='' onClick={() => this.props.pharmacies([])}/>
                    </Overlay>)}
                    {this.props.gasStations.map(item => <Overlay anchor={item} offset={[16, 16]}>
                        <img src='../../img/gas.png' width={32} height={32} alt='' onClick={() => this.props.gas([])}/>
                    </Overlay>)}
                    {this.props.school.map(item => <Overlay anchor={item} offset={[16, 16]}>
                        <img src='../../img/school.png' width={32} height={32} alt='' onClick={() => this.props.schools([])}/>
                    </Overlay>)}
                    {this.props.restaurant.map(item => <Overlay anchor={item} offset={[16, 16]}>
                        <img src='../../img/restaurant.png' width={32} height={32} alt='' onClick={() => this.props.restaurants([])}/>
                    </Overlay>)}
                </Map>
                <br></br>
                <button onClick={() => this.props.zooming(this.props.map.get("zoom") - 1)}>ZOOM OUT</button>
                <button onClick={() => this.props.zooming(this.props.map.get("zoom") + 1)}>ZOOM IN</button>
                <button onClick={() => this.props.location(this.props.map.get("geo"))}>Geolocation</button>
                <button onClick={() => this.props.saveMarkers(markers)}>Save</button>
                <button onClick={() => {
                    markers = markers.concat(this.props.savedMarkers.filter(i => markers.map(item => item.toString()).indexOf(i.toString()) === -1));
                    this.props.showMarkers(markers);
                }}>Show</button>
                <br></br>
                <button onClick={() => this.props.pharmacies(pharmacies)}>pharmacies</button>
                <button onClick={() => this.props.gas(gas)}>gas stations</button>
                <button onClick={() => this.props.schools(schools)}>schools</button>
                <button onClick={() => this.props.restaurants(restaurants)}>restaurants</button>
                <br></br>
                {this.props.showedMarkers.map(item => <h3 key={item}> {item} </h3>)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pharmacy: state.get("pharmacies"),
        gasStations: state.get("gas"),
        school: state.get("schools"),
        restaurant: state.get("restaurants"),
        showedMarkers: state.get("showedMarkers"),
        savedMarkers: state.get("savedMarkers"),
        map: state.get("map"),
    };
}

export default connect(mapStateToProps, actions)(Main);
