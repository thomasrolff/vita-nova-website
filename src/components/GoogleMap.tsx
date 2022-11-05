import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

interface ILocationPin {
    lat: number;
    lng: number;
    text: string;
}

const LocationPin = ({ lat, lng, text }: ILocationPin) => (
    <div className="pin">PIN</div>
);

export const GoogleMap = () => {
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
    };

    if (!process.env.NEXT_PUBLIC_GOOGLE_API) return null;

    return (
        <div style={{ height: '200px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.NEXT_PUBLIC_GOOGLE_API,
                }}
                defaultCenter={location}
                defaultZoom={18}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    );
};
