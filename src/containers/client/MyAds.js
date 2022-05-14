import React, { useState, useEffect } from "react";

import ClientAppBar from "../../components/ClientAppBar";
import Footer from "../../components/Footer";
import CustomButton from "../../components/CustomButton";
import CustomDatePicker from "../../components/CustomDatePicker";
import CustomTimePicker from "../../components/CustomTimePicker";
import NoOrders from "../../components/NoOrders";
import UserSVG from "../../assets/dummy.jpeg";
import { Checkbox, Modal } from "@mui/material";
import { useTranslation } from "react-i18next";

import Collapse from "@mui/material/Collapse";

import { useNavigate } from "react-router-dom";

import { getUser } from "../../utils/Auth";
import Api from "../../api";
import { toast } from "react-toastify";
import assetsURL from "../../utils/Assets";
import { calculateRating, calculateRatingsCount } from "../../utils/Helpers";

function ClientAdsScreen() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [ads, setAds] = useState([]);
  const user = getUser();

  useEffect(() => {
    getAds();
  }, []);

  const getAds = async () => {
    let response;
    try {
      response = await Api("post", `/orders/byQuery`, {
        client: user._id,
        type: "ad",
        status: "pending",
      });
      const adsData = response.data.orders;
      setAds(adsData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };
  const getSessionUrl = async (quote, line_items) => {
    try {
      let id = quote._id;
      let response = await Api("post", `/payments/Checkout`, {
        line_items: line_items,
        metaData: { id },
      });
      window.location = response.data.url;
    } catch (e) {
      console.trace(e);
    }
  };

  const acceptQuote = async (event, quote) => {
    event.preventDefault();
    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);
      let line_items = [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Order",
            },
            unit_amount: quote.price * 100,
          },
          quantity: 1,
        },
      ];
      getSessionUrl(quote, line_items);
    } catch (e) {
      console.trace(e);
    }
    setIsProcessing(false);
  };

  const rejectQuote = async (event, id) => {
    event.preventDefault();

    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = {
        quote: id,
      };

      response = await Api("post", "/quotes/reject", body);

      if (response?.data?.success) {
        toast.success(response.data.message);
        getAds();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  const navToCreateAd = () => {
    navigate("/create_ad");
  };
  return (
    <>
      <div className="container-page-vertical">
        <ClientAppBar activeTab={2} color="#FCFCFC" />
        <div
          className="client_orders_screen_top"
          style={{
            background:
              "linear-gradient(to left top, #F2DCD7 0%, #F3E0E1 50%, #F2DFE2 100%), linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))",
          }}
        >
          <div className="client_ads_screen_row1">
            <p className="client_orders_screen_row1_text">{t("Ads")}</p>
            <CustomButton
              text={t("Place New Ad")}
              padding="8px 20px"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#000000",
                boxShadow: "none",
                fontSize: "12px",
                fontWeight: "600",
              }}
              onClick={navToCreateAd}
            />
          </div>
          <div className="client_ads_screen_row2">
            {ads.map((_) => (
              <AdListTile {..._} />
            ))}
          </div>
          {ads.length === 0 ? (
            <>
              {/* <div
                style={{
                  marginTop: "10%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {t("No Orders")}
              </div> */}
              <NoOrders RenderText="No Ads Yet" />
            </>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
}

function AdListTile(props) {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [expanded, setExpanded] = React.useState(false);

  const navToEditAd = () => {
    navigate(`/edit_ad/${props._id}`);
  };

  return (
    <div className="cas_ad_list_tile_container_collapsible">
      <div
        className="cas_ad_list_tile_container"
        onClick={() => setExpanded(!expanded)}
      >
        <div
          className="cas_ad_list_tile_column1"
          style={{
            padding: "3%",
          }}
        >
          <div
            className="cas_ad_list_tile_column1_item"
            style={{
              padding: "2% 0",
            }}
          >
            <p className="cas_ad_list_tile_column1_item_key">
              {t("Name of Creation")}
            </p>
            <p
              className="cas_ad_list_tile_column1_item_value"
              style={{
                fontWeight: "900",
              }}
            >
              {props.name}
            </p>
          </div>
          <div
            className="cas_ad_list_tile_column1_item cas_ad_list_tile_column1_item_borders"
            style={{
              padding: "2% 0",
            }}
          >
            <p className="cas_ad_list_tile_column1_item_key">{t("Ad for")}</p>
            <p className="cas_ad_list_tile_column1_item_value">
              {props.category}
            </p>
          </div>
          <div
            className="cas_ad_list_tile_column1_item"
            style={{
              padding: "2% 0",
            }}
          >
            <p className="cas_ad_list_tile_column1_item_key">
              {t("Delivery Date")}
            </p>
            <p className="cas_ad_list_tile_column1_item_value">
              {new Date(props.delivery.date).toLocaleDateString("en-US")}
            </p>
          </div>
        </div>
        <div className="cas_ad_list_tile_column2">
          <p className="cas_ad_list_tile_column2_title">{t("min")}</p>
          <p className="cas_ad_list_tile_column2_description">{`${props.budget.min_price}€`}</p>
          <p className="cas_ad_list_tile_column2_title">{t("max")}</p>
          <p className="cas_ad_list_tile_column2_description">{`${props.budget.max_price}€`}</p>
          <p
            style={{
              fontSize: "16px",
              color: "#CC8E9C",
            }}
          >
            {t("Range")}
          </p>
        </div>
        <div className="cas_ad_list_tile_column2">
          <p
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              paddingBottom: "2.5%",
            }}
          >
            {props.quotes.length}
          </p>
          <p style={{ fontSize: "12px", fontWeight: "200", color: "#CC8E9C" }}>
            {t("Responses")}
          </p>
        </div>
        <div className="cas_ad_list_tile_column4">
          <p
            onClick={navToEditAd}
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#CC8E9C",
              cursor: "pointer",
            }}
          >
            {t("Edit")}
          </p>
        </div>
      </div>
      <Collapse
        sx={{ paddingBottom: "2%" }}
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        {props?.quotes?.map((_) => (
          <AdQuoteListTile order={props} quote={_} />
        ))}
      </Collapse>
    </div>
  );
}

