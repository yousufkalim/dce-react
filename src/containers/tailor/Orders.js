import React, { useState, useEffect } from "react";

import UserSVG from "../../assets/dummy.jpeg";
import UploadSVG from "../../assets/upload.svg";

import TailorAppBar from "../../components/TailorAppBar";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";

import { Modal } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { getUser } from "../../utils/Auth";
import Api from "../../api";

import { toast } from "react-toastify";

import assetsURL from "../../utils/Assets";
import { calculateRating, calculateRatingsCount } from "../../utils/Helpers";

import * as FormValidations from "../../utils/Validations";

function TailorOrdersScreen() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [ordersRequest, setOrdersRequest] = useState([]);
  const [ordersInProgress, setOrdersInProgress] = useState([]);
  const [ordersCompleted, setOrdersCompleted] = useState([]);
  const [ordersDiscarded, setOrdersDiscarded] = useState([]);

  const user = getUser();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await getOrders();
  };

  const getOrders = async () => {
    let response;
    try {
      response = await Api("post", `/orders/byQuery`, { tailor: user._id });
      const ordersData = response.data.orders;
      const _ordersRequest = ordersData.filter((_) => _.type == "direct" && _.status == "pending").splice(-4);
      setOrdersRequest(_ordersRequest);
      const _ordersInProgress = ordersData.filter((_) => _.status == "in_progress").splice(-4);
      setOrdersInProgress(_ordersInProgress);
      const _ordersCompleted = ordersData.filter((_) => _.status == "completed").splice(-4);
      setOrdersCompleted(_ordersCompleted);
      const _ordersDiscarded = ordersData.filter((_) => _.status == "discarded").splice(-4);
      setOrdersDiscarded(_ordersDiscarded);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
    return;
  };

  const acceptOrder = async (event, id) => {
    event.preventDefault();
    event.stopPropagation();

    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = {
        id: id,
      };

      response = await Api("post", "/orders/accept", body);

      if (response?.data?.success) {
        toast.success(response.data.message);
        loadData();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  const discardOrder = async (event, id) => {
    event.preventDefault();
    event.stopPropagation();

    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = {
        id: id,
      };

      response = await Api("post", "/orders/discard", body);

      if (response?.data?.success) {
        toast.success(response.data.message);
        loadData();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  const navToViewOrder = (_) => {
    navigate(`/view_order/${_}`);
  };

  return (
    <>
      <div className="container-page-vertical">
        <TailorAppBar activeTab={0} color="#FCFCFC" />
        <div
          className="tailor_orders_screen_top"
          style={{
            background: "linear-gradient(to right, #EEEEEE , #FDF3EA)",
          }}
        >
          <div className="client_orders_screen_row1">
            <p className="client_orders_screen_row1_text">{t("Orders Requests")}</p>
            <CustomButton text={t("See All Requests")} />
          </div>
          <div className="client_orders_screen_row2">
            {ordersRequest.map((_) => (
              <OrderRequestListTile
                order={_}
                acceptOrder={acceptOrder}
                discardOrder={discardOrder}
                navToViewOrder={navToViewOrder}
              />
            ))}
          </div>
        </div>
        <div
          className="tailor_orders_screen_top"
          style={{
            background: "linear-gradient(to right, #EEEEEE , #FDF3EA)",
          }}
        >
          <div className="tailor_orders_screen_row1">
            <p className="client_orders_screen_row1_text">{t("In Progress")}</p>
            <CustomButton text={t("See All Orders")} />
          </div>
          <div className="client_orders_screen_row2">
            {ordersInProgress.map((_) => (
              <OrderInProgressListTile
                order={_}
                quote={_.quotes.filter((__) => __.status == "accepted")[0]}
                discardOrder={discardOrder}
                navToViewOrder={navToViewOrder}
              />
            ))}
          </div>
        </div>
        <div
          className="tailor_orders_screen_top"
          style={{
            background: "linear-gradient(to right, #EEEEEE , #FDF3EA)",
          }}
        >
          <div className="tailor_orders_screen_row1">
            <p className="client_orders_screen_row1_text">{t("Completed")}</p>
            <CustomButton text={t("See All Orders")} />
          </div>
          <div className="client_orders_screen_row2">
            {ordersCompleted.map((_) => (
              <OrderCompletedListTile
                order={_}
                quote={_.quotes.filter((__) => __.status == "accepted")[0]}
                navToViewOrder={navToViewOrder}
              />
            ))}
          </div>
        </div>
        <div
          className="tailor_orders_screen_top"
          style={{
            background: "linear-gradient(to right, #EEEEEE , #FDF3EA)",
          }}
        >
          <div className="tailor_orders_screen_row1">
            <p className="client_orders_screen_row1_text">{t("Discarded")}</p>
            <CustomButton text={t("See All Orders")} />
          </div>
          <div className="client_orders_screen_row2">
            {ordersDiscarded.map((_) => (
              <OrderDiscardedListTile
                order={_}
                quote={_.quotes.filter((__) => __.status == "accepted")[0]}
                navToViewOrder={navToViewOrder}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

function OrderRequestListTile(props) {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const navToChat = () => {
    navigate(`/chat`, { state: { directUser: props.order.client } });
  };

  return (
    <div className="cos_order_list_tile_container" onClick={() => props.navToViewOrder(props.order._id)}>
      <div className="cos_order_list_tile_column1">
        <div
          className="cos_order_list_tile_column1_img"
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
            src={props.order.client.avatar ? assetsURL(props.order.client.avatar) : UserSVG}
          />
        </div>
        <p className="cos_order_list_tile_column1_title_text">{props.order.client.name}</p>
      </div>
      <div
        className="tos_order_list_tile_column2"
        style={{
          padding: "3%",
        }}
      >
        <div
          className="cos_order_list_tile_column2_item"
          style={{
            padding: "2% 0",
          }}
        >
          <p className="cos_order_list_tile_column2_item_key">{t("Order")}</p>
          <p className="cos_order_list_tile_column2_item_value">{props.order.name}</p>
        </div>
        <div
          className="cos_order_list_tile_column2_item cos_order_list_tile_column2_item_borders"
          style={{
            padding: "2% 0",
          }}
        >
          <p className="cos_order_list_tile_column2_item_key">{t("Order Date")}</p>
          <p className="cos_order_list_tile_column2_item_value">{new Date(props.order.createdAt).toLocaleDateString("en-gb")}</p>
        </div>
        <div
          className="cos_order_list_tile_column2_item"
          style={{
            padding: "2% 0",
          }}
        >
          <p className="cos_order_list_tile_column2_item_key">{t("Delivery Date")}</p>
          <p className="cos_order_list_tile_column2_item_value">
            {new Date(props.order.delivery.date).toLocaleDateString("en-gb")}
          </p>
        </div>
      </div>
      <div className="cos_order_list_tile_column1">
        <p style={{ fontSize: "20px", fontWeight: "bold", paddingBottom: "10%" }}>
          {props.order.budget.min_price ?? props.order.budget.max_price}$
        </p>
        <p style={{ fontSize: "12px", fontWeight: "200", color: "#CC8E9C" }}>{t("Bill")}</p>
      </div>
      <div className="tos_order_list_tile_column4">
        <div className="tos_order_list_tile_column4_buttons">
          <CustomButton
            text={t("Accept")}
            onClick={(e) => props.acceptOrder(e, props.order._id)}
            style={{
              boxShadow: "none",
              marginBottom: "10px",
            }}
          />
          <CustomButton
            text={t("Discard")}
            style={{
              boxShadow: "none",
              backgroundColor: "transparent",
              color: "#CC8E9C",
            }}
            onClick={(e) => props.discardOrder(e, props.order._id)}
          />
        </div>
        <p style={{ fontSize: "16px", fontWeight: "900", cursor: "pointer" }} onClick={navToChat}>
          {t("Chat Here")}
        </p>
      </div>
    </div>
  );
}

function OrderInProgressListTile(props) {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const navToChat = () => {
    navigate(`/chat`, { state: { directUser: props.order.client } });
  };

  return (
    <div className="cos_order_list_tile_container" onClick={() => props.navToViewOrder(props.order._id)}>
      <div className="cos_order_list_tile_column1">
        <div
          className="cos_order_list_tile_column1_img"
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
            src={props.order.client.avatar ? assetsURL(props.order.client.avatar) : UserSVG}
          />
        </div>
        <p className="cos_order_list_tile_column1_title_text">{props.order.client.name}</p>
      </div>
      <div
        className="tos_order_list_tile_column2"
        style={{
          padding: "3%",
        }}
      >
        <div
          className="cos_order_list_tile_column2_item"
          style={{
            padding: "2% 0",
          }}
        >
          <p className="cos_order_list_tile_column2_item_key">{t("Order")}</p>
          <p className="cos_order_list_tile_column2_item_value">{props.order.name}</p>
        </div>
        <div
          className="cos_order_list_tile_column2_item cos_order_list_tile_column2_item_borders"
          style={{
            padding: "2% 0",
          }}
        >
          <p className="cos_order_list_tile_column2_item_key">{t("Order Date")}</p>
          <p className="cos_order_list_tile_column2_item_value">{new Date(props.order.createdAt).toLocaleDateString("en-gb")}</p>
        </div>
        <div
          className="cos_order_list_tile_column2_item"
          style={{
            padding: "2% 0",
          }}
        >
          <p className="cos_order_list_tile_column2_item_key">{t("Delivery Date")}</p>
          <p className="cos_order_list_tile_column2_item_value">
            {new Date(props.order.delivery.date).toLocaleDateString("en-gb")}
          </p>
        </div>
      </div>
      <div className="cos_order_list_tile_column1">
        <p style={{ fontSize: "20px", fontWeight: "bold", paddingBottom: "10%" }}>
          {`${props?.quote?.price ?? props?.order?.budget?.min_price ?? "N/A"}€`}
        </p>
        <p style={{ fontSize: "12px", fontWeight: "200", color: "#CC8E9C" }}>{t("Bill")}</p>
      </div>
      <div className="tos_order_list_tile_column4">
        <p style={{ fontSize: "16px", fontWeight: "900", cursor: "pointer" }} onClick={navToChat}>
          {t("Chat Here")}
        </p>
        <div className="tos_order_list_tile_column4_buttons">
          <CustomButton
            text={t("Discard")}
            style={{
              boxShadow: "none",
            }}
            onClick={(e) => props.discardOrder(e, props.order._id)}
          />
        </div>
      </div>
    </div>
  );
}

function OrderCompletedListTile(props) {
  const { t } = useTranslation();

  const rating = calculateRating(props.order.client.ratings);
  const ratingsCount = calculateRatingsCount(props.order.client.ratings);

  const [isContactSupportOrderModal, setIsContactSupportOrderModal] = useState(false);
  const handleContactSupportOrderModalClose = (e) => {
    setIsContactSupportOrderModal(false);
  };
  const handleContactSupportOrderModalOpen = (e) => {
    e.stopPropagation();
    setIsContactSupportOrderModal(true);
  };

  return (
    <div
      className="tcos_order_list_tile_container"
      onClick={() => {
        if (!isContactSupportOrderModal) {
          props.navToViewOrder(props.order._id);
        }
      }}
    >
      <div className="tcos_order_list_tile_column1">
        <div
          className="tcos_order_list_tile_column1_img"
          style={{
            paddingBottom: "5%",
          }}
        >
          <img
            className="image_container"
            style={{
              height: "50pt",
              width: "50pt",
            }}
            src={props.order.client.avatar ? assetsURL(props.order.client.avatar) : UserSVG}
          />
        </div>
      </div>
      <div
        className="tcos_order_list_tile_column1"
        style={{
          padding: "3%",
          alignItems: "flex-start",
        }}
      >
        <p
          className="tcos_order_list_tile_column1_title_text"
          style={{
            paddingBottom: "10px",
          }}
        >
          {props.order.client.name}
        </p>
        <p className="tcos_order_list_tile_column1_description_text">{props.order.name}</p>
      </div>
      <div
        className="tcos_order_list_tile_column1"
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
      <div className="tcos_order_list_tile_column1">
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
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          {`${props?.quote?.price ?? props?.order?.budget?.min_price ?? "N/A"}€`}
        </p>
      </div>
      <div
        className="tcos_order_list_tile_column5"
        style={{
          marginRight: "5vw",
        }}
      >
        <div className="tcos_order_list_tile_column5_buttons">
          <CustomButton
            text={t("Support")}
            style={{
              boxShadow: "none",
            }}
            onClick={(e) => {
              handleContactSupportOrderModalOpen(e);
            }}
          />
          <p style={{ fontSize: "13px", fontWeight: "900", marginTop: "10px" }}>{t(props.order.status.replace("_", " "))}</p>
        </div>
      </div>
      <Modal
        open={isContactSupportOrderModal}
        onClose={handleContactSupportOrderModalClose}
        aria-labelledby="Contact Support Order"
        onBackdropClick="false"
      >
        <ContactSupportOrderModal handleClose={handleContactSupportOrderModalClose} order={props.order} />
      </Modal>
    </div>
  );
}

function OrderDiscardedListTile(props) {
  const { t } = useTranslation();
  const rating = calculateRating(props.order.client.ratings);
  const ratingsCount = calculateRatingsCount(props.order.client.ratings);

  const [isContactSupportOrderModal, setIsContactSupportOrderModal] = useState(false);
  const handleContactSupportOrderModalClose = (e) => {
    setIsContactSupportOrderModal(false);
  };
  const handleContactSupportOrderModalOpen = (e) => {
    e.stopPropagation();
    setIsContactSupportOrderModal(true);
  };

  const navigate = useNavigate();
  const navtoClientProfile = () => {
    navigate(`/client_profile/${props.order.client._id}`);
  };

  return (
    <div
      className="tcos_order_list_tile_container"
      onClick={() => {
        if (!isContactSupportOrderModal) {
          props.navToViewOrder(props.order._id);
        }
      }}
    >
      <div className="tcos_order_list_tile_column1">
        <div
          className="tcos_order_list_tile_column1_img"
          style={{
            paddingBottom: "5%",
          }}
          onClick={navtoClientProfile}
        >
          <img
            className="image_container"
            style={{
              height: "50pt",
              width: "50pt",
            }}
            src={props.order.client.avatar ? assetsURL(props.order.client.avatar) : UserSVG}
          />
        </div>
      </div>
      <div
        className="tcos_order_list_tile_column1"
        style={{
          padding: "3%",
          alignItems: "flex-start",
        }}
      >
        <p
          className="tcos_order_list_tile_column1_title_text"
          style={{
            paddingBottom: "10px",
          }}
        >
          {props.order.client.name}
        </p>
        <p className="tcos_order_list_tile_column1_description_text">{props.order.name}</p>
      </div>
      <div
        className="tcos_order_list_tile_column1"
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
      <div className="tcos_order_list_tile_column1">
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
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          {`${props?.quote?.price ?? props?.order?.budget?.min_price ?? ""}€`}
        </p>
      </div>
      <div
        className="tcos_order_list_tile_column5"
        style={{
          marginRight: "5vw",
        }}
      >
        <div className="tcos_order_list_tile_column5_buttons">
          <CustomButton
            text={t("Support")}
            style={{
              boxShadow: "none",
            }}
            onClick={(e) => {
              handleContactSupportOrderModalOpen(e);
            }}
          />
          <p style={{ fontSize: "13px", fontWeight: "900", marginTop: "10px" }}>{t(props.order.status.replace("_", " "))}</p>
        </div>
      </div>
      <Modal
        open={isContactSupportOrderModal}
        onClose={handleContactSupportOrderModalClose}
        aria-labelledby="Contact Support Order"
        onBackdropClick="false"
      >
        <ContactSupportOrderModal handleClose={handleContactSupportOrderModalClose} order={props.order} />
      </Modal>
    </div>
  );
}

const ContactSupportOrderModal = (props) => {
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);

  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [attachment, setAttachment] = useState(null);

  const { t } = useTranslation();
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setAttachment(file);
  };

  const navToChat = () => {
    navigate("/chat");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValidated = FormValidations.tailorContactSupportOrder({
      reason,
      details,
    });

    if (!isValidated) {
      return;
    }

    if (!attachment) {
      toast.error(t("Attachment must be selected"));
      return;
    }

    if (isProcessing) {
      return;
    }

    let response;

    try {
      setIsProcessing(true);

      const body = new FormData();

      body.append("id", props.order._id);
      body.append("reason", reason);
      body.append("details", details);
      body.append("attachment", attachment);

      response = await Api("post", "/orders/support", body);

      if (response?.data?.success) {
        toast.success(t("Support request submitted successfully."));
        props.handleClose();
        navToChat();
      }
    } catch (e) {
      console.trace(e);
    }

    setIsProcessing(false);
  };

  return (
    <div className="tqs_sqm_container">
      <div
        className="tqs_sqm_input_container"
        style={{
          borderTopLeftRadius: "20px",
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          marginBottom: "2%",
          padding: "1.6% 0",
        }}
      >
        <div className="tqs_sqm_input_label">
          <p className="tqs_sqm_input_text">{t("Reason")}</p>
        </div>
        <div className="tqs_sqm_input_input">
          <CustomInput
            labelStyle={{
              display: "none",
            }}
            inputStyle={{
              border: "none",
              fontSize: "12px",
            }}
            inputPlaceholder={t("Enter Reason")} // TODO: Add Trans
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
      </div>
      <div
        className="tqs_sqm_textarea_container"
        style={{
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          marginBottom: "2%",
        }}
      >
        <div className="tqs_sqm_textarea_label">
          <p className="tqs_sqm_input_text">{t("Details")}</p>
        </div>
        <div className="tqs_sqm_input_input">
          <textarea
            className="tqs_sqm_textarea_textarea"
            placeholder={t("Details")}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
      </div>
      <div
        className="pa_profile_section_input_container"
        style={{
          borderRadius: "20px",
          marginBottom: "2%",
          width: "100%",
          padding: "1.6% 0",
        }}
      >
        <div className="pa_profile_section_input_label">
          <p className="pa_profile_section_input_text">{t("Attachments")}</p>
        </div>
        <div className="pa_profile_section_input_input">
          <label className="upload-pic-label">
            <input type="file" accept="image/*" hidden id="filePicker" name="file" onChange={handleFileSelect} />
            <div className="upload-img-text-cont">
              <span className="upload-img-text">{attachment?.name ?? "Upload Drawing, Photo, Document, etc"}</span>
              <img src={UploadSVG} />
            </div>
          </label>
        </div>
      </div>
      <div className="tvqs_sq_buttons">
        <CustomButton
          text={t("Cancel")}
          style={{
            boxShadow: "none",
            marginRight: "10pt",
          }}
          onClick={props.handleClose}
        />
        <CustomButton
          text={t("Submit")}
          style={{
            boxShadow: "none",
          }}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default TailorOrdersScreen;
