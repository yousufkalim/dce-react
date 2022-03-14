import React from "react";
import AppBar from "../../components/TailorAppBar";
import Footer from "../../components/Footer";
import CustomButton from "../../components/CustomButton";
import Grid from "@mui/material/Grid";
import CatalogContent1 from "../../assets/CatalogContent1.svg";
import CatalogContent2 from "../../assets/CatalogContent2.svg";
import CatalogContent3 from "../../assets/CatalogContent3.svg";

import Rating from "@mui/material/Rating";
const Catalog = () => {
  const [value, setValue] = React.useState(2);
  return (
    <div className="container-page">
      <AppBar color="#ffffff" />
      <div className="catalog-container">
        <div
          className="catalog_screen_row1"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <p className="catalog_screen_heading">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <CustomButton
            text="Add Catalog"
            type="submit"
            style={{
              background: "#fff",
              color: "#CC8E9C",
              fontWeight: "600",
              boxShadow: "none",
              marginTop: "0%",
              padding: "1% 2% 1% 2%",
            }}
          />
        </div>
      </div>
      <div className="catalog_screen_mycatalog">
        <p className="mycatalog_heading">My Catalog</p>
        <Grid container spacing={1} sx={{ padding: "3% 20%" }}>
          <Grid
            xs={12}
            sm={5}
            md={3}
            sx={{ position: "relative", margin: "auto" }}
          >
            <img src={CatalogContent1} className="mycatalog_image"></img>
            <CustomButton
              text="Edit"
              type="submit"
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
            <p className="mycatalog_title">T-Shirt For Mens</p>
            <div className="mycatalog_details">
              <p className="mycatalog_price_detail">Stitching Price</p>
              <p className="mycatalog_price">$33.00</p>
            </div>
            <div className="mycatalog_details">
              <p className="mycatalog_price_detail">Reviews</p>
              <Rating name="read-only" value={value} size="small" readOnly />
            </div>
          </Grid>
          <Grid xs={12} sm={5} md={3} sx={{ position: "relative" }}>
            <img src={CatalogContent2} className="mycatalog_image"></img>
            <CustomButton
              text="Edit"
              type="submit"
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
            <p className="mycatalog_title">Bride Dresses</p>
            <div className="mycatalog_details">
              <p className="mycatalog_price_detail">Stitching Price</p>
              <p className="mycatalog_price">$33.00</p>
            </div>
            <div className="mycatalog_details">
              <p className="mycatalog_price_detail">Reviews</p>
              <Rating name="read-only" value={value} size="small" readOnly />
            </div>
          </Grid>
          <Grid
            xs={12}
            sm={5}
            md={3}
            sx={{ position: "relative", margin: "auto" }}
          >
            <img src={CatalogContent3} className="mycatalog_image"></img>
            <CustomButton
              text="Edit"
              type="submit"
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
            <p className="mycatalog_title">Pant Shirt</p>
            <div className="mycatalog_details">
              <p className="mycatalog_price_detail">Stitching Price</p>
              <p className="mycatalog_price">$33.00</p>
            </div>
            <div className="mycatalog_details">
              <p className="mycatalog_price_detail">Reviews</p>
              <Rating name="read-only" value={value} size="small" readOnly />
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Catalog;
