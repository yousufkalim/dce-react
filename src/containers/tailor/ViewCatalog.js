import React from "react";

import ViewCatalogSVG from "../../assets/ViewCatalog.svg";

import TailorAppBar from "../../components/TailorAppBar";
import Footer from "../../components/Footer";

import CustomButton from "../../components/CustomButton";

import { useNavigate } from "react-router-dom";

function TailorViewCatalogScreen(){

  const navigate = useNavigate();

  return (
    <div className="container-page">
      <TailorAppBar
        activeTab={1}
        color="#FFFAF9"
      />
      <div
        className="container"
        style={{
          background: "linear-gradient(to right, #EEEEEE , #FCEEE1)",
        }}
      >
        <div className="view_catalog_screen_row1">
          <div className="view_catalog_screen_row1_column1">
            <p className="view_catalog_screen_row1_column1_text_1">
              Bride Dresses
            </p>
            <p className="view_catalog_screen_row1_column1_text_2">
              Description
            </p>
            <p
              className="view_catalog_screen_row1_column1_text_3"
            >
              Wedding dress alterations are a key part of feeling your confident best. After all, every body is unique, so perfecting the fit means you'll be comfortable
            </p>
            <p
              className="view_catalog_screen_row1_column1_text_3"
            >
              When it comes to building your bridal look, wedding dress alterations play a major role. And yet it's easy to underestimate the importance of the process.
            </p>
            <div className="view_catalog_screen_row1_column1_section">
              <p
                className="view_catalog_screen_row1_column1_text_2"
                style={{
                  paddingRight: "10%"
                }}
              >
                Charges
              </p>
              <p
                className="view_catalog_screen_row1_column1_text_2"
                style={{
                  color: "#CC8E9C"
                }}
              >
                $ 33.00
              </p>
            </div>
            <div className="view_catalog_screen_row1_column1_section">
              <p
                className="view_catalog_screen_row1_column1_text_2"
                style={{
                  paddingRight: "10%"
                }}
              >
                Review & rating
              </p>
              <p
                className="view_catalog_screen_row1_column1_text_2"
              >
                4.7
              </p>
            </div>
            <CustomButton
              text="Edit"
              padding="1.6% 8%"
              style={{
                marginTop: "4%",
                boxShadow: "none"
              }}
            />
          </div>
          <div className="view_catalog_screen_row1_column2">
            <div className="view_catalog_screen_row1_column2_img">
              <img style={{ width: "60%" }} src={ViewCatalogSVG} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}



export default TailorViewCatalogScreen;