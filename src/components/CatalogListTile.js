import React from "react";

import CustomButton from "./CustomButton";

import CatalogContent1SVG from "../assets/CatalogContent1.svg";

import Rating from "@mui/material/Rating";

import { useNavigate } from "react-router-dom";

import assetsURL from "../utils/Assets";
import { calculateRating, calculateRatingsCount } from "../utils/Helpers";

function CatalogListTile({
  catalog,
  buttonText,
  onClickButton,
  onClick,
  mainDivStyle,
}) {
  const rating = calculateRating(catalog.ratings);
  const [value, setValue] = React.useState(rating ?? 0);

  const onClickButtonCallback = (e) => {
    e.stopPropagation();
    onClickButton?.();
  };

  return (
    <div
      className="tailor_catalog_list_tile_container"
      style={{
        ...mainDivStyle,
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
        onClick={onClick}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "20px",
          }}
          src={
            catalog?.attachment
              ? assetsURL(catalog.attachment)
              : CatalogContent1SVG
          }
        />
        <CustomButton
          text={buttonText}
          type="submit"
          onClick={onClickButtonCallback}
          style={{
            background: "#fff",
            color: "#CC8E9C",
            fontWeight: "600",
            boxShadow: "none",
            borderRadius: "20px",
            marginTop: "5%",
            padding: "2% 5%",
            position: "absolute",
            top: "0",
            right: "5%",
          }}
        />
        <p className="tailor_catalog_list_tile_title">{catalog.name}</p>
        <div className="tailor_catalog_list_tile_details">
          <p className="tailor_catalog_list_tile_price_detail">
            Stitching Price
          </p>
          <p className="tailor_catalog_list_tile_price">${catalog.price}</p>
        </div>
        <div className="tailor_catalog_list_tile_details">
          <p className="tailor_catalog_list_tile_price_detail">Reviews</p>
          <Rating name="read-only" value={value} size="small" readOnly />
        </div>
      </div>
    </div>
  );
}

export default CatalogListTile;
