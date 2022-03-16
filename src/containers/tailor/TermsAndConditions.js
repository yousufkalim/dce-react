import React from "react";

import TailorAppBar from "../../components/TailorAppBar";
import Footer from "../../components/Footer";

function TailorTermsAndConditionsScreen(){
  return (
    <div className="container-page-vertical">
      <TailorAppBar
        color="#FDFDFC"
      />
      <div
        className="client_orders_screen_top"
        style={{
          background: "linear-gradient(to right, #EEEEEE , #F7F4ED)"
        }}
      >
        <div className="thiw_qna_standard_screen_row1">
          <p
            style={{
              fontSize: "23px",
              fontWeight: "bold",
              paddingBottom: "1%"
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
              "Design CONFECTIONS ETHIQUES connects tailors looking for new assignments and/or new clients, with natural persons (individuals) and/or legal persons (companies) looking for a service: tailor-made tailoring clothing, decorative items or linens or any other creations "
            ]}
          />
          <QNAStandardListTile 
            question="requiring the services of a designer"
            answers={[
              "Your responsibilities if you breach these Terms",
              "As a seamstress, you are bound by the general conditions of sale below, in the event of non-compliance (and this after 2 warnings from Design CRÉATIONS following dissatisfied customers), Design CONFECTIONS ETHIQUES reserves the right to remove you. definitely from his site.",
              "The seamstress is also required to provide neat and quality work with selected quality materials.The seamstress must reside in France in order to respect the “made in France” label."
            ]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function QNAStandardListTile({
  question,
  answers
}){
  return (
    <div className="thiw_qna_standard_list_tile_container">
      <p
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          paddingBottom: "1%"
        }}
      >
        {question}
      </p>
      {
        answers.map(
          _ =>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#A0A0A0",
              paddingBottom: "5pt"
            }}
          >
            {_}
          </p>
        )
      }
    </div>
  );
}

export default TailorTermsAndConditionsScreen;