import React, { useState, useEffect } from "react";

import ViewCatalogSVG from "../../assets/ViewCatalog.svg";

import ClientAppBar from "../../components/ClientAppBar";

import CustomButton from "../../components/CustomButton";
import { useTranslation } from "react-i18next";

import { useNavigate, useParams } from "react-router-dom";

import Api from "../../api";

import assetsURL from "../../utils/Assets";
import { calculateRating, calculateRatingsCount } from "../../utils/Helpers";

function ClientViewCatalogScreen() {
  const { t } = useTranslation();

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

  const navToOrderFromCatalog = () => {
    navigate(`/order_from_catalog/${params.id}`);
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div className="container-page">
          <ClientAppBar activeTab={0} color="#FFFAF9" />
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
                  {t("Description")}
                </p>
                <p className="view_catalog_screen_row1_column1_text_3">
                  {catalog.description}
                </p>
                <div className="view_catalog_screen_row1_column1_section">
                  <p
                    className="view_catalog_screen_row1_column1_text_2"
                    style={{
                      paddingRight: "10%",
                    }}
                  >
                    {t("Charges")}
                  </p>
                  <p
                    className="view_catalog_screen_row1_column1_text_2"
                    style={{
                      color: "#CC8E9C",
                    }}
                  >
                    $ {catalog.price}
                  </p>
                </div>
                <div className="view_catalog_screen_row1_column1_section">
                  <p
                    className="view_catalog_screen_row1_column1_text_2"
                    style={{
                      paddingRight: "10%",
                    }}
                  >
                    {t("Review & rating")}
                  </p>
                  <p className="view_catalog_screen_row1_column1_text_2">
                    {calculateRating(catalog.ratings)}
                  </p>
                </div>
                <CustomButton
                  text={t("Place Order")}
                  onClick={navToOrderFromCatalog}
                  padding="1.6% 8%"
                  style={{
                    marginTop: "4%",
                    boxShadow: "none",
                  }}
                />
              </div>
              <div className="view_catalog_screen_row1_column2">
                <div className="view_catalog_screen_row1_column2_img">
                  <img
                    style={{
                      height: "60%",
                      width: "60%",
                      objectFit: "cover",
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                    src={
                      catalog.attachment
                        ? assetsURL(catalog.attachment)
                        : ViewCatalogSVG
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ClientViewCatalogScreen;
