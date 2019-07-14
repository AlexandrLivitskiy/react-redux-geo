import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';
var actions = require("../actions/actions.jsx");
var connect = require("react-redux").connect;

class Main extends React.Component {
    render() {
        let geolocation = [46.4782, 30.7399];
        let markers = [];
        this.props.showedMarkers.map(item => markers.push(item));
        return (
            <div>
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
                    <Marker anchor={geolocation}/>
                    {this.props.showedMarkers.map(item => <Marker key={item} anchor={item} onClick={e => {
                        markers = markers.filter(i => i.toString() !== e.anchor.toString());
                        this.props.showMarkers(markers);
                    }}/>)}
                    <Overlay anchor={geolocation} offset={[-100, 100]}>
                        <img src='../../public/pigeon.jpg' width={240} height={158} alt=''/>
                    </Overlay>
                </Map>
                <br></br>
                <button onClick={() => this.props.zooming(this.props.map.get("zoom") - 1)}>ZOOM OUT</button>
                <button onClick={() => this.props.zooming(this.props.map.get("zoom") + 1)}>ZOOM IN</button>
                <button onClick={() => this.props.location(geolocation)}>Geolocation</button>
                <button onClick={() => this.props.saveMarkers(markers)}>Save</button>
                <button onClick={() => {
                    markers = markers.concat(this.props.savedMarkers.filter(i => markers.map(item => item.toString()).indexOf(i.toString()) === -1));
                    this.props.showMarkers(markers);
                }}>Show</button>
                <br></br>
                {this.props.showedMarkers.map(item => <h3 key={item}> {item} </h3>)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        showedMarkers: state.get("showedMarkers"),
        savedMarkers: state.get("savedMarkers"),
        map: state.get("map"),
    };
}

export default connect(mapStateToProps, actions)(Main);