function AdQuoteListTile(props) {
  const { t } = useTranslation();
  const rating = calculateRating(props.quote.tailor?.ratings);
  const ratingsCount = calculateRatingsCount(props.quote.tailor?.ratings);

  const navigate = useNavigate();

  const [isAcceptQuoteModal, setIsAcceptQuoteModal] = useState(false);
  const [isRejectQuoteModal, setIsRejectQuoteModal] = useState(false);

  const handleIsAcceptQuoteModalClose = (e) => {
    setIsAcceptQuoteModal(false);
  };

  const handleIsAcceptQuoteModalOpen = (e) => {
    e.stopPropagation();
    setIsAcceptQuoteModal(true);
  };

  const handleIsRejectQuoteModalClose = (e) => {
    setIsRejectQuoteModal(false);
  };

  const handleIsRejectQuoteModalOpen = (e) => {
    e.stopPropagation();
    setIsRejectQuoteModal(true);
  };

  const acceptQuote = async (e) => {
    handleIsAcceptQuoteModalOpen(e);
  };

  const rejectQuote = async (e) => {
    handleIsRejectQuoteModalOpen(e);
  };

  const navToChat = () => {
    navigate(`/chat`, { state: { directUser: props.quote.tailor } });
  };

  return (
    <div className="cas_quote_list_tile_container">
      <div className="cas_quote_list_tile_column1">
        <div
          className="cas_quote_list_tile_column1_img"
          style={{
            paddingBottom: "5%",
          }}
        >
          <img
            className="image_container"
            style={{
              height: "65pt",
              width: "65pt",
            }}
            src={
              props.quote.tailor.avatar
                ? assetsURL(props.quote.tailor.avatar)
                : UserSVG
            }
          />
        </div>
      </div>
      <div
        className="cas_quote_list_tile_column1"
        style={{
          padding: "3%",
          alignItems: "flex-start",
        }}
      >
        <p
          className="cas_quote_list_tile_column1_title_text"
          style={{
            paddingBottom: "10px",
          }}
        >
          {props.quote?.tailor?.name}
        </p>
        <p className="cas_quote_list_tile_column1_description_text">
          {props.quote?.tailor?.speciality}
        </p>
      </div>
      <div
        className="cas_quote_list_tile_column1"
        style={{
          padding: "3%",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            color: "#A0A0A0",
          }}
        >
          {/* {rating}({ratingsCount}) */}
        </p>
      </div>
      <div className="cas_quote_list_tile_column1">
        <p
          style={{
            fontSize: "12px",
            fontWeight: "200",
            color: "#A0A0A0",
            paddingBottom: "3%",
          }}
        >
          {t("Offer")}
        </p>
        <p
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >{`${props.quote.price}€`}</p>
      </div>
      <div
        className="cas_quote_list_tile_column5"
        style={{
          marginRight: "5vw",
        }}
      >
        <div className="cas_quote_list_tile_column5_buttons">
          <CustomButton
            text={t("Accept")}
            onClick={(e) => acceptQuote(e, props)}
            style={{
              boxShadow: "none",
            }}
          />
          <p
            style={{
              fontSize: "13px",
              fontWeight: "900",
              marginTop: "10px",
              cursor: "pointer",
            }}
            onClick={rejectQuote}
          >
            {t("Discard")}
          </p>
        </div>
      </div>
      <div className="cas_quote_list_tile_column1">
        <p
          style={{ fontSize: "14px", fontWeight: "900", cursor: "pointer" }}
          onClick={navToChat}
        >
          {t("Chat Here")}
        </p>
      </div>
      <Modal
        open={isAcceptQuoteModal}
        onClose={handleIsAcceptQuoteModalClose}
        aria-labelledby="Accept Quote"
        onBackdropClick="false"
      >
        <AcceptQuoteModal
          order={props.order}
          quote={props.quote}
          handleClose={handleIsAcceptQuoteModalClose}
        />
      </Modal>
      <Modal
        open={isRejectQuoteModal}
        onClose={handleIsRejectQuoteModalClose}
        aria-labelledby="Reject Quote"
        onBackdropClick="false"
      >
        <RejectQuoteModal
          order={props.order}
          quote={props.quote}
          handleClose={handleIsRejectQuoteModalClose}
        />
      </Modal>
    </div>
  );
}

