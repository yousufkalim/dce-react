import React from "react";

import TailorAppBar from "../../components/TailorAppBar";
import Terms from "../../assets/terms.png";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";

function TailorTermsAndConditionsScreen() {
  const { t } = useTranslation();

  return (
    <div className="container-page-vertical">
      <TailorAppBar color="#FDFDFC" />
      <div
        className="client_orders_screen_top"
        style={{
          background: "linear-gradient(to right, #EEEEEE , #F7F4ED)",
        }}
      >
        <div className="thiw_qna_standard_screen_row1">
          <p
            style={{
              fontSize: "23px",
              fontWeight: "bold",
              paddingBottom: "1%",
            }}
          >
            Terms & Conditions
          </p>
        </div>
        <div className="thiw_qna_standard_screen_row2">
          <QNAStandardListTile
            question="General informations"
            answers={[
              "Design CONFECTIONS ETHIQUES is an online platform (with free registration) allowing independent designers to unearth their customers in whole or in part",
              "Design CONFECTIONS ETHIQUES connects tailors looking for new assignments and/or new clients, with natural persons (individuals) and/or legal persons (companies) looking for a service: tailor-made tailoring clothing, decorative items or linens or any other creations ",
            ]}
          />
          <QNAStandardListTile
            question="requiring the services of a designer"
            answers={[
              "Your responsibilities if you breach these Terms",
              "As a seamstress you are bound by the general conditions of sale below, in the event of non-compliance (and this after 2 warnings from Design CRÉATIONS following dissatisfied customers), Design CONFECTIONS ETHIQUES reserves the right to remove you. definitely from his site.",
              "The seamstress is also required to provide neat and quality work with selected quality materials.The seamstress must reside in France in order to respect the “made in France” label.",
            ]}
          />
          <QNAStandardListTile
            question="Orders"
            answers={[
              "Orders are made directly by the customer via the Design CONFECTIONS ETHIQUES site, where the latter has selected the various choices offered to him as to his creation (type, fabric, deadline, etc.). Then his creation is routed to the professional interface of the seamstresses where various quotes will be offered to him.",
            ]}
          />
          <QNAStandardListTile
            question="Delivery"
            answers={[
              "The customer has the choice between various delivery times: 2 weeks, 1 month or to enter a delivery deadline. He can tick the indifferent box if he is not in too much of a hurry.",
            ]}
          />
          <QNAStandardListTile
            question="Payment"
            answers={[
              "The customer pays his entire order (+ delivery costs) directly online. The seamstress is paid (24 hours later) up to 30% (order - 20% commission) at the start of the mission and 70% (order - 20% commission) 48 hours after the end of the mission.",
            ]}
          />
          <QNAStandardListTile
            question="Cancellation of an order/return procedure"
            answers={[
              "The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.",
            ]}
          />
          <QNAStandardListTile
            question="Cancellation of an order/return procedure"
            answers={[
              "The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.",
            ]}
          />
          <QNAStandardListTile
            question="Cancellation of contract"
            answers={[
              "The service provider (in this case the seamstress) is free to suspend (due to illness, maternity or other), or to terminate the contract that binds it with Design CONFECTIONS ETHIQUES, only if it has no mission In progress. It must inform Design CONFECTIONS ETHIQUES as soon as possible.",
            ]}
          />
        </div>
        <img src={Terms} className="termsimg" />
      </div>
      <Footer />
    </div>
  );
}

function QNAStandardListTile({ question, answers }) {
  return (
    <div className="thiw_qna_standard_list_tile_container">
      <p
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          paddingBottom: "1%",
        }}
      >
        {question}
      </p>
      {answers.map((_) => (
        <p
          style={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#A0A0A0",
            paddingBottom: "5pt",
          }}
        >
          {_}
        </p>
      ))}
    </div>
  );
}

export default TailorTermsAndConditionsScreen;
