import React, { useContext, useRef, useEffect } from "react";
import { StandaloneSearchBox } from "@react-google-maps/api";
import { GlobalContext } from "../context/GlobalContext";

import BtnIcon from "./BtnIcon";
import Icons from "../assets/icons/Icons";

import "../App.css";

const SearchBox = () => {
  const inputRef = useRef();

  const {
    setData,
    setCompletedAddress,
    completedAddress,
    editMode,
    data,
    edit,
  } = useContext(GlobalContext);

  const { editBtn } = Icons;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      setData({
        center: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        },
        address: place.formatted_address,
      });
      setCompletedAddress(true);
    }
  };

  return (
    <>
      {completedAddress ? (
        <div className="d-flex location">
          <div className="location">{data.address}</div>
          <div className="edit justify-content-end align-items-end">
            <BtnIcon imageSrc={editBtn} fnButton={edit} />
          </div>
        </div>
      ) : (
        <StandaloneSearchBox
          onLoad={(ref) => (inputRef.current = ref)}
          onPlacesChanged={handlePlaceChanged}
        >
          <input
            type="text"
            className={editMode ? "form-control" : "form-control inputAddress"}
            placeholder="Ej: Corrientes 1500, Rosario"
            defaultValue={data.address}
            //onChange={editMode ? handleChange : null}
            ref={inputRef}
          />
        </StandaloneSearchBox>
      )}
    </>
  );
};

export default SearchBox;
