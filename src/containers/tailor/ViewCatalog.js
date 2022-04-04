import React, { useState, useEffect } from "react";

import ViewCatalogSVG from "../../assets/ViewCatalog.svg";

import TailorAppBar from "../../components/TailorAppBar";
import Footer from "../../components/Footer";

import CustomButton from "../../components/CustomButton";

import { useNavigate, useParams } from "react-router-dom";

import Api from "../../api";

function TailorViewCatalogScreen(){

  const navigate = useNavigate();
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [catalog, setCatalog] = useState(null);

  useEffect(() => {
    getCatalog();
  }, []);

  const getCatalog = async () => {
    let response;
    try {
      response = await Api("get", `/catalogs/${params.id}`);
      const catalogData = response.data.catalog;
      setCatalog(catalogData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

  const navToEditCatalog = () => {
    navigate(`/edit_catalog/${params.id}`);
  }

  return (
    <>
    {
      isLoading ?
      <></> :
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
                {catalog.name}
              </p>
              <p className="view_catalog_screen_row1_column1_text_2">
                Description
              </p>
              <p
                className="view_catalog_screen_row1_column1_text_3"
              >
                {catalog.description}
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
                  $ {catalog.price}
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
                  {catalog.rating.value}
                </p>
              </div>
              <CustomButton
                text="Edit"
                onClick={navToEditCatalog}
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
    }
    </>
  );
}



export default TailorViewCatalogScreen;