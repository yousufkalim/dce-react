import React, { useState, useEffect } from "react";

import ClientAppBar from "../../components/ClientAppBar";
import Footer from '../../components/Footer'
import SearchIcon from "../../assets/search1.svg";
import UserSVG from "../../assets/resultimg1.svg";
import CustomButton from "../../components/CustomButton";

import { useNavigate } from "react-router-dom";

import { getUser } from "../../utils/Auth";
import Api from "../../api";

import assetsURL from "../../utils/Assets";

import { toast } from "react-toastify";

function ClientSearchResultsScreen() {
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [tailors, setTailors] = useState([]);
  const user = getUser();

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getTailors();
  }, []);

  const getTailors = async (_) => {
    let response;
    try {
      response = await Api("get", `/tailors/byQuery/${_ ?? query}`);
      const tailorsData = response.data.users;
      setTailors(tailorsData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

  const callback = () => {
    if (!searchQuery) {
      toast.error("Search Input can't be empty");
      return;
    }
    getTailors(searchQuery);
  };

  return (
    <>
    <div className="container-page-vertical">
      <ClientAppBar color="#FDFDFC" disableSearch />
      <div
        className="client_orders_screen_top"
        style={{
          background: "#E5E5E5",
        }}
      >
        <div className="client_search_results_screen_row1">
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
          <p>{tailors.length} Designers Found</p>
        </div>
        <div className="client_search_results_screen_row2">
          {tailors.map((_) => (
            <SingleResult {..._} />
          ))}
        </div>
        <CustomButton
          text="View All"
          style={{
            alignSelf: "center",
            boxShadow: "none",
            marginTop: "5%",
            marginBottom: "5%",
          }}
        />
      </div>
    </div>
    <Footer/>
</>
  );
}

function SearchInput({ setSearchQuery, callback }) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <input
        type="text"
        placeholder="Search"
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
  return (
    <div className="csrs_single_result_list_tile_container">
      <div className="csrs_single_result_list_tile_column">
        <img
          className="image_container"
          style={{
            height: "80pt",
            width: "80pt",
            cursor: "pointer",
            marginBottom: "4%",
          }}
          src={props.avatar ? assetsURL(props.avatar) : UserSVG}
        />
        <p
          style={{
            color: "#cc8e9c",
            fontSize: "16px",
            fonWeight: "bold",
            marginBottom: "7%",
          }}
        >
          {props.name}
        </p>
        <div
          className="csrs_single_result_list_tile_column_item csrs_single_result_list_tile_column_borders"
          style={{
            padding: "3% 0",
          }}
        >
          <p className="csrs_single_result_list_tile_column_key">
            Total Orders
          </p>
          <p className="csrs_single_result_list_tile_column_value">N/A</p>
        </div>
        <div
          className="csrs_single_result_list_tile_column_item csrs_single_result_list_tile_column_borders"
          style={{
            padding: "3% 0",
          }}
        >
          <p className="csrs_single_result_list_tile_column_key">Experience</p>
          <p className="csrs_single_result_list_tile_column_value">
            {props.experience}
          </p>
        </div>
        <div
          className="csrs_single_result_list_tile_column_item csrs_single_result_list_tile_column_borders"
          style={{
            padding: "3% 0",
          }}
        >
          <p className="csrs_single_result_list_tile_column_key">Speciality</p>
          <p className="csrs_single_result_list_tile_column_value">
            {props.speciality}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClientSearchResultsScreen;
