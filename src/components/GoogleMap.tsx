import styled from 'styled-components';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { useEffect, useRef, useState } from 'react';

interface IProps {
    className?: string;
}

const Map: React.FC<google.maps.MapOptions> = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(
                new window.google.maps.Map(ref.current, {
                    center: { lat: 52.16134, lng: 5.38091 },
                    zoom: 15,
                })
            );
        }
    }, [ref, map]);

    return <div ref={ref} style={{ height: '200px', width: '400px' }} />;
};

const BaseGoogleMap = () => {
    if (!process.env.NEXT_PUBLIC_GOOGLE_API) return null;

    return (
        <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_API}>
            <Map />
        </Wrapper>
    );
};

export const GoogleMap = styled(BaseGoogleMap)``;
