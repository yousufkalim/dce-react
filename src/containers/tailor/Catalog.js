import React from "react";

import TailorAppBar from "../../components/TailorAppBar";
import Footer from "../../components/Footer";
import CustomButton from "../../components/CustomButton";
import TailorCatalogListTile from "../../components/TailorCatalogListTile";

import { useNavigate } from "react-router-dom";

const TailorCatalogScreen = () => {

  const navigate = useNavigate();

  const navToCreateCatalog = () => {
    navigate("/create_catalog");
  }

  return (
    <div className="container-page">
      <TailorAppBar color="#ffffff" activeTab={1} />
      <div className="tailor_catalog_screen_row1">
        <div
          className="tailor_catalog_screen_row1_column1"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <p className="tailor_catalog_screen_row1_column1_text">
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
            onClick={navToCreateCatalog}
          />
        </div>
      </div>
      <div className="tailor_catalog_screen_row2">
        <p className="tailor_catalog_screen_row2_text">
          My Catalog
        </p>
        <div
          className="tailor_catalog_screen_row2_list_container"
        >
          <TailorCatalogListTile />
          <TailorCatalogListTile />
          <TailorCatalogListTile />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TailorCatalogScreen;
