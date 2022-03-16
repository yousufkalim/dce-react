import React from "react";

import TailorAppBar from "../../components/TailorAppBar";
import Footer from "../../components/Footer";

function TailorHowItWorksScreen(){
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
            HOW ITS WORKS ?
          </p>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#A0A0A0",
              paddingBottom: "5pt"
            }}
          >
            In just a few clicks, Design Créations allows you to find one-off assignments in
          </p>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#A0A0A0",
              paddingBottom: "5pt"
            }}
          >
            in the production and manufacture of clothing, decorative elements.
          </p>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#A0A0A0"
            }}
          >
            or household linen.
          </p>
        </div>
        <div className="thiw_qna_standard_screen_row2">
          <QNAStandardListTile 
            question="1 . Find the right clients for you"
            answer="Design creation puts you in touch with potential customers suited to your profile"
          />
          <QNAStandardListTile 
            question="2 . Focus on the essentials"
            answer="Design creation manages all the formalities relating to the provision of services"
          />
          <QNAStandardListTile 
            question="3 . Post your ad (offer) in just a few clicks"
            answer="Post your add in 3 steps"
          />
          <QNAListListTile
            question="Seamstress selection based on the following criteria:"
            answers={[
              "Reliability / Seriousness",
              "Rating on the site",
              "Customers' opinion",
              "Tailoring time",
              "Passionate",
              "Enthusiastic",
              "Available",
              "Skills",
              "Know how",
            ]}
          />
          <QNAListListTile
            question="General skills"
            answers={[
              "Know and master the techniques of making a garment (cutting, stitching, etc.)",
              "Have knowledge of the different fabrics, materials, colors",
              "Make drawings, sketches" ,
              "Operate the right machinery",
              "Prepare detailed quotes",
              "Meet deadlines",
              "Have knowledge of management",
              "Know how to handle computers, in particular the Design CREATION site",
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
  answer
}){
  return (
    <div className="thiw_qna_standard_list_tile_container">
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#CC8E9C",
          paddingBottom: "1%"
        }}
      >
        {question}
      </p>
      <p
        style={{
          fontSize: "16px",
          fontWeight: "500",
          color: "#A0A0A0"
        }}
      >
        {answer}
      </p>
    </div>
  );
}

function QNAListListTile({
  question,
  answers
}){
  return (
    <div className="thiw_qna_standard_list_tile_container">
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#CC8E9C",
          marginBottom: "1%"
        }}
      >
        {question}
      </p>
      <ul>
        {
          answers.map(
            _ =>
            <li
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#A0A0A0",
                marginBottom: "5pt"
              }}
            >
              {_}
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default TailorHowItWorksScreen;