const AcceptQuoteModal = (props) => {
  const { t } = useTranslation();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const [isScheduleCallModal, setIsScheduleCallModal] = useState(false);

  const handleIsScheduleCallModalClose = (e) => {
    setIsScheduleCallModal(false);
  };

  const handleIsScheduleCallModalOpen = (e) => {
    e.stopPropagation();
    setIsScheduleCallModal(true);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.order.measurements.type == "static") {
      handleStaticMeasurements();
    } else if (props.order.measurements.type == "tape") {
      handleTapeMeasurements();
    } else if (props.order.measurements.type == "call") {
      handleCallMeasurements(event);
    } else {
      // TODO: This should never happen.
    }
  };

  const handleStaticMeasurements = async () => {
    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);
      //Stripe
      const line_items = [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Order",
            },
            unit_amount: props.quote.price * 100,
          },
          quantity: 1,
        },
      ];
      getSessionUrl(props.quote, line_items);
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  const getSessionUrl = async (quote, line_items) => {
    try {
      const id = quote._id;
      const type = "static";
      const response = await Api("post", "/payments/Checkout", {
        line_items: line_items,
        metaData: { id, type },
      });
      window.location = response.data.url;
    } catch (e) {
      console.trace(e);
    }
  };

  const handleTapeMeasurements = () => {
    props.handleClose();
    navigate("/tape_measurement", {
      state: { order: props.order, quote: props.quote },
    });
  };

  const handleCallMeasurements = async (e) => {
    handleIsScheduleCallModalOpen(e);
  };

  const navToOrders = () => {
    props.handleClose();
    navigate("/orders");
  };

  return (
    <div
      className="tqs_sqm_container"
      style={{
        height: "40vh",
      }}
    >
      <p
        style={{
          color: "#ACACAC",
          fontSize: "16px",
          fontWeight: "100",
          marginBottom: "5%",
        }}
      >
        {t(
          "I also understand that any incomplete address, altered date of birth, use of an identity different from mine, or any falsified document will lead to the immediate and definitive suspension of my account and that I will therefore no longer be able to become a service provider on DCE."
        )}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginBottom: "5%",
        }}
      >
        <Checkbox
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <p
          style={{
            fontSize: "13px",
            fontWeight: "100",
          }}
        >
          {t(
            "I declare on my honor that the information provided is accurate, as well as the identity document attached above is authentic, belongs to me, and meets all the required conditions."
          )}
        </p>
      </div>
      <div className="tvqs_sq_buttons">
        <CustomButton
          text="Cancel"
          style={{
            boxShadow: "none",
            marginRight: "10pt",
          }}
          onClick={props.handleClose}
        />
        <CustomButton
          text={t("I agree")}
          style={{
            boxShadow: "none",
          }}
          onClick={handleSubmit}
        />
      </div>
      <Modal
        open={isScheduleCallModal}
        onClose={handleIsScheduleCallModalClose}
        aria-labelledby="Schedule Call"
        onBackdropClick="false"
      >
        <ScheduleCallModal
          order={props.order}
          quote={props.quote}
          handleClose={handleIsScheduleCallModalClose}
        />
      </Modal>
    </div>
  );
};

