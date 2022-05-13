import React, { useState, useEffect } from "react";

import TailorAppBar from "../../components/TailorAppBar";
import SearchIcon from "../../assets/search1.svg";
import UserSVG from "../../assets/resultimg1.svg";
import Footer from "../../components/Footer";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";

import CustomButton from "../../components/CustomButton";

import { useNavigate } from "react-router-dom";

import { getUser } from "../../utils/Auth";
import Api from "../../api";

import assetsURL from "../../utils/Assets";

import { toast } from "react-toastify";

function TailorSearchResultsScreen() {
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const user = getUser();

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async (_) => {
    let response;
    try {
      response = await Api("get", `/orders/byName/${_ ?? query}`);
      const ordersData = response.data.orders;
      setOrders(ordersData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

  const callback = () => {
    if (!searchQuery) {
      toast.error(t("Search Input can't be empty"));
      return;
    }
    getOrders(searchQuery);
  };

  return (
    <div className="container-page-vertical">
      <TailorAppBar color="#FDFDFC" disableSearch />
      <div
        className="client_orders_screen_top"
        style={{
          background: "#E5E5E5",
        }}
      >
        <div className="thiw_qna_standard_screen_row1">
          <SearchInput setSearchQuery={setSearchQuery} callback={callback} />
        </div>
        <div
          style={{
            width: "85%",
            textAlign: "right",
            padding: "20px",
            color: "gray",
          }}
        >
          <p>
            {orders.length} {t("Orders Found")}
          </p>
        </div>
        {orders.map((_) => (
          <SingleResult
            order={_}
            quote={_.quotes.filter((__) => __.status == "accepted")[0]}
          />
        ))}
        <CustomButton
          text={t("See All")}
          style={{
            alignSelf: "center",
            boxShadow: "none",
            marginBottom: "20px",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

function SearchInput({ setSearchQuery, callback }) {
  const { t } = useTranslation();

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <input
        type="text"
        placeholder={t("Search")}
        className="tsrs_search_input"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <img
        src={SearchIcon}
        className="tsrs_search_input_icon"
        onClick={callback}
      />
    </div>
  );
}

function SingleResult(props) {
  const { t } = useTranslation();
  return (
    <div className="tsrs_single_result_list_tile_container">
      <div className="tsrs_single_result_list_tile_row">
        <div className="tsrs_single_result_list_tile_row_column1">
          <img
            className="image_container"
            style={{
              height: "80pt",
              width: "80pt",
              cursor: "pointer",
              marginBottom: "4%",
            }}
            src={
              props.order.client.avatar
                ? assetsURL(props.order.client.avatar)
                : UserSVG
            }
          />
          <div>
            <h3
              style={{
                color: "#cc8e9c",
                fontSize: "22px",
                fonWeight: "600",
              }}
            >
              {props.order.client.name}
            </h3>
            <p
              style={{
                fontSize: "12px",
                color: "gray",
                padding: "7px 0px",
                lineHeight: "1.4",
              }}
            >
              {props.order.name}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
                style={{ color: "grey" }}
              />
            </Stack>
            <p style={{ color: "grey", paddingLeft: "6px" }}> 4.5(32k)</p>
          </div>
        </div>
        <div className="tsrs_single_result_list_tile_row_column1">
          <div
            style={{
              paddingLeft: "20px",
            }}
          >
            <h3
              style={{
                color: "gray",
                padding: "4px 5px",
                fontWeight: "900",
              }}
            >
              offer
            </h3>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              {" "}
              ${props?.quote?.price ?? props?.order?.budget?.min_price ?? "N/A"}
            </h3>
          </div>
          <div>
            <h1
              style={{
                fontSize: "24px",
                opacity: "0.5",
                fontWeight: "600",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {t(props.order.status.replace("_", " "))}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TailorSearchResultsScreen;
