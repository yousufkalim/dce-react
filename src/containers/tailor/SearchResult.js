import React from "react";

import TailorAppBar from "../../components/TailorAppBar";
import SearchIcon from "../../assets/search1.svg";
import UserSVG from "../../assets/resultimg1.svg";
import UserSVG2 from "../../assets/resultimg2.svg";
import Footer from "../../components/Footer";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function SearchResult() {
  return (
    <div className="container-page-vertical">
      <TailorAppBar color="#FDFDFC" />
      <div
        className="client_orders_screen_top"
        style={{
          background: "#E5E5E5",
        }}
      >
        <div className="thiw_qna_standard_screen_row1">
          <SearchInput />
        </div>
        <div className="foundorder">
          <p>23 Order Found</p>
        </div>
        <SingleResult />
        <SingleResult />
        <SingleResult />
        <SingleResult />
        <SingleResult />
        <div className="btndiv">
          <button className="viewAllBtn">View All</button>
        </div>
      </div>
    </div>
  );
}

function SearchInput({}) {
  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <input type="text" placeholder="Search" className="searchInput" />
        <img src={SearchIcon} className="searchInputIcon" />
      </div>
    </>
  );
}
function SingleResult() {
  return (
    <div className="searchResultmainDiv">
      <div className="mainColDiv">
        <div className="col1">
          <img src={UserSVG} style={{ width: "20%" }} />

          <div>
            <h3 className="nameh3">Almirah</h3>
            <p className="headingp">Bride Dresses</p>
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
        <div className="col2">
          <div className="offerDiv">
            <h3 className="offerheading">offer</h3>
            <h3 className="offerPrice"> $400</h3>
          </div>
          <div>
            <h1 className="completeStatus">Completed</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