const ScheduleCallModal = (props) => {
  const { t } = useTranslation();
  const [isProcessing, setIsProcessing] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (isProcessing) {
      return;
    }

    let response;

    try {
      const parsedDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        time.getHours(),
        time.getMinutes(),
        0,
        0
      );

      const body = {
        quote: props.quote._id,
        call_at: parsedDate,
      };
      setIsProcessing(true);
      const call = body.call_at;
      let line_items = [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Call Payment",
            },
            unit_amount: 8 * 100,
          },
          quantity: 1,
        },
      ];
      getTapeUrl(props.quote, line_items, call);
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  const getTapeUrl = async (quote, line_items, call) => {
    try {
      let id = quote._id;
      let type = "call";
      let response = await Api("post", "/payments/Checkout", {
        line_items: line_items,
        metaData: { id, type, call },
      });
      window.location = response.data.url;
    } catch (e) {
      console.trace(e);
    }
  };

  const navToOrders = () => {
    props.handleClose();
    navigate("/orders");
  };

  return (
    <div
      className="tqs_sqm_container"
      style={{
        height: "40vh",
      }}
    >
      <p
        style={{
          fontSize: "20px",
          fontWeight: "900",
          marginBottom: "5%",
        }}
      >
        {t("Book call (on schedule) for measurement")}
      </p>
      <div
        className="pa_profile_section_input_container"
        style={{
          borderRadius: "20px",
          marginTop: "2%",
          marginBottom: "1%",
        }}
      >
        <div className="pa_profile_section_input_label">
          <p className="pa_profile_section_input_text">Set Date</p>
        </div>
        <div className="pa_profile_section_input_input">
          <CustomDatePicker
            disablePast
            labelStyle={{
              display: "none",
            }}
            value={date}
            onChange={(e) => setDate(e)}
          />
        </div>
      </div>
      <div
        className="pa_profile_section_input_container"
        style={{
          borderRadius: "20px",
          marginTop: "2%",
          marginBottom: "1%",
        }}
      >
        <div className="pa_profile_section_input_label">
          <p className="pa_profile_section_input_text">Set a Time</p>
        </div>
        <div className="pa_profile_section_input_input">
          <CustomTimePicker
            labelStyle={{
              display: "none",
            }}
            value={time}
            onChange={(e) => setTime(e)}
          />
        </div>
      </div>
      <div
        className="tvqs_sq_buttons"
        style={{
          marginTop: "2%",
        }}
      >
        <CustomButton
          text="Cancel"
          style={{
            boxShadow: "none",
            marginRight: "10pt",
          }}
          onClick={props.handleClose}
        />
        <CustomButton
          text={t("I agree")}
          style={{
            boxShadow: "none",
          }}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

const RejectQuoteModal = (props) => {
  const { t } = useTranslation();
  const [isProcessing, setIsProcessing] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = {
        quote: props.quote._id,
      };

      response = await Api("post", "/quotes/reject", body);

      if (response?.data?.success) {
        toast.success(response.data.message);
        navToAds();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  const navToAds = () => {
    props.handleClose();
    navigate("/my_ads");
  };

  return (
    <div
      className="tqs_sqm_container"
      style={{
        height: "40vh",
      }}
    >
      <p
        style={{
          color: "#ACACAC",
          fontSize: "16px",
          fontWeight: "100",
          marginBottom: "5%",
        }}
      >
        Voulez-vous vraiment supprimer ce devis de paiement ?
      </p>
      <div className="tvqs_sq_buttons">
        <CustomButton
          text="Cancel"
          style={{
            boxShadow: "none",
            marginRight: "10pt",
          }}
          onClick={props.handleClose}
        />
        <CustomButton
          text={t("I agree")}
          style={{
            boxShadow: "none",
          }}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ClientAdsScreen;
