import React from "react";

import CustomButton from "./CustomButton";

import CatalogContent1SVG from "../assets/CatalogContent1.svg";

import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";

import { useNavigate } from "react-router-dom";

function TailorCatalogListTile(){

  const navigate = useNavigate();

  const [value, setValue] = React.useState(2);

  const navToViewCatalog = () => {
    navigate("/tailor_view_catalog");
  }

  const navToEditCatalog = () => {
    navigate("/tailor_edit_catalog");
  }

  return (
    <Grid
      xs={12}
      sm={5}
      md={3}
      sx={{ position: "relative", margin: "auto" }}
      onClick={navToViewCatalog}
    >
      <img src={CatalogContent1SVG} className="tailor_catalog_list_tile_image"></img>
      <CustomButton
        text="Edit"
        type="submit"
        onClick={navToEditCatalog}
        style={{
          background: "#fff",
          color: "#CC8E9C",
          fontWeight: "600",
          boxShadow: "none",
          borderRadius: "20px",
          marginTop: "5%",
          padding: "5px 15px 5px 15px",
          position: "absolute",
          top: "0",
          right: "4%",
        }}
      />
      <p className="tailor_catalog_list_tile_title">T-Shirt For Mens</p>
      <div className="tailor_catalog_list_tile_details">
        <p className="tailor_catalog_list_tile_price_detail">Stitching Price</p>
        <p className="tailor_catalog_list_tile_price">$33.00</p>
      </div>
      <div className="tailor_catalog_list_tile_details">
        <p className="tailor_catalog_list_tile_price_detail">Reviews</p>
        <Rating name="read-only" value={value} size="small" readOnly />
      </div>
    </Grid>
  );
}

export default TailorCatalogListTile;
