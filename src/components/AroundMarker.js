import React from 'react';
import {Marker, InfoWindow} from 'react-google-maps';


export class AroundMarker extends React.Component {
    state = {
        isOpen: false,
    }
    onToggleOpen = () => {
        this.setState((prevState) => {
            return {isOpen: !prevState.isOpen};
        });
    }
    render () {
        const {lat, lon} = this.props.pos;
        const {url, user, message} = this.props.post;
        return (
            <Marker
                position={{lat, lng:lon}}
                onClick = {this.onToggleOpen}
            >
                {this.state.isOpen? <InfoWindow onCloseClick={this.onToggleOpen}>
                    <div>
                        <img classname = "around-marker-image" src ={url} alt = {`${user} : ${message}`}/>
                        <p>{`${user} : ${message}`}</p>
                    </div>
                </InfoWindow> : null }
            </Marker>
        );
    }
}