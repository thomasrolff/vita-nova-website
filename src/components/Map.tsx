import styled from 'styled-components';
import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api';
import { FullScreen } from '../svg';

const FullScreenLink = styled.a``;

interface IProps {
    className?: string;
}

const BaseMap = ({ className }: IProps) => {
    const options: google.maps.MapOptions = {
        zoom: 14,
        disableDefaultUI: true,
        zoomControl: true,
    };

    const position = {
        lat: 52.16134,
        lng: 5.38091,
    };

    const openLocationInMapsUrl =
        'https://maps.google.com/maps?ll=52.161318,5.380595&z=15&t=m&hl=nl-NL&gl=NL&mapclient=embed&cid=10597320755820969908';

    if (!process.env.NEXT_PUBLIC_GOOGLE_API) return null;

    return (
        <LoadScriptNext googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API}>
            <GoogleMap
                center={position}
                mapContainerClassName={className}
                options={options}
            >
                <Marker position={position} />
                <FullScreenLink
                    href={openLocationInMapsUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FullScreen />
                </FullScreenLink>
            </GoogleMap>
        </LoadScriptNext>
    );
};

export const Map = styled(BaseMap)`
    position: relative;
    width: 100%;
    height: 100%;

    ${FullScreenLink} {
        display: block;
        position: absolute;
        top: 6px;
        right: 12px;
        cursor: pointer;
    }
`;
