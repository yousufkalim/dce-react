import React from "react";
import CustomButton from "../../components/CustomButton";
import Checkbox from "@mui/material/Checkbox";
import { useTranslation } from "react-i18next";
const OrderAcceptForm = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="orderform-container">
        <div>
          <p className="terms">
            I also understand that any incomplete address, altered date of birth, use of an identity different from mine, or any
            falsified document will lead to the immediate and definitive suspension of my account and that I will therefore no
            longer be able to become a service provider on DCE.{" "}
          </p>
        </div>
        <div style={{ marginTop: "5%" }} className="checkbox-text-container">
          <Checkbox
            sx={{ padding: "0px" }}
            style={{
              transform: "scale(0.8)",
              color: "#CC8E9C",
            }}
            defaultChecked
          />
          <p className="declaration">
            I declare on my honor that the information provided is accurate, as well as the identity document attached above is
            authentic, belongs to me, and meets all the required conditions
          </p>
        </div>
        <div className="btn-container">
          {" "}
          <CustomButton
            text={t("I agree")}
            padding="1.3% 2.5%"
            style={{
              marginBottom: "10%",
              textAlign: "center",
              boxShadow: "none",
              marginTop: "3%",
              borderRadius: "15px",
              fontSize: "20px",
            }}
          />{" "}
        </div>
      </div>
    </>
  );
};

export default OrderAcceptForm;
