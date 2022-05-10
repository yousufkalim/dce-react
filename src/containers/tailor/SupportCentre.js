import React from "react";
import TailorAppBar from "../../components/TailorAppBar";
import UserSVG from "../../assets/supportpic.png";
import { useTranslation } from "react-i18next";
import Footer from '../../components/Footer'

function SupportCentre() {
  const { t } = useTranslation();

  let data = [
    {
      name: "Kurta Shalwar",
      description: t(
        "In just a few clicks, Design Créations allows you to find one-off assignments in the production and manufacture of clothing, decorative elements or household linen.In just a few clicks, Design Créations allows you to find one-off assignments "
      ),
      review: t("Review"),
    },
    {
      name: t("Bride Dress"),
      description: t(
        "In just a few clicks, Design Créations allows you to find one-off assignments in the production and manufacture of clothing, decorative elements or household linen.In just a few clicks, Design Créations allows you to find one-off assignments "
      ),
      review: t("Pending"),
    },
    {
      name: "T-Shirt",
      description: t(
        "In just a few clicks, Design Créations allows you to find one-off assignments in the production and manufacture of clothing, decorative elements or household linen.In just a few clicks, Design Créations allows you to find one-off assignments "
      ),
      review: t("Completed"),
    },
    {
      name: "Trouser",
      description: t(
        "In just a few clicks, Design Créations allows you to find one-off assignments in the production and manufacture of clothing, decorative elements or household linen.In just a few clicks, Design Créations allows you to find one-off assignments "
      ),
      review: t("Completed"),
    },
  ];
  return (
    <div className="container-page-vertical">
      <TailorAppBar color="#FDFDFC" />
      <div
        className="client_orders_screen_top"
        style={{
          background: "linear-gradient(to right, #EEEEEE , #FDF3EA)",
        }}
      >
        <div className="thiw_qna_standard_screen_row1">
          <h1 className="supportheading">{t("Support Center")}</h1>
          <p className="suppordesc">
            {t(
              "In just a few clicks, Design Créations allows you to find one-off assignments in the production and manufacture of clothing, decorative elements or household linen."
            )}
          </p>
        </div>
        {data.map((item) => (
          <Support item={item} />
        ))}
      </div>
      <Footer/>
    </div>
    
  );
}

function Support({ item }) {
  const { t } = useTranslation();
  return (
    <div className="supportmainDiv">
      <div className="supportcol1">
        <img src={UserSVG} style={{ width: "10%", padding: "25px 25px" }} />

        <div className="supportName">
          <h3 className="supportnameh3">{item.name}</h3>
          <p className="headingp">{item.description}</p>
        </div>

        <div className="supportReview">
          <button className="chatBtn">{t("Chat With Us")}</button>
          <h1 className="supportR">{item.review}</h1>
        </div>
      </div>
    </div>
  );
}

export default SupportCentre;
