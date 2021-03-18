import { HiOutlineLocationMarker } from "@react-icons/all-files/hi/HiOutlineLocationMarker";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";
import L from "leaflet";
import { device, size } from "../../styles/breakpoints";

const icon = require("leaflet/dist/images/marker-icon.png");
const iconShadow = require("leaflet/dist/images/marker-shadow.png");

console.log(icon);

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

export const Map = () => {
  return (
    <StyledMap
      center={[50.6783927649268, 17.933120727539066]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[50.67820015276195, 17.871429920196537]}
        icon={DefaultIcon}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </StyledMap>
  );
};

const StyledMap = styled(MapContainer)`
  height: 350px;

  .leaflet-top {
    z-index: 600;
    margin: auto;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);

    max-width: ${size.laptopM};

    @media ${device.laptopL} {
      max-width: ${size.laptopL};
    }
  }
`;